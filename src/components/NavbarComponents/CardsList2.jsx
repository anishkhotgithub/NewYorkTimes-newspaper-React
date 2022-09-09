import { Box, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'

const CardsList2 = () => {
  return (
    <Card sx={{ display: 'flex',border:"1px solid black"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h1" fontSize={15} fontStyle={'oblique'}>
          When Will Federer and the Williams Sisters Call It Quits? Maybe Never.
          </Typography>
          {/* <Typography variant="subtitle1" color="text.secondary" component="div">
          The changing nature of sports business and celebrity is conspiring to keep stars like Roger Federer and Venus and Serena Williams at it for far longer.
          </Typography> */}
          <CardMedia
        component="img"
        sx={{ width: '300',height:90 }}
        image="https://static01.nyt.com/images/2022/07/04/multimedia/04Jpalttennis-retirement1-print/04Jpalttennis-retirement1-print-threeByTwoMediumAt2X-v2.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
        alt="Live from space album cover"
      />
        </CardContent>
       
      </Box>
      <Divider orientation="vertical" flexItem variant="middle">
        
      </Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h1" fontSize={15} fontStyle={'oblique'} >
          When Will Federer and the Williams Sisters Call It Quits? Maybe Never.
          </Typography>
          {/* <Typography variant="subtitle1" color="text.secondary" component="div">
          The changing nature of sports business and celebrity is conspiring to keep stars like Roger Federer and Venus and Serena Williams at it for far longer.
          </Typography> */}
          <CardMedia
        component="img"
        sx={{ width: '300',height:90 }}
        image="https://static01.nyt.com/images/2022/06/30/realestate/30-travel-whats-new-athens-capital-hotel/merlin_209179464_cf92aa7e-aa15-4175-bfca-4decfb8b7f8c-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
        alt="Live from space album cover"
      />
        </CardContent>
       
      </Box>
      
    </Card>

  )
}

export default CardsList2
