import { createTheme, Link, ThemeProvider, Typography} from '@mui/material'
import { purple } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
const Nav2 = () => 
{
  const preventDefault = (event) => event.preventDefault()
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });
  return (
    <>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 4,
        },
        color:"green"
      }}
      onClick={preventDefault}
    >
    <ThemeProvider theme={theme} >
    <Link href="#" underline="none">
        {"World"}
      </Link>
      <Link  href="#" underline="none">
        {"U.S"}
      </Link>
      <Link href="#" underline="none">
        {"Politics"}
      </Link>
      <Link  href="#" underline="none">
        {"N.Y."}
      </Link>
      <Link  href="#" underline="none">
        {"Business"}
      </Link>
      <Link  href="#" underline="none">
        {"Opinion"}
      </Link>
      <Link href="#" underline="none">
        {"Tech"}
      </Link>
      <Link  href="#" underline="none">
        {"Science"}
      </Link>
      <Link  href="#" underline="none">
        {"Health"}
      </Link>
      <Link  href="#" underline="none">
        {"Sports"}
      </Link>
      <Link  href="#" underline="none">
        {"Arts"}
      </Link>
      <Link  href="#" underline="none">
        {"Books"}
      </Link>
      <Link href="#" underline="none">
        {"Style"}
      </Link>
      <Link  href="#" underline="none">
        {"Food"}
      </Link>
      <Link href="#" underline="none">
        {"Travel"}
      </Link>
      <Link  href="#" underline="none">
        {"Magazine"}
      </Link>
      <Link  href="#" underline="none">
        {"T Magazine"}
      </Link>
      <Link href="#" underline="none">
        {"Video"}
      </Link>
    </ThemeProvider>
    </Box>
  </>
  )
}

export default Nav2
