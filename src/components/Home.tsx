import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './Navigation/Nav';
import Theme from '../helpers/theme'
const  BoxSx = (props:any)=> {
  return (
    <Box
      sx={{
        width: 600,
        height: 600,
        backgroundImage:`${require('../asset/astronaut.png')}`
      }}
    />
  );
}
const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box  sx={{ bgcolor: `${Theme.palette.secondary.light}`, height: '100vh' }} >
        <Navbar/>
        <BoxSx>
          <img src={require('../asset/astronaut.png')} alt='https://images.app.goo.gl/ZsMdG7EY9u1CKnfe7'/>
        </BoxSx>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Home    

