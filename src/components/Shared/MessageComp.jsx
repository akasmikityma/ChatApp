import { Box, Typography } from '@mui/material';
import {fileFormat} from "../../lib/features.js";
import React,{memo} from 'react'
import RenderAttachMent from "./RenderAttachMent.jsx"
import { lightblue } from '../../Constants/Color';
import moment from 'moment';

const MessageComp = ({message,user}) => {
    const {sender,content,attachments=[],cretatdAT}=message;
    const sameSender=sender?._id===user?._id
    console.log(attachments)
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
              const file=fileFormat(url);
              return <Box key={index}>
                 <a 
                 href={url}
                 target='_blank'
                 download
                 style={{
                    color:"black"
                 }}>
            {RenderAttachMent(file,url)}
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