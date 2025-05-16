import React from "react";

export default function TVHome() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9fafd] min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pb-12 bg-white border-b">
        <img
          src="https://ext.same-assets.com/3629275162/420744942.jpeg"
          alt="Apple TV 4K"
          className="w-full max-w-2xl mt-10 mb-6 object-contain"
        />
        <h1 className="text-3xl md:text-4xl font-semibold mb-1">TV & Home</h1>
        <div className="text-lg md:text-2xl text-[#5fadc6] mb-2">Bring your favorite entertainment and smart home devices together.</div>
        <div className="flex gap-3 mb-4">
          <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition">Learn more</a>
          <a href="#" className="bg-gray-200 text-[#2e373a] px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-300 transition">Buy</a>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 max-w-6xl px-3">
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/420744942.jpeg" alt="Apple TV 4K" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">Apple TV 4K</h2>
          <p className="text-gray-600 text-md mb-2">The ultimate cinematic streaming experience.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/475379279.jpeg" alt="HomePod" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">HomePod</h2>
          <p className="text-gray-600 text-md mb-2">Deep bass and crisp high notes. Room-filling sound.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/702619004.jpeg" alt="HomePod mini" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">HomePod mini</h2>
          <p className="text-gray-600 text-md mb-2">Surprisingly big sound for its size.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/4047110055.jpeg" alt="Siri Remote" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">Siri Remote</h2>
          <p className="text-gray-600 text-md mb-2">Effortlessly control your Apple TV and smart home.</p>
        </div>
      </section>

      {/* Promo/Comparison Section */}
      <section className="w-full flex flex-col items-center py-10 bg-[#F5F7FA] border-t">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Find the perfect setup for your home.</h2>
        <p className="mb-6 text-gray-700">Compare Apple TV & Home devices.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <img src="https://ext.same-assets.com/3629275162/420744942.jpeg" className="w-28 rounded-lg" alt="Apple TV 4K" />
          <img src="https://ext.same-assets.com/3629275162/475379279.jpeg" className="w-28 rounded-lg" alt="HomePod" />
          <img src="https://ext.same-assets.com/3629275162/702619004.jpeg" className="w-28 rounded-lg" alt="HomePod mini" />
        </div>
        <a href="#" className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition">Compare all devices</a>
      </section>
    </div>
  );
}
