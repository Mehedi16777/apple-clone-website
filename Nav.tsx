import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Store", path: "/store" },
  { name: "Mac", path: "/mac" },
  { name: "iPad", path: "/ipad" },
  { name: "iPhone", path: "/iphone" },
  { name: "Watch", path: "/watch" },
  { name: "AirPods", path: "/airpods" },
  { name: "TV & Home", path: "/tv-home" },
  { name: "Entertainment", path: "/entertainment" },
  { name: "Support", path: "/support" }
];

const appleSVG = (
  <svg
    aria-label="Apple logo"
    height="20"
    width="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ display: "inline", verticalAlign: "middle" }}
  >
    <path d="M16.53 10.74c-.01-2.27 1.86-3.35 1.94-3.4-1.06-1.57-2.7-1.79-3.28-1.82-1.39-.13-2.72.81-3.43.81-.71 0-1.82-.79-2.99-.77-1.54.02-2.97.89-3.76 2.26-1.62 2.8-.41 6.94 1.16 9.21.77 1.1 1.69 2.34 2.89 2.29 1.17-.05 1.62-.74 3.04-.74s1.83.74 3.09.72c1.28-.02 2.09-1.12 2.85-2.22.9-1.31 1.27-2.58 1.28-2.65-.03-.01-2.46-.95-2.48-3.77zm-3.02-7.01c.63-.77 1.05-1.84.94-2.88-.91.04-2 .6-2.65 1.37-.58.67-1.09 1.74-.9 2.77 1.01.08 1.97-.52 2.61-1.26z" />
  </svg>
);

export default function Nav() {
  const location = useLocation();
  return (
    <header className="w-full shadow-sm sticky top-0 z-30">
      <nav
        className="bg-white max-w-full flex items-center justify-center h-12 border-b border-gray-200 px-1 md:px-0"
        aria-label="Global navigation"
        style={{ boxShadow: "0 1px 4px 0 rgba(51,51,51,0.03)" }}
      >
        <div className="flex flex-1 md:max-w-5xl lg:max-w-6xl justify-center items-center relative">
          {/* Apple logo left */}
          <Link to="/" className="absolute left-2 md:left-0 flex items-center h-full px-2" style={{ color: "#2e373a" }}>
            {appleSVG}
            <span className="sr-only">Apple Home</span>
          </Link>

          {/* Nav links center */}
          <ul className="flex gap-x-3 md:gap-x-6 mx-auto">
            {navLinks.map((link) => (
              <li key={link.name} className="list-none">
                <Link
                  to={link.path}
                  className={`text-[15px] font-medium px-1 md:px-2 pt-px pb-0.5 tracking-wider transition-colors rounded hover:bg-[#f3f3f7] hover:text-blue-500 ${
                    location.pathname.startsWith(link.path)
                      ? "text-blue-600 font-semibold"
                      : "text-[#2e373a]"
                  }`}
                  style={{ height: 32, display: "inline-flex", alignItems: "center" }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
