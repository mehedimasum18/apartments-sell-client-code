import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import useAuth from "../../Hooks/useAuth";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { logOut, currentUser } = useAuth();
  const theme = useTheme();
  const useStyles = makeStyles({
    navMenu: {
      color: "#fff !important",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    NavItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important ",
      },
    },
  });
  const { navMenu, navIcon, navLogo, NavItemContainer } = useStyles();
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 200 }} role="presentation">
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/explore">
          <ListItemText primary="Explore" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }} elevation={5}>
        <AppBar position="static" className={navMenu}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              color="inherit"
              className={navLogo}
              sx={{
                flexGrow: 1,
                textAlign: "left",
                textDecoration: "none",
                display: "inline",
              }}
            >
              SWEET HOME 
            </Typography>
            <Box className={NavItemContainer}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/explore">
                Explore
              </Button>
              <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
              </Button>
            </Box>
            {currentUser?.email ? (
              <>
                <Button
                  onClick={logOut}
                  variant="contained"
                  color="secondary"
                  sx={{ mx: 3 }}
                >
                  LogOut 
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
              <>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;

