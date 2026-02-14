"use client";

import { Map, Marker } from "pigeon-maps";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export interface PriceMapStore {
  id: number;
  lat: number;
  lng: number;
  price: string;
  address: string;
}

export interface PriceMapProps {
  stores: PriceMapStore[];
}

export default function PriceMap({ stores }: PriceMapProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [center, setCenter] = useState<[number, number]>([20.5937, 78.9629]);
  const [zoom, setZoom] = useState(5);
  const [selected, setSelected] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [notFound, setNotFound] = useState(false);

  const mapTiles = isDark ? "dark_all" : "light_all";
  const markerColor = (selectedId: number) =>
    selected === selectedId ? (isDark ? "#fff" : "#18181b") : isDark ? "#a1a1aa" : "#3f3f46";

  const filtered = stores.filter((s) =>
    s.address.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    if (filtered.length > 0) {
      const store = filtered[0];
      setCenter([store.lat, store.lng]);
      setZoom(12);
      setSelected(store.id);
    } else {
      setNotFound(true);
    }
  };

  return (
    <div className="relative min-h-[70vh] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-950">
      <div className="absolute left-1/2 top-4 z-10 flex w-full max-w-md -translate-x-1/2 gap-2 px-4">
        <div className="flex flex-1 items-center rounded-md border border-input bg-background px-3 shadow-sm transition-[box-shadow] focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by city or address..."
            className="h-9 min-w-0 flex-1 rounded-[2px] bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <Button onClick={handleSearch} size="default" className="h-9 shrink-0 rounded-[2px] px-4">
          Search
        </Button>
      </div>

      <Map
        height={600}
        center={center}
        zoom={zoom}
        attribution={false}
        provider={(x, y, z, dpr) =>
          `https://cartodb-basemaps-a.global.ssl.fastly.net/${mapTiles}/${z}/${x}/${y}${
            dpr && dpr >= 2 ? "@2x" : ""
          }.png`
        }
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center);
          setZoom(zoom);
        }}
      >
        {stores.map((store) => (
          <Marker
            key={store.id}
            anchor={[store.lat, store.lng]}
            width={24}
            height={24}
            color={markerColor(store.id)}
            onClick={() => setSelected(store.id)}
          />
        ))}
      </Map>
  {
    notFound &&(
      <div className="absolute bottom-6 left-6 z-10 w-[min(100%-3rem,22rem)] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
        <div className="border-b border-zinc-100 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-800/50">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            No store found for that address!
          </p>
        </div>
      </div>
    )
  }
      {stores.map(
        (store) =>
          selected === store.id && (
            <div
              key={store.id}
              className="absolute bottom-6 left-6 z-10 w-[min(100%-3rem,22rem)] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            >
              <div className="border-b border-zinc-100 bg-zinc-50/80 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-800/50">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Price
                </p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {store.price}
                </p>
              </div>
              <div className="px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Address
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {store.address}
                </p>
              </div>
              <div className="flex justify-end border-t border-zinc-100 px-4 py-1 dark:border-zinc-800">
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-lg px-4 py-2 text-sm cursor-pointer font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                >
                  Close
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
}
