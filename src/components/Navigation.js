import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export default function Navigation() {

  //
    const { user, logOut } = UserAuth();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleSignOut = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  //

  return (
    <div className="Naviagation">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#f05123" }}>
          <Toolbar>
            <Link to="/">
              <img
                src="https://fpt.edu.vn/Content/images/assets/2017-FE-White-Min.webp"
                alt="logo"
                width="150"
                height="40"
              />
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            
            <Button>
                <Link to="/news" style={{ textDecoration: "none", color: 'white' }}>Top News</Link>
            </Button>
            <Button>
                <Link to="/contact" style={{ textDecoration: "none", color: 'white' }}>Contact</Link>
            </Button>
            {/* //Login */}
            {user?.displayName ? (
              <div>
                <Tooltip title="User Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.displayName} src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        Dashboard
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center" onClick={handleSignOut}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </div>
              ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Sign in
                </Button>
              </Link>
            )}
            {/* //Login */}
          </Toolbar>
        </AppBar>
      </Box>
      <div className="bottom-line"></div>
    </div>
  );
}