import { Avatar,Stack, Typography } from '@mui/material'
import React from 'react'
import moment from "moment"
import { Face,AlternateEmail,CalendarMonth } from '@mui/icons-material'
const Profile = () => {
  return (
    <div>
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
            <Avatar sx={{
                width:200,
                height:200,
                objectFit:"1rem",
                border:"5px solid white"
            }}/>
        <Profilecard heading={"bio"} text={"tumi dev .. tumi superstar"}/>
        <Profilecard heading={"username"} text={"eta username"} icon={<AlternateEmail/>}/>
        <Profilecard heading={"name"} text={"amar naam holo bishal ..ami soft dev"} icon={<Face/>}/>
        <Profilecard heading={"Joined"} text={moment('2023-11-04T18:30:00.000Z').fromNow()} icon={<CalendarMonth/>}/>

        </Stack>
    </div>
  )
}
const Profilecard=({text,icon,heading})=> (
    <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
    >
        {icon && icon}
        <Stack>
            <Typography variant='body1'>{text}</Typography>
            <Typography color={"gray"} variant='caption'>{heading}</Typography>
        </Stack>
    </Stack>
)
export default Profile