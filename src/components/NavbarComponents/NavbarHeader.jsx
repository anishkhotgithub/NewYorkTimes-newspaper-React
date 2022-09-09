import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TemporaryDrawer from './SidebarNav';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';
import NavbarLogo from './NavbarLogo';
import logo from '../../images/newyork.png'
import { Breadcrumbs, ButtonGroup } from '@mui/material';
const NavbarHeader = () => {
  return (
    <>
    <Box  >
    <Container maxWidth="lg  " >
      <AppBar position="static" style={{backgroundColor:"#ffffff"}} elevation={0}>
        <Toolbar sx={{marginRight:6}}>
          
          <TemporaryDrawer />
          <IconButton
            size="12"
            edge="start"
            style={{color:"black"}}
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          <SearchIcon fontSize="small" sx={{ display: { xs: 'none', sm: 'block',md:'none',lg:'block' }}} />
          </IconButton>
          
          <Typography
            variant="h5"
            
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'center' ,display: { xl: 'block', sm: 'block',md:'block',lg:'block' }}}
          >
            
          </Typography>
          
          {/* <div sx={{display: { xl: 'block', small: 'none',md:'block',lg:'block' }}}>
          <Button >U.S</Button>
              <Button >International</Button>
              <Button >Canada</Button>
              <Button>ESPAÑOL</Button>
              <Button >中文</Button>
          </div> */}
              

      
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' ,display: { xl: 'none', sm: 'block',md:'none',lg:'none' }}}
          >
            
            <center >
                <img src={logo} width={470} height={69}/>
            </center>
          </Typography>
          <Button dir='rtl'	sx={{ display: { xs: 'none', sm: 'block' },}} style={{color:"#ffffff",backgroundColor:"#326891",borderRadius:5,fontSize:11,marginRight:6}}>SUBSCRIBE FOR 150/YEAR</Button>
          <Button 	sx={{ display: { xs: 'none', sm: 'block' } }} style={{color:"#ffffff",backgroundColor:"#326891",borderRadius:5,fontSize:11}}>Login</Button>
        </Toolbar>
      </AppBar>
      </Container>
    </Box>
    <NavbarLogo/>
    </>
  )
}

export default NavbarHeader
