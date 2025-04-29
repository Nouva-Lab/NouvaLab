import React, { useState, Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Sidebar.css"; // Assuming you have a CSS file for sidebar styles
import "./components/ProfilePage.css"; // Assuming you have a CSS file for profile page styles
import "./components/HomePage.css"; // Assuming you have a CSS file for home page styles
import "./components/Subjects.css";
import "./components/VideoList.css"; // Assuming you have a CSS file for video list styles
import "./components/QuizSection.css"; // Assuming you have a CSS file for quiz section styles
import "./components/UploadVideo.css"; // Assuming you have a CSS file for upload video styles
import "./components/Login.css"; // Assuming you have a CSS file for login styles
import "./components/Register.css"; // Assuming you have a CSS file for register styles
import "./components/ContactPage.css"; // Assuming you have a CSS file for contact page styles
import "./components/AboutPage.css"; // Assuming you have a CSS file for about page styles


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <ErrorBoundary>
            <PageWrapper>
                <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
                    <Header toggleSidebar={toggleSidebar}/>
                    {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
                    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                        <ul className="sidebar-links">
                            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
                            <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
                            <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
                            <li><Link to="/videos" onClick={closeSidebar}>Videos</Link></li>
                            <li><Link to="/subjects" onClick={closeSidebar}>Subjects</Link></li>
                            <li><Link to="/quiz" onClick={closeSidebar}>Quiz</Link></li>
                            <li><Link to="/upload" onClick={closeSidebar}>Upload</Link></li>
                            <li><Link to="/profile" onClick={closeSidebar}>Profile</Link></li>
                            <li><Link to="/login" onClick={closeSidebar}>Login</Link></li>
                            <li><Link to="/register" onClick={closeSidebar}>Register</Link></li>
                        </ul>
                    </div>
                    <main className="main-content"><Outlet /></main>
                    <Footer />
                </div>
            </PageWrapper>
        </ErrorBoundary>
    );
}

export default App;
