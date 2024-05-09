import { Add } from '@mui/icons-material'
import { Avatar, IconButton, Stack, Typography } from '@mui/material'
import {ListItem} from '@mui/material'
import React from 'react'
import { memo } from 'react'
const UserItem = ({user,handler,handlerIsLoading}) => {
 
   const {name,_id,avatar}=user

    return (
    <div>
         <ListItem>
         <Stack
         direction={"row"}
         alignItems={"center"}
         spacing={"1rem"}
         width={"100%"}
         >
            <Avatar />
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
            >{name}</Typography>
            <IconButton 
            size='small'
            sx={{
                bgcolor:"primary.main",
                color:"white",
                "&:hover":{
                    bgcolor:"primary.dark"
                }
            }}
            onClick={()=>handler(_id)} disabled={handlerIsLoading}>
                <Add/>
            </IconButton>
         </Stack>
          </ListItem>
    </div>
  )
}

export default memo(UserItem)