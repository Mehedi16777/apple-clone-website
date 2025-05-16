import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 bg-[#f2f3f9]">
        <Outlet />
      </main>
      {/* Simple Apple-style footer */}
      <footer className="w-full bg-[#f2f3f9] border-t py-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-[#738087]">
          <div className="mb-6">© 2024 Apple Inc. All rights reserved.</div>
          <div>Privacy Policy | Terms of Use | Legal | Site Map</div>
        </div>
      </footer>
    </div>
  );
}
