import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
