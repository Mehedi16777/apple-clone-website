import React from "react";

export default function Watch() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9fafd] min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pb-12 bg-white border-b">
        <img
          src="https://ext.same-assets.com/3629275162/485267094.jpeg"
          alt="Apple Watch Series 10"
          className="w-full max-w-2xl mt-10 mb-6 object-contain"
        />
        <img
          src="https://ext.same-assets.com/3629275162/2169552714.png"
          alt="Apple Watch Series 10 Logo"
          className="h-12 mb-4"
        />
        <h1 className="text-3xl md:text-4xl font-semibold mb-1">Thinstant classic.</h1>
        <div className="flex gap-3 mb-4">
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Learn more
          </a>
          <a
            href="#"
            className="bg-gray-200 text-[#2e373a] px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
          >
            Buy
          </a>
        </div>
        <div className="text-base text-gray-400 mb-6">From $399</div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 max-w-6xl px-3">
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/485267094.jpeg" alt="Series 10" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">Series 10</h2>
          <p className="text-gray-600 text-md mb-2">The most advanced health and wellness features yet.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/4047110055.jpeg" alt="Ultra 2" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">Ultra 2</h2>
          <p className="text-gray-600 text-md mb-2">The most rugged and capable Apple Watch.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/702619004.jpeg" alt="SE" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">SE</h2>
          <p className="text-gray-600 text-md mb-2">Essential features, great value.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/1299952114.jpeg" alt="Bands" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">Bands</h2>
          <p className="text-gray-600 text-md mb-2">Style your Apple Watch your way.</p>
        </div>
      </section>

      {/* Compare/Promo Section */}
      <section className="w-full flex flex-col items-center py-10 bg-[#F5F7FA] border-t">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Which Apple Watch is right for you?
        </h2>
        <p className="mb-6 text-gray-700">Explore and compare all models</p>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src="https://ext.same-assets.com/3629275162/485267094.jpeg"
            className="w-28 rounded-lg"
            alt="Series 10"
          />
          <img
            src="https://ext.same-assets.com/3629275162/4047110055.jpeg"
            className="w-28 rounded-lg"
            alt="Ultra 2"
          />
          <img
            src="https://ext.same-assets.com/3629275162/702619004.jpeg"
            className="w-28 rounded-lg"
            alt="SE"
          />
        </div>
        <a
          href="#"
          className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Compare all models
        </a>
      </section>
    </div>
  );
}
