import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CardsScroller = () => {

  return (
    <Box sx={{flexGrow:1,marginTop:3,marginBottom:3,flexDirection: 'column'}}>
        <Container>
        <Grid container spacing={1}>
            <Grid item sx={2} xl={3}>
            <Card sx={{ maxWidth: 300, marginLeft:5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: '300',height:200 }}
          image="https://static01.nyt.com/images/2022/07/05/podcasts/05daily-1/05DAILY-gun-law-audio-app-square320-v3.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          alt="green iguana"
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom variant="h6" component="div">
          Listen to ‘The Daily’
          </Typography>
          <Typography variant="body2" color="text.secondary">
          After yet another mass shooting, will the bipartisan gun legislation actually work?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
            <Grid item sx={2} xl={3}>
            <Card sx={{ maxWidth: 300 ,marginLeft:5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: '300',height:200 }}
          image="https://static01.nyt.com/images/2022/06/29/world/00congo-explainer-1/merlin_207517677_529f951b-680d-43c0-9159-955109481d55-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
             Turmoil in Eastern Congo?
          </Typography>
          <Typography variant="body2" color="text.secondary">
          More than 120 militia groups are wreaking terror in the Democratic Republic.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
            <Grid item sx={2} xl={3}>
            <Card sx={{ maxWidth: 300 ,marginLeft:5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: '300',height:200 }}
          image="https://static01.nyt.com/images/2022/06/29/world/00congo-explainer-1/merlin_207517677_529f951b-680d-43c0-9159-955109481d55-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
             Turmoil in Eastern Congo?
          </Typography>
          <Typography variant="body2" color="text.secondary">
          More than 120 militia groups are wreaking terror in the Democratic Republic.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
            <Grid item sx={2} lg={3}>
            <Card sx={{ maxWidth: 300 ,marginLeft:5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: '300',height:200 }}
          image="https://static01.nyt.com/images/2022/06/29/world/00congo-explainer-1/merlin_207517677_529f951b-680d-43c0-9159-955109481d55-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
             Turmoil in Eastern Congo?
          </Typography>
          <Typography variant="body2" color="text.secondary">
          More than 120 militia groups are wreaking terror in the Democratic Republic.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
        </Grid>
        </Container>
    </Box>
  )
}

export default CardsScroller
