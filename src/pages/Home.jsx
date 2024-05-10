import React from 'react'
import Applayout from '../components/layout/Applayout'
import { Box, Typography } from '@mui/material'
import { graycolor } from '../Constants/Color.js'
const  Home=()=> {
  console.log("thisi is home")
  return (  
      <Box bgcolor={graycolor} height={"100%"}>
      <Typography p={"2rem"} variant='h5' textAlign={"center"}>Select a friend to chat</Typography>
      </Box>
  )
}

export default Applayout()(Home);