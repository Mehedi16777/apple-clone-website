import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const Page = (props: { name: string }) =>
  <div className="pt-16 text-3xl text-center min-h-[60vh]">{props.name} page under construction</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Page name="Store" />} />
          <Route path="mac" element={<Page name="Mac" />} />
          <Route path="ipad" element={<Page name="iPad" />} />
          <Route path="iphone" element={<Page name="iPhone" />} />
          <Route path="watch" element={<Page name="Watch" />} />
          <Route path="airpods" element={<Page name="AirPods" />} />
          <Route path="tv-home" element={<Page name="TV & Home" />} />
          <Route path="entertainment" element={<Page name="Entertainment" />} />
          <Route path="support" element={<Page name="Support" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
