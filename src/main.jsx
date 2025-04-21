import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import UploadVideo from "./components/UploadVideo";
import Home from "./components/HomePage";
import About from "./components/AboutPage";
import Contact from "./components/ContactPage";
import VideoList from "./components/VideoList";
import ProfilePage from "./components/ProfilePage";
import QuizSection from "./components/QuizSection";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="videos"
            element={
              <ProtectedRoute>
                <VideoList />
              </ProtectedRoute>
            }
          />
          <Route
            path="quiz"
            element={
              <ProtectedRoute>
                <QuizSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="upload"
            element={
              <ProtectedRoute>
                <UploadVideo />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
