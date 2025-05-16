import React from "react";

export default function Support() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9fafd] min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-12 bg-white border-b">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">Apple Support</h1>
        <div className="text-lg md:text-2xl text-[#5fadc6] mb-4 text-center">We’re here to help.</div>
        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition">Get Support</a>
          <a href="#" className="bg-gray-200 text-[#2e373a] px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-300 transition">Start a Repair</a>
        </div>
      </section>

      {/* Support Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 max-w-6xl px-3">
        {/* iPhone */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/3384984724.jpeg" alt="iPhone" className="w-24 mb-4 rounded-lg object-contain" />
          <h2 className="text-lg font-semibold mb-2">iPhone</h2>
          <p className="text-gray-600 text-sm mb-2 text-center">Get help with set up, updating, and more for your iPhone.</p>
          <a href="#" className="text-blue-600 font-medium text-sm hover:underline">See topics</a>
        </div>
        {/* Mac */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/475379279.jpeg" alt="Mac" className="w-24 mb-4 rounded-lg object-contain" />
          <h2 className="text-lg font-semibold mb-2">Mac</h2>
          <p className="text-gray-600 text-sm mb-2 text-center">Find solutions for MacBook, iMac, and Mac mini issues.</p>
          <a href="#" className="text-blue-600 font-medium text-sm hover:underline">See topics</a>
        </div>
        {/* iPad */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/702619004.jpeg" alt="iPad" className="w-24 mb-4 rounded-lg object-contain" />
          <h2 className="text-lg font-semibold mb-2">iPad</h2>
          <p className="text-gray-600 text-sm mb-2 text-center">Get support for your iPad including set up, Apple Pencil, and more.</p>
          <a href="#" className="text-blue-600 font-medium text-sm hover:underline">See topics</a>
        </div>
        {/* Watch */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/485267094.jpeg" alt="Apple Watch" className="w-24 mb-4 rounded-lg object-contain" />
          <h2 className="text-lg font-semibold mb-2">Apple Watch</h2>
          <p className="text-gray-600 text-sm mb-2 text-center">Support for Series 10, Ultra, and other Apple Watch models.</p>
          <a href="#" className="text-blue-600 font-medium text-sm hover:underline">See topics</a>
        </div>
        {/* AirPods */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/2727098791.jpeg" alt="AirPods" className="w-24 mb-4 rounded-lg object-contain" />
          <h2 className="text-lg font-semibold mb-2">AirPods</h2>
          <p className="text-gray-600 text-sm mb-2 text-center">Audio, connection, and care for all AirPods models.</p>
          <a href="#" className="text-blue-600 font-medium text-sm hover:underline">See topics</a>
        </div>
        {/* Services */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
          <img src="https://ext.same-assets.com/3629275162/956296356.jpeg" alt="Apple Services" className="w-24 mb-4 rounded-lg object-contain" />
          <h2 className="text-lg font-semibold mb-2">Apple Services</h2>
          <p className="text-gray-600 text-sm mb-2 text-center">Help with iCloud, Apple Music, TV+, App Store, News+, and more.</p>
          <a href="#" className="text-blue-600 font-medium text-sm hover:underline">See topics</a>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="w-full flex flex-col items-center py-8 bg-[#F5F7FA] border-t">
        <div className="text-xl font-semibold mb-4">Quick links</div>
        <div className="flex flex-wrap gap-4 mb-2 text-blue-600 justify-center">
          <a href="#" className="hover:underline">Check Coverage</a>
          <a href="#" className="hover:underline">Contact Support</a>
          <a href="#" className="hover:underline">Find a Service Center</a>
          <a href="#" className="hover:underline">AppleCare+</a>
          <a href="#" className="hover:underline">Community</a>
        </div>
      </section>
    </div>
  );
}
