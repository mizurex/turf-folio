import PriceMap from "../components/price-map";

const sampleStores = [
  { id: 1, lat: 28.6139, lng: 77.209, price: "₹3.50", address: "Shop 15, Block A, Connaught Place, New Delhi - 110001" },
  { id: 2, lat: 28.7041, lng: 77.1025, price: "₹4.20", address: "Store 42, Unity One Mall, Rohini Sector 7, Delhi - 110085" },
  { id: 3, lat: 28.5355, lng: 77.391, price: "₹2.80", address: "Shop 8, Central Market, Lajpat Nagar IV, New Delhi - 110024" },
  { id: 4, lat: 19.076, lng: 72.8777, price: "₹5.50", address: "Unit 205, R City Mall, Dadar West, Mumbai - 400028" },
  { id: 5, lat: 12.9716, lng: 77.5946, price: "₹7.50", address: "Unit 156, Forum Mall, MG Road, Bengaluru - 560001" },
];

export default function PriceMapDemo() {
  return <PriceMap stores={sampleStores} />;
}
