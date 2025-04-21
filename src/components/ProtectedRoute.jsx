import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../firebase/useAuth"; 


const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // 👈 wait for auth to finish checking
  if (!currentUser) return <Navigate to="/login" />;
  
  return children;
};

export default ProtectedRoute;
