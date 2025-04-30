import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import VideoList from "./components/VideoList";
import ProfilePage from "./components/ProfilePage";
import QuizSection from "./components/QuizSection";
import UploadVideo from "./components/UploadVideo";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";

const RoutesSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
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
    </Router>
  );
};

export default RoutesSetup;



