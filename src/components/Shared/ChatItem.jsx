import React, { memo } from 'react'
import { Link } from '../Styles/StyledComponents'
import { Stack, Typography } from '@mui/material'
import {Box} from '@mui/material'
import AvatarCard from './AvatarCard'
const ChatItem = ({
    avatar,
    name,_id,groupchat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChat
}) => {
  return (
    <div>
        <Link
        sx={{
          padding:"0"
        }} 
        to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e,_id,groupchat)}>
            <div style={{
                display:"flex",
                gap:"1rem",
                alignItems:"center",
                padding:"1rem",
                backgroundColor: sameSender? "black" : "unset",
                color: sameSender? "white" : "unset",
                position:"relative"
            }}>
              <AvatarCard avatar={avatar}/>
          <Stack>
            <Typography>
                {name}
            </Typography>
            {
                newMessageAlert && (
                    <Typography>{newMessageAlert.count}</Typography>
                )
            }
          </Stack>
          {
            isOnline && (<Box 
            sx={
                {
                    width:"10px",
                    Height:"10px",
                    borderRadius:"50%",
                    backgroundColor:"green",
                    position:"absolute",
                    top:"50%",
                    right:"1rem",
                    transform:"translateY(-50%)"
                }
            }
            />
          )}
            </div>
        </Link>
    </div>
  )
}

export default memo(ChatItem)