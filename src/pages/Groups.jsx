import React from 'react'
import { Grid, IconButton, Menu as MenuIcon, Tooltip} from "@mui/material"
import {KeyboardBackspace as KeyboardBackspaceIcon} from "@mui/icons-material"
import {useNavigate} from "react-router-dom"
export default function Groups() {
  const navigate=useNavigate();
  const navigateBack=()=>{
     navigate("/")
  }
  const IconBtns=(
  <>
   
   <IconButton>
    <MenuIcon/>
   </IconButton>
   
    <Tooltip title="back">
       <IconButton
       sx={{
        position:"absolute",
        top:"2rem",
        left:"2rem",
        bgcolor:"#1c1c1c",
        color:"white",
        "&:hover":{
          bgcolor:"rgba(0,0,0,0.5)"
        }
       }}
       onClick={navigateBack}
       >
        <KeyboardBackspaceIcon/>
       </IconButton>
    </Tooltip>
    </>
    );
  return (
    <Grid container height={"100vh"}>
      <Grid 
      item
      sm={4}
      sx={{
        display:{
          xs:"none",
          sm:"block",
        }
      }}
      bgcolor={"bisque"}
      >
     Grid List
      </Grid>
      <Grid item xs={12} sm={8} sx={
        {
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          position:"relative",
          padding:"1rem 3rem"
        }
      }>
     {IconBtns}
      </Grid>
    </Grid>
  )
}
