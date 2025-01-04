import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup"
import LoginPage from "./pages/login"
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
