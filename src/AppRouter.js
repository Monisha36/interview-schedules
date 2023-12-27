import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App/App";
import Read from "./Components/Read/Read";

function AppRouter() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
