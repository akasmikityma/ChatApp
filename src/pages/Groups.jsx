import React,{memo, useEffect, useState} from 'react'
import {Box, Button, Drawer, Stack, Typography} from '@mui/material'
import { Grid, IconButton, Menu, Tooltip} from "@mui/material"
import {Add, Delete, Done, KeyboardBackspace as KeyboardBackspaceIcon} from "@mui/icons-material"
import {useNavigate,useSearchParams} from "react-router-dom"
import {Link} from '../../src/components/Styles/StyledComponents'
import AvatarCard from '../../src/components/Shared/AvatarCard'
import {chats} from '../Constants/sampleData.js'
import { Edit } from '@mui/icons-material'
import {TextField} from '@mui/material'
const  Groups=()=> {
  const chatId=useSearchParams()[0].get("query")
  console.log(chatId)
  const [groupName, setgroupName] = useState("")
  const [groupnameUpdateValue, setgroupnameUpdateValue] = useState("")
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)
  const [isEdit, setisEdit] = useState(false)
  const navigate=useNavigate();
  const navigateBack=()=>{
     navigate("/")
  }
  const confirmDeleteHandler=()=>{

  }
  const AddMemberHandler=()=>{
    
  }
  const updateGroupName=()=>{
    setisEdit(false);
    console.log(groupnameUpdateValue)
  }
  const handleMobile=()=>{
      setisMobileMenuOpen((prev)=>!prev)
  }
  const handleMobileClose=()=>{
    setisMobileMenuOpen(false);
  }
  useEffect(()=>{
    setgroupName(`groupname ${chatId}`)
    setgroupnameUpdateValue(`groupname ${chatId}`)
    return ()=>{
      setgroupName("");
      setgroupnameUpdateValue("")
      setisEdit(false)
    }
  },[chatId])
  const ButtonsGroup=<>
    <Stack
    direction={{
      sm:"row"
    }}
    spacing={"1rem"}
    p={{
      xs:"0",
      sm:"1rem",
      md:"1rem 4rem"
    }}
    >
     <Button size='large' color='error' variant='outlined'startIcon={<Delete/>} onClick={confirmDeleteHandler}>delete Group</Button>
     <Button size='large' startIcon={<Add/>} onClick={AddMemberHandler} variant='contained'>Add Member</Button>
    </Stack>
  </>
  const GroupName=<>
    <Stack direction={"row"}
    alignItems={"center"}
    justifyContent={"center"}
    spacing={"1rem"}
    padding={"3rem"}>
      {isEdit?(
        <>
        <TextField value={groupnameUpdateValue} onChange={(e)=>setgroupnameUpdateValue(e.target.value)}/>
        <IconButton onClick={updateGroupName}><Done/></IconButton>
        </>
      ):(
        <>
        <Typography variant='h4'>{groupName}</Typography>
        <IconButton onClick={()=>setisEdit(true)}><Edit/></IconButton>
        </>
      )}
    </Stack>
  </>

  const IconBtns=(
  <>
  
   <Box 
   sx={{
    display:{
      xs:"block",
      sm:"none",
      position:"fixed",
      right:"1rem",
      top:"1rem"
    }
   }}>
   <IconButton onClick={handleMobile}>
    <Menu/>
   </IconButton>
   </Box>
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
    <GroupList myGroups={chats} chatId={chatId}/>
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
     {GroupName && <>
      {groupName}
      <Typography variant='body1'
      margin={"2rem"}
      alignSelf={"flex-start"}>
         members
      </Typography>
      <Stack maxWidth={"45rem"}
      width={"100%"}
      boxSizing={"border-box"}
      padding={{
        sm:"1rem",
        xs:"0",
        md:"1rem 4rem"
      }}
      spacing={"2rem"}
      bgcolor={"bisque"}
      height={"50vh"}
      overflow={"auto"}
      >

      </Stack>
      {ButtonsGroup}
     </>}
      </Grid>
      <Drawer
      sx={{
        display:{
          xs:"block",
          sm:"none"
        }
      }}
      open={isMobileMenuOpen} onClose={handleMobileClose}>
     <GroupList myGroups={chats} chatId={chatId} w={"50vw"}/>
      </Drawer>
    </Grid>
  )
}
const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} key={group._id} chatId={chatId} />
        ))
      ) : (
        <Typography textAlign={"center"} padding="1rem">No Groups</Typography>
      )}
    </Stack>
  );
};

const GroupListItem=memo(({group,chatId})=>{
   const{name,avatar,_id}=group;
   return <Link to={`?query=${_id}`}
   onClick={(e)=>{
    if(chatId===_id) e.preventDefault();
   }}
   >
   <Stack>
    <AvatarCard avatar={avatar}/>
    <Typography>{name}</Typography>
   </Stack>
   </Link>
})
export default Groups;