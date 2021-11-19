import { AppBar, Avatar, Button, CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import AdminRoute from '../../Component/AdminRoute/AdminRoute';
import useAuth from '../../Hooks/useAuth';
import AddProduct from './Admin/AddProduct/AddProduct';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManagesAllOrders from './Admin/ManageAllOrders/ManagesAllOrders';
import ManageProduct from './Admin/ManageProduct/ManageProduct';
import DashboardHome from './DashboardHome/DashboardHome';
import Payment from './User/Payment/Payment';
import UserOrder from './User/UserOrder/UserOrder';
import UserReview from './User/UserReview/UserReview';

const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  let { path, url } = useRouteMatch();
  const { logOut, currentUser, admin } = useAuth();
  const displayname = currentUser?.displayName;
  
   const handleDrawerToggle = () => {
     setMobileOpen(!mobileOpen);
   };
  
  const useStyles = makeStyles({
    listItemColor: {
      color: "#fff",
      marginLeft: "24px",
      fontWeight: "700",
    },
    listItemIconColor: {
      color: "#fff",
    },
  });
  
  const { listItemColor } = useStyles();
  
    const drawer = (
      <div>
        <Toolbar
          sx={{ color: "#fff", fontWeight: "bold", textTransform: "upperCase" }}
        >
          {displayname}
        </Toolbar>
        <Divider />
        <List>
          {!admin ? (
            <>
              <ListItem button component={Link} to={`${url}/userOrder`}>
                <ListItemText className={listItemColor} primary="My Orders" />
              </ListItem>
              <ListItem button component={Link} to={`${url}/payment`}>
                <ListItemText className={listItemColor} primary="Payment" />
              </ListItem>
              <ListItem button component={Link} to={`${url}/userReview`}>
                <ListItemText className={listItemColor} primary="Add Review" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem button component={Link} to={`${url}/addProduct`}>
                <ListItemText className={listItemColor} primary="Add Product" />
              </ListItem>
              <ListItem button component={Link} to={`${url}/makeAdmin`}>
                <ListItemText className={listItemColor} primary="Make Admin" />
              </ListItem>
              <ListItem button component={Link} to={`${url}/manageAllOrders`}>
                <ListItemText
                  className={listItemColor}
                  primary="Manage All Orders"
                />
              </ListItem>
              <ListItem button component={Link} to={`${url}/manageProduct`}>
                <ListItemText
                  className={listItemColor}
                  primary="Manage Product"
                />
              </ListItem>
            </>
          )}
        </List>
      </div>
    );

   const container =
     window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ background: "#00adff14", height: "100vh" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            background: "#ff80ab",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <Button
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              Menu
            </Button>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, textAlign: "left" }}
            >
              Dashboard
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            {currentUser?.email ? (
              <>
                <Button
                  onClick={logOut}
                  variant="contained"
                  color="secondary"
                  sx={{ mx: 3 }}
                >
                  Logout
                </Button>

                {currentUser?.photoURL ? (
                  <Avatar src={currentUser?.photoURL} />
                ) : (
                  <>
                    <Avatar sx={{ mx: 2 }} />
                  </>
                )}
              </>
            ) : (
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "#ff80ab",
                color: "#fff",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "#6a1b9a",
                color: "#fff",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct />
            </AdminRoute>

            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManagesAllOrders />
            </AdminRoute>
            <AdminRoute path={`${path}/manageProduct`}>
              <ManageProduct />
            </AdminRoute>
            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
            <Route path={`${path}/userReview`}>
              <UserReview />
            </Route>
            <Route path={`${path}/userOrder`}>
              <UserOrder />
            </Route>
            <Route path={path}>
              <DashboardHome></DashboardHome>
            </Route>
          </Switch>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;