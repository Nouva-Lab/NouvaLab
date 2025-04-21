import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = async () => {
    setLoading(true); // Set loading to true while logging out
    try {
      await signOut(auth);
      alert("Logged out successfully");
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      alert("Logout failed: " + error.message);
    } finally {
      setLoading(false); // Set loading to false after the logout process
    }
  };

  useEffect(() => {
    // Redirect to login if no user is logged in
    if (!auth.currentUser) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome, {auth.currentUser?.email || "Guest"}</h2>
      {loading ? (
        <button disabled>Logging out...</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Profile;
