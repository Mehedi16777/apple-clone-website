import React from "react";
import "../index.css";

export default function Home() {
  return (
    <div className="bg-[#f2f3f9] text-[#2e373a] min-h-screen font-sans">
      {/* Accessibility Hero */}
      <section className="relative w-full min-h-[340px] flex flex-col items-center justify-center bg-cover bg-bottom" style={{ backgroundImage: 'url(https://ext.same-assets.com/3629275162/420744942.jpeg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2 drop-shadow">Accessibility</h2>
          <p className="text-lg md:text-2xl text-white mb-4 drop-shadow">Innovation that's accessible by design.</p>
          <a href="/accessibility/" className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition">Learn more</a>
        </div>
      </section>
      {/* ... existing code ... home page content ... */}
    </div>
  );
}
