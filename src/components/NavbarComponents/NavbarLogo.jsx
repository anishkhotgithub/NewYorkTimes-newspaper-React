import { Box, Container, Divider } from '@mui/material'
import React from 'react'
import logo from '../../images/newyork.png'
import Nav2 from './NavbarsCompo/Nav2'
const NavbarLogo = () => {
  return (
    <>
    <Container maxWidth="xlg">
    <Box 	sx={{ display: { xs: 'none', sm: 'block' } }} >

            <center>
                <img src={logo} width={470} height={69}/>
            </center>
            <Divider style={{marginBottom:10}}/>
            <Nav2/>
            {/* <Divider style={{marginTop:10,border:'1px solid black'}}/>
            <Divider  style={{marginTop:4,border:'1px solid black'}}/> */}
            <Divider style={{marginTop:10 , border:'2px solid black'}}/>
    </Box>
    </Container>
    </>
  )
}

export default NavbarLogo
