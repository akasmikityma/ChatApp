import { Box, Typography } from '@mui/material';

import React,{memo} from 'react'
import { lightblue } from '../../Constants/Color';
import moment from 'moment';

const MessageComp = ({message,user}) => {
    const {sender,content,attachments=[],cretatdAT}=message;
    const sameSender=sender?._id===user?._id

    const timeAgo=moment(cretatdAT).fromNow()
  return (
    <div style={{
        alignSelf:sameSender?"flex-end":"flex-start",
        backgroundColor:"white",
        color:"black",
        borderRadius:"5px",
        padding:"0.5rem",
        width:"fit-content"
    }}>
        {
            !sameSender && <Typography color={lightblue} 
            variant="caption"fontWeight={"600"}>{sender.name}</Typography>
        }
        {
            content&& <Typography>{content}</Typography>
        }
        {
            attachments.length>0 &&  (
                attachments.map((atta,index)=>{
              const url=atta.url;
              const file="ads";
              return <Box>
                 <a href=''
                 target='_blank'
                 download
                 style={{
                    color:"black"
                 }}>

                 </a>
              </Box>
                })
            )
        }
        <Typography variant='caption' color={"text.secondary"}>{timeAgo}</Typography>
    </div>
  )
}

export default memo(MessageComp)