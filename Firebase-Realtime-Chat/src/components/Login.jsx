import { Button, Container, Grid } from "@mui/material"
import { Box } from "@mui/system";
import React, { useContext } from "react"
import { Context } from "../main";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {auth} = useContext(Context)

  const login = async () => {
    const provider = new GoogleAuthProvider()
    const {user} = await signInWithPopup(auth, provider);
    console.log(user)
  }

  return (
    <Container>
      <Grid container style={{height: window.innerHeight - 50}} alignItems={'center'} justifyContent={'center'}>
        <Grid style={{width: 400, background: 'lightgray'}} container alignItems={'center'} direction={'column'}>
          <Box p={5}>
            <Button onClick={login} variant={'outlined'}>Sign In with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Login;
