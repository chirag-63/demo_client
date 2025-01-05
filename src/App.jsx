import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup"
import LoginPage from "./pages/login"
import ProtectedRoute from './components/protectedRoute';
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <SignupPage setIsAuthenticated={setIsAuthenticated}
          />} />
        <Route path="/signup" element={
          <SignupPage setIsAuthenticated={setIsAuthenticated}
          />} />
        <Route path="/login" element={
          <LoginPage setIsAuthenticated={setIsAuthenticated}
          />} />
        <Route path="/home" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <HomePage  />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} >
            <ProfilePage />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
