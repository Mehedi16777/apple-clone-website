import React from "react";

export default function iPhone() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9fafd] min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pb-12 bg-white border-b">
        <img
          src="https://ext.same-assets.com/3629275162/3384984724.jpeg"
          alt="iPhone 16 Pro and Family"
          className="w-full max-w-3xl mt-10 mb-6 object-contain"
        />
        <h1 className="text-4xl md:text-5xl font-semibold mb-1">iPhone 16 Pro</h1>
        <div className="text-lg md:text-2xl text-[#5fadc6] mb-2">Titanium. So strong. So light. So Pro.</div>
        <div className="flex gap-3 mb-4">
          <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition">Learn more</a>
          <a href="#" className="bg-gray-200 text-[#2e373a] px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-300 transition">Buy</a>
        </div>
        <div className="text-base text-gray-400 mb-6">From $999 or $41.62/mo. for 24 mo. before trade-in*</div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 max-w-6xl px-3">
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/485267094.jpeg" alt="Action Button" className="w-60 mb-6 rounded-lg object-contain" />
          <h2 className="text-2xl font-semibold mb-2">The all-new Action button</h2>
          <p className="text-gray-600 text-lg mb-2">Get to your favorite feature fast.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/4047110055.jpeg" alt="A18 Pro chip" className="w-60 mb-6 rounded-lg object-contain" />
          <h2 className="text-2xl font-semibold mb-2">A18 Pro chip</h2>
          <p className="text-gray-600 text-lg mb-2">Next-level performance and efficiency.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/702619004.jpeg" alt="Pro Camera" className="w-60 mb-6 rounded-lg object-contain" />
          <h2 className="text-2xl font-semibold mb-2">Pro Camera System</h2>
          <p className="text-gray-600 text-lg mb-2">The most powerful camera ever in iPhone.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/1299952114.jpeg" alt="Super Retina XDR" className="w-60 mb-6 rounded-lg object-contain" />
          <h2 className="text-2xl font-semibold mb-2">Super Retina XDR display</h2>
          <p className="text-gray-600 text-lg mb-2">Vivid color and brilliant clarity.</p>
        </div>
      </section>

      {/* Promo Section */}
      <section className="w-full flex flex-col items-center py-10 bg-[#F5F7FA] border-t">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">iPhone for everyone.</h2>
        <p className="mb-6 text-gray-700">Explore the full range of iPhone models to find the one for you.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <img src="https://ext.same-assets.com/3629275162/3384984724.jpeg" className="w-40 rounded-lg" alt="iPhone 16 Pro" />
          <img src="https://ext.same-assets.com/3629275162/485267094.jpeg" className="w-40 rounded-lg" alt="iPhone 16" />
          <img src="https://ext.same-assets.com/3629275162/702619004.jpeg" className="w-40 rounded-lg" alt="iPhone 15" />
          <img src="https://ext.same-assets.com/3629275162/1299952114.jpeg" className="w-40 rounded-lg" alt="iPhone SE" />
        </div>
        <a href="#" className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition">Compare all models</a>
      </section>
    </div>
  );
}
