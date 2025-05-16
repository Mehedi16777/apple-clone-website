import React from "react";

export default function Mac() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9fafd] min-h-screen">
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center pb-12 bg-white border-b">
        <img
          src="https://ext.same-assets.com/3629275162/475379279.jpeg"
          alt="MacBook Air M4"
          className="w-full max-w-3xl mt-10 mb-6 object-contain"
        />
        <h1 className="text-4xl md:text-5xl font-semibold mb-1">MacBook Air</h1>
        <div className="text-lg md:text-2xl text-[#5fadc6] mb-2">
          Sky high performance with M4.<br />
          Sky blue, silver, starlight, and space gray.
        </div>
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
        <div className="text-base text-gray-400 mb-6">From $1099</div>
      </section>

      {/* Mac Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 max-w-6xl px-3">
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img
            src="https://ext.same-assets.com/3629275162/475379279.jpeg"
            alt="MacBook Air"
            className="w-48 mb-6 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">MacBook Air</h2>
          <p className="text-gray-600 text-md mb-2">
            Thin, light, and supercharged by M4.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img
            src="https://ext.same-assets.com/3629275162/4047110055.jpeg"
            alt="MacBook Pro"
            className="w-48 mb-6 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">MacBook Pro</h2>
          <p className="text-gray-600 text-md mb-2">
            The ultimate pro laptop.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img
            src="https://ext.same-assets.com/3629275162/702619004.jpeg"
            alt="iMac"
            className="w-48 mb-6 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">iMac</h2>
          <p className="text-gray-600 text-md mb-2">
            All-in-one. All in color.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img
            src="https://ext.same-assets.com/3629275162/1299952114.jpeg"
            alt="Mac mini"
            className="w-48 mb-6 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">Mac mini</h2>
          <p className="text-gray-600 text-md mb-2">
            Supercharged by M2 and M2 Pro.
          </p>
        </div>
      </section>

      {/* Compare & Promo */}
      <section className="w-full flex flex-col items-center py-10 bg-[#F5F7FA] border-t">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Which Mac is right for you?
        </h2>
        <p className="mb-6 text-gray-700">
          Compare all models and find your perfect Mac.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src="https://ext.same-assets.com/3629275162/475379279.jpeg"
            className="w-32 rounded-lg"
            alt="MacBook Air"
          />
          <img
            src="https://ext.same-assets.com/3629275162/4047110055.jpeg"
            className="w-32 rounded-lg"
            alt="MacBook Pro"
          />
          <img
            src="https://ext.same-assets.com/3629275162/702619004.jpeg"
            className="w-32 rounded-lg"
            alt="iMac"
          />
          <img
            src="https://ext.same-assets.com/3629275162/1299952114.jpeg"
            className="w-32 rounded-lg"
            alt="Mac mini"
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
