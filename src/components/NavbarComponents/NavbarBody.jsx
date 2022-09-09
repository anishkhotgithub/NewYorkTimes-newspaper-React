import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Chip, Container, createTheme, Divider } from '@mui/material';
import Cards from './Cards';
import CardsList2 from './CardsList2';
import CardsScroller from './NavbarsCompo/CardsScroller';



const NavbarBody = () => {

      const Responsive=styled(Box)(({theme})=>({
        [theme.breakpoints.up("md")]:{
          color:"black",
          marginTop:5,
          position:"absolute",
        }
      }))
      
  return (
  <>
  <Box >
    <Responsive>
    <Container maxWidth="xl">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 ,lg:1}}>
      <Grid item xl={3} sm={7} >
          <p><h2><b>The Long Path to Reclaim Abortion Rights</b></h2>
            Attempting to recover from their staggering loss, abortion rights groups have mounted attacks against abortion bans in state courts and at ballot boxes nationwide.
            They say their strategy is promising, but the path ahead is slow and not at all certain, with battles likely to go on for years.</p>
            <Divider/>
            <p><h2><b>Texas Supreme Court Lifts Freeze on Abortion Ban</b></h2>The decision, overturning a lower court ruling that had temporarily blocked the ban, allowed a 1925 law to take effect.
            </p>
          
        </Grid>
        <Grid item xl={6} sm={8} >
          <img className='image' style={{height: "auto", width: "auto" ,marginRight:20}}  id="image" src='https://static01.nyt.com/images/2022/07/02/multimedia/02abortion-strategy-HP-2/02abortion-strategy-HP-2-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale'/>
        </Grid>
        <Grid item xl={3} sm={3} >
        <Cards/>
        <br/>
        <Divider/>
        <CardsList2/>
        </Grid>
      </Grid>
      </Container>
      <br/>
      <Divider/>
      <CardsScroller/>
      <Divider/>
      </Responsive>
    </Box>
  </>
  )
}

export default NavbarBody
