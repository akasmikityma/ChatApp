import React from 'react'
import {Stack} from "@mui/material"
import ChatItem from '../Shared/ChatItem'
const ChatList = ({w="100%",chats=[],chatID,onlineUsers=[],newMessagesAlert=[
    {
        chatID:"",
        count:0
    }
    ],
    handleDeleteChat
}) => {
  return (
    <div>
        <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
           { chats?.map((data,index)=>{
                const {avatar,_id,name,groupchat,members}=data;
                const newMessageAlert=newMessagesAlert.find(
                    (alert)=>alert.chatID===_id
                )
                const isOnline=members?.some((member)=>onlineUsers.includes(_id))
                return <ChatItem 
                index={index}
                newMessageAlert={newMessageAlert} isOnline={isOnline}
                avatar={avatar}
                name={name}
                _id={_id}
                key={_id}
                groupchat={groupchat}
                sameSender={chatID===_id}
                handleDeleteChat={handleDeleteChat}
                />
            })}
        </Stack>
    </div>
  )
}

export default ChatList