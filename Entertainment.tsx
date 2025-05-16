import React from "react";

export default function Entertainment() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f9fafd] min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pb-10 bg-white border-b">
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/2a/7e/2e/2a7e2e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e/mzl.uvzqjvka.jpg/2000x800bb.jpeg"
          alt="Apple TV+ Hero"
          className="w-full max-w-2xl mt-10 mb-8 object-contain rounded shadow"
        />
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">Entertainment</h1>
        <div className="text-lg md:text-2xl text-[#5fadc6] mb-4">
          Enjoy movies, TV shows, music, games, workouts, books, and news—all Apple originals, right at your fingertips.
        </div>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Free Trial
        </a>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 max-w-5xl px-3">
        {/* Apple TV+ */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-7">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2e/2e/2e/2e2e2e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630bb.png"
            alt="Apple TV+"
            className="w-32 mb-5 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">Apple TV+</h2>
          <p className="text-gray-600 text-md mb-4 text-center">
            Award-winning original series and films, only on Apple TV+.
          </p>
          <a
            href="https://tv.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-md font-medium hover:bg-blue-700 transition"
          >
            Try Free
          </a>
        </div>
        {/* Apple Music */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-7">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/2e/2e/2e/2e2e2e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630bb.png"
            alt="Apple Music"
            className="w-32 mb-5 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">Apple Music</h2>
          <p className="text-gray-600 text-md mb-4 text-center">
            Over 100 million songs, ad-free. Listen online or off, across all devices.
          </p>
          <a
            href="https://music.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-md font-medium hover:bg-blue-700 transition"
          >
            Try Free
          </a>
        </div>
        {/* Apple Arcade */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-7">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/2e/2e/2e/2e2e2e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630bb.png"
            alt="Apple Arcade"
            className="w-32 mb-5 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">Apple Arcade</h2>
          <p className="text-gray-600 text-md mb-4 text-center">
            Hundreds of games. Zero ads. One subscription. Play across iPhone, iPad, Mac, and Apple TV.
          </p>
          <a
            href="https://www.apple.com/apple-arcade/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-md font-medium hover:bg-blue-700 transition"
          >
            Try Free
          </a>
        </div>
        {/* Apple Fitness+ */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-7">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/2e/2e/2e/2e2e2e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630bb.png"
            alt="Apple Fitness+"
            className="w-32 mb-5 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">Apple Fitness+</h2>
          <p className="text-gray-600 text-md mb-4 text-center">
            Work out anytime, anywhere, with trainers who inspire you.
          </p>
          <a
            href="https://www.apple.com/apple-fitness-plus/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-md font-medium hover:bg-blue-700 transition"
          >
            Try Free
          </a>
        </div>
        {/* Apple Books */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-7">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/2e/2e/2e/2e2e2e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630bb.png"
            alt="Apple Books"
            className="w-32 mb-5 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">Apple Books</h2>
          <p className="text-gray-600 text-md mb-4 text-center">
            Discover your next great read or listen. Explore bestsellers, audiobooks, and more.
          </p>
          <a
            href="https://books.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-md font-medium hover:bg-blue-700 transition"
          >
            Explore
          </a>
        </div>
        {/* Apple News+ */}
        <div className="bg-white rounded-xl shadow flex flex-col items-center p-7">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/2e/2e/2e/2e2e2e2e-2e2e-2e2e-2e2e-2e2e2e2e2e2e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630bb.png"
            alt="Apple News+"
            className="w-32 mb-5 rounded-lg object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">Apple News+</h2>
          <p className="text-gray-600 text-md mb-4 text-center">
            Stay up to date with premium news, magazines, and audio stories.
          </p>
          <a
            href="https://www.apple.com/apple-news/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-md font-medium hover:bg-blue-700 transition"
          >
            Try Free
          </a>
        </div>
      </section>
    </div>
  );
}
