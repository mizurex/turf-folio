"use client";

import { Sidebar } from "@/components/sidebar";


export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </>
  );
}




