import React, {useContext} from "react";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import {useAuthState} from 'react-firebase-hooks/auth';
import { Context } from "../main";

const Navbar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth) 

  return (
    <AppBar color={'secondary'} position="static">
      <Toolbar variant={'dense'}>
        <Grid container justifyContent={'flex-end'}>
          {user ? 
            <Button onClick={()=> auth.signOut()} variant={"outlined"}>Sign Out</Button>
            :
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>Login</Button>
            </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;
