import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Project from "../pages/Project";
import NotFound from "../errors/NotFound";

const VRoutes = () => (
  <div className="w-screen min-h-screen flex justify-center bg-black text-white">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default VRoutes;
