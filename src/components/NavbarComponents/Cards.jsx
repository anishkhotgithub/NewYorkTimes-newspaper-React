import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
const Cards = () => {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
          When Will Federer and the Williams Sisters Call It Quits? Maybe Never.?
          </Typography>
          {/* <Typography variant="subtitle1" color="text.secondary" component="div">
          The changing nature of sports business and celebrity is conspiring to keep stars like Roger Federer and Venus and Serena Williams at it for far longer.
          </Typography> */}
          <CardMedia
        component="img"
        sx={{ width: '300',height:150 }}
        image="https://static01.nyt.com/images/2022/07/04/multimedia/04Jpalttennis-retirement1-print/04Jpalttennis-retirement1-print-threeByTwoMediumAt2X-v2.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
        alt="Live from space album cover"
      />
        </CardContent>
      </Box>
    </Card>
      )
}

export default Cards
