import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '../utils/localStorageUtils';

interface ProtectedRouteProps {
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectTo }) => {
  //debugger
  const user = getUser();
  return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
