import React, { useContext, useEffect, useState } from "react";
//import {menu} from "./Menu";
import {
  AppBar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import "../../Styles/Header.css";
import { menuContext } from "./Menu";
import { useSelector } from "react-redux";
import { string } from "yup";


const Header = () => {
  const Navigate=useNavigate()
  const [user, setUser] = useState("");
  useEffect(() => {
    //window.addEventListener('storage', () => {
     const item = localStorage.getItem('login');
      //if(item) {
          setUser(item)
     // }
    //})
   })
  
  const myState = useSelector((state)=> state.quantityHandler);
  const [mobileopen, setMoblieopen] = useState(false);
  // var value = [];
  // const context = useContext(menuContext);
  // if (context) {
  //   {
  //     value = context;
  //   }
  // }

  //const {value } = useContext(menuContext);

  const logoutHandler = () => {
    localStorage.removeItem('login');
    Navigate('/signin')
   
  };
  
  const handleDrawerToggle = () => {
    setMoblieopen(!mobileopen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <FastfoodIcon />
        My Resturent
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );
  // return (
  //   <>
  //     <Box>
  //       <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
  //         <Toolbar>
  //           <IconButton
  //             color="inherit"
  //             aria-label="open drawer"
  //             edge="start"
  //             sx={{ mr: 2, display: { sm: "none" } }}
  //             onClick={handleDrawerToggle}
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Typography
  //             color={"goldenrod"}
  //             variant="h6"
  //             component="div"
  //             sx={{ flexGrow: 1 }}
  //           >
  //             <FastfoodIcon />
  //             My Resturent
  //           </Typography>
  //           <Box sx={{ display: { xs: "none", sm: "block" } }}>
  //             <ul className="navigation-menu">
  //               <li>
  //                 <NavLink to={"/"}>Home</NavLink>
  //               </li>
  //               <li>
  //                 <NavLink to={"/menu"}>Menu</NavLink>
  //               </li>
  //               <li>
  //                 <NavLink to={"/about"}>About</NavLink>
  //               </li>
  //               <li>
  //                 <NavLink to={"/contact"}>Contact</NavLink>
  //               </li>
  //               <li>
  //                 <NavLink to={"/Foodcart"}>
  //                   {" "}
  //                   <Badge
  //                     badgeContent={
  //                       value.value ? value.value.reduce((a, b) => a + b) : 0
  //                     }
  //                     color="secondary"
  //                   >
  //                     <ShoppingCartIcon />
  //                   </Badge>
  //                 </NavLink>
  //               </li>
  //             </ul>
  //           </Box>
  //         </Toolbar>
  //       </AppBar>
  //       <Box component="nav">
  //         <Drawer
  //           variant="temporary"
  //           open={mobileopen}
  //           onClose={handleDrawerToggle}
  //           sx={{
  //             display: { xs: "block", sm: "none" },
  //             "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
  //           }}
  //         >
  //           {drawer}
  //         </Drawer>
  //       </Box>
  //       <Box>
  //         <Toolbar />
  //       </Box>
  //     </Box>
  //   </>
  // );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Resturent
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
              <li>{user ? user : <NavLink to={"/Signin"}>Login</NavLink>}
            </li>
                <li>
                <NavLink to={"/home"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"/Foodcart"}>
                    {" "}
                    <Badge
                      badgeContent={
                        myState ? myState.reduce ((a, b) => a + b) : 0
                      }
                      color="secondary"
                     
                    >
                    <ShoppingCartIcon />
                    </Badge>
                  
                  </NavLink>
                </li>
                <li>{user ? <NavLink>
                      <LogoutIcon onClick={logoutHandler}/>
                      </NavLink> : null}
                </li>
                      
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
