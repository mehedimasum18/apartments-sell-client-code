import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { currentUser, isLoading, admin } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          currentUser?.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;