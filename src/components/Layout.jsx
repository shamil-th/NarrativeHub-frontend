import React from "react";
import Profile from "./user/userProfile/Profile";
import CreateBlog from "./user/userProfile/blog creation/CreateBlog";
import { Routes, Route } from "react-router-dom";
import Home from "./user/Home";

const Layout = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreateBlog />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Layout;
