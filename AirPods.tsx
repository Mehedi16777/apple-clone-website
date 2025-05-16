import React from "react";

export default function AirPods() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9fafd] min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pb-12 bg-white border-b">
        <img
          src="https://ext.same-assets.com/3629275162/2727098791.jpeg"
          alt="AirPods Pro"
          className="w-full max-w-2xl mt-10 mb-6 object-contain"
        />
        <h1 className="text-3xl md:text-4xl font-semibold mb-1">AirPods Pro</h1>
        <div className="text-lg md:text-2xl text-[#5fadc6] mb-2">Immersive sound. Adaptive EQ. Active Noise Cancellation.</div>
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
        <div className="text-base text-gray-400 mb-6">From $249</div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 max-w-6xl px-3">
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/2727098791.jpeg" alt="AirPods Pro" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">AirPods Pro</h2>
          <p className="text-gray-600 text-md mb-2">Next-level audio, active noise cancellation, and comfort.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/485267094.jpeg" alt="AirPods" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">AirPods</h2>
          <p className="text-gray-600 text-md mb-2">Effortless wireless. All-day battery. Seamless device switching.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/4047110055.jpeg" alt="AirPods Max" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">AirPods Max</h2>
          <p className="text-gray-600 text-md mb-2">High-fidelity audio. Stunning design. Active Noise Cancellation.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/702619004.jpeg" alt="Accessories" className="w-36 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">Accessories</h2>
          <p className="text-gray-600 text-md mb-2">Add cases, tips, and more for the perfect fit.</p>
        </div>
      </section>

      {/* Compare/Promo Section */}
      <section className="w-full flex flex-col items-center py-10 bg-[#F5F7FA] border-t">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Which AirPods are right for you?
        </h2>
        <p className="mb-6 text-gray-700">Compare all models</p>
        <div className="flex flex-wrap justify-center gap-6">
          <img src="https://ext.same-assets.com/3629275162/2727098791.jpeg" className="w-28 rounded-lg" alt="AirPods Pro" />
          <img src="https://ext.same-assets.com/3629275162/485267094.jpeg" className="w-28 rounded-lg" alt="AirPods" />
          <img src="https://ext.same-assets.com/3629275162/4047110055.jpeg" className="w-28 rounded-lg" alt="AirPods Max" />
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
