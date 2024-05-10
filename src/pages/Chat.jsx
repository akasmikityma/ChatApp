import React, { useRef } from 'react'
import Applayout from '../components/layout/Applayout'
import { Icon, Stack } from '@mui/material'
import { graycolor, orange } from '../Constants/Color.js'
import { AttachFile, Rowing, Send } from '@mui/icons-material'
import { InputBox } from '../components/Styles/StyledComponents.jsx'
import FileMenu from "../components/dialogs/FileMenu.jsx"
import {SampleMessageData} from '../Constants/sampleData.js'
import MessageComp from '../components/Shared/MessageComp.jsx'

const user={
  _id:"vfvsfv",
  name:"Bilahlaf"
}

const  Chat=()=> {
  const containerRef=useRef(null);
  
  return (
    <>
     <Stack ref={containerRef}
     boxSizing={"border-box"}
     padding={"1rem"}
     spacing={"1rem"}
     bgcolor={graycolor}
     height={"90%"}
     sx={{
      overflowX:"hidden",
      overflowY:"auto"
     }}
     >
    {
      SampleMessageData?.map((i)=>{
        return <MessageComp message={i} user={user}/>
      })
    }
   </Stack>
   <form style={{
    height:"10%"
   }}>
   <Stack direction={"row"} height={"100%"}
   padding={"1rem"}
   alignItems={"center"}
   position={"relative"}>
    <Icon sx={{
      position:"absolute",
      left:"1.5rem",
      rotate:"30deg",
    }}
    >
      <AttachFile/>
    </Icon>
    <InputBox placeholder='type Something here'/>
    <Icon type="submit"
    sx={{
      rotate:"-30deg",
      bgcolor:orange,
      color:"white",
      marginLeft:"1rem",
      borderRadius:"50%",
      "&:hover":{
        bgcolor:"error.dark"
      }
    }}
    >
      <Send/>
    </Icon>
   </Stack>
   </form>
   <FileMenu />
    </>
   
  )
}

export default Applayout()(Chat)