import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./my-page";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
        {/* <Route path="/my-page">
          <MyPage />
        </Route> */}
        <Route path="/my-page" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
