import React from "react";

export default function iPad() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9fafd] min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pb-12 bg-white border-b">
        <img
          src="https://ext.same-assets.com/3629275162/702619004.jpeg"
          alt="iPad Air M3"
          className="w-full max-w-3xl mt-10 mb-6 object-contain"
        />
        <h1 className="text-4xl md:text-5xl font-semibold mb-1">iPad Air</h1>
        <div className="text-lg md:text-2xl text-[#5fadc6] mb-2">
          Now supercharged by the M3 chip.
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
        <div className="text-base text-gray-400 mb-6">
          From $599
        </div>
      </section>

      {/* Product Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 max-w-6xl px-3">
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/702619004.jpeg" alt="iPad Air M3" className="w-48 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">iPad Air</h2>
          <p className="text-gray-600 text-md mb-2">Supercharged by Apple Silicon. Ultra thin and powerful.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/2727098791.jpeg" alt="iPad Pro" className="w-48 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">iPad Pro</h2>
          <p className="text-gray-600 text-md mb-2">The ultimate iPad experience with M4 chip and stunning display.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/1299952114.jpeg" alt="iPad" className="w-48 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">iPad</h2>
          <p className="text-gray-600 text-md mb-2">The all-rounder. Affordable and incredibly capable.</p>
        </div>
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/485267094.jpeg" alt="iPad mini" className="w-48 mb-6 rounded-lg object-contain" />
          <h2 className="text-xl font-semibold mb-2">iPad mini</h2>
          <p className="text-gray-600 text-md mb-2">Small, powerful, and portable.</p>
        </div>
      </section>

      {/* Compare & Promo Section */}
      <section className="w-full flex flex-col items-center py-10 bg-[#F5F7FA] border-t">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Which iPad is right for you?
        </h2>
        <p className="mb-6 text-gray-700">
          Explore and compare all iPad models
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src="https://ext.same-assets.com/3629275162/702619004.jpeg"
            className="w-32 rounded-lg"
            alt="iPad Air"
          />
          <img
            src="https://ext.same-assets.com/3629275162/2727098791.jpeg"
            className="w-32 rounded-lg"
            alt="iPad Pro"
          />
          <img
            src="https://ext.same-assets.com/3629275162/1299952114.jpeg"
            className="w-32 rounded-lg"
            alt="iPad"
          />
          <img
            src="https://ext.same-assets.com/3629275162/485267094.jpeg"
            className="w-32 rounded-lg"
            alt="iPad mini"
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
