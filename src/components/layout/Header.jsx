import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { orange } from '../../Constants/Color.js'
import {Add as AddIcon, Group as GroupIcon, Logout, Menu as MenuIcon,Notifications,Search as SearchIcon } from "@mui/icons-material"
import React,{Suspense, lazy, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Search=lazy(()=>import('../specific/Search.jsx'))
const Notifica=lazy(()=>import('../specific/Notifications.jsx'))
const NewGroup=lazy(()=>import('../specific/NewGroup.jsx'))
const Header = () => {
    const navigate=useNavigate();
    const [isMobile, setisMobile] = useState(false);
    const [isSearch, setisSearch] = useState(false);
    const [isNewGr, setisNewGr] = useState(false);
    const [isNotification, setisNotification] = useState(false)
    const handlMobile=()=>{
        console.log("mobile")
        setisMobile((prev)=>!prev);
    }
    const OpenSearchdialog=()=>{
        console.log("open Search");
        setisSearch((prev)=>!prev);
    }
    const opennewGroup=()=>{
        console.log("open Group");
        setisNewGr((prev)=>!prev);
    }
    const openNotifiacation=()=>{
        setisNotification((prev)=>!prev)
    }
    const NavigateToGroup=()=>{
        navigate("/groups")
    }
    const logOutHandler=()=>{
        console.log("get log out")
    }
  return (
   <>
   <Box sx={{flexGrow:1}} height={"4rem"}>
    <AppBar position='static' sx={{
        bgcolor:orange
    }}> 
    <Toolbar>
    <Typography variant='h6'
    sx={{
        display:{xs:"none",sm:"block"}
    }}>ChatApp</Typography>
    <Box sx={{
        display:{xs:"block",sm:"none"}
    }}>
      <IconButton color='inherit' onClick={handlMobile}>
        <MenuIcon/>
      </IconButton>
    </Box>
      <Box sx={{
        flexGrow:1
      }}/>
    <Box>
        <IconBtn title={"search"} icon={<SearchIcon/>} onClick={OpenSearchdialog}/>
        <IconBtn title={"new Group"} icon={<AddIcon/>} onClick={opennewGroup}/>
        <IconBtn title={"Groups"} icon={<GroupIcon/>} onClick={NavigateToGroup}/>
         <IconBtn title={"LogOut"} icon={<Logout/>} onClick={logOutHandler}/>
         <IconBtn title={"Notifications"} icon={<Notifications/>} onClick={openNotifiacation}/>
      
     </Box>
    </Toolbar>
        </AppBar>
   </Box>
   {
    isSearch && (
       <Suspense fallback={<Backdrop open={open}/>}>
         <Search/>
       </Suspense>
    )
   }
   {
    isNotification && (
       <Suspense fallback={<Backdrop open={open} />}>
         <Notifica/>
       </Suspense>
    )
   }
   {
    isNewGr && (
       <Suspense fallback={<Backdrop open={open}/>}>
         <NewGroup/>
       </Suspense>
    )
   }
   </>
  )
}
const IconBtn=({title,icon,onClick})=>{
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size='large' onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}
export default Header