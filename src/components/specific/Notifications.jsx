import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from "@mui/material"
import React, { memo } from 'react'
import { SampleNotifications } from '../../Constants/sampleData'
const Notifica = () => {
  const friendRequestHandler=(_id,accept)=>{

  }
  return (
    <div>
      <Dialog open>
        <Stack p={{xs:"1rem",sm:"2rem"}} maxWidth={"25rem"}>
          <DialogTitle>Notifications</DialogTitle>
          {
            SampleNotifications.length>0 ? (
            SampleNotifications.map((i)=>(
              <NotificaItem sender={i.sender} _id={i._id} handler={friendRequestHandler}
              key={i._id}/>
            ))
            ):
            <Typography textAlign={"center"}>0 Notifications</Typography>
          }
        </Stack>
      </Dialog>
    </div>
  )
}
const NotificaItem=memo (({sender,_id,handler})=>{
  const {name,avatar}=sender;
  return <>
   <ListItem>
         <Stack
         direction={"row"}
         alignItems={"center"}
         spacing={"1rem"}
         width={"100%"}
         >
            <Avatar/>
            <Typography
            variant='body1'
            sx={{
                flexGlow:1,
                width:"100%",
                 display:"-webkit-box",
                 WebkitLineClamp:"1",
                 WebkitBoxOrient:"vertical",
                 overflow:"hidden",
                 textOverflow:"ellipsis"
            }}
            >{`${name} send you a friend request`}</Typography>
            <Stack direction={{
              xs:"column",
              sm:"row"
            }}>
              <Button onClick={()=>handler({_id,accept:true})}>Accept</Button>
              <Button color='error' onClick={()=>handler({_id,accept:false})}>Reject</Button>
            </Stack>
         </Stack>
          </ListItem>
  </>
})
export default Notifica