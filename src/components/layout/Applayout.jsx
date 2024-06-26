import React from 'react'
// import { useParams } from 'react-router-dom';
import Header from './Header';
import Title from '../Shared/Title';
import { Grid } from '@mui/material';
import ChatList from "../specific/ChatList"
import { chats } from '../../Constants/sampleData.js';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile.jsx';
const  Applayout=()=>WrappedComponent=> {
   return (props)=>{
    const params=useParams()
    const chatID=params.chatID
    const  handleDeleteChat=(e,_id,groupchat)=>{
        e.preventDefault();
        console.log("delete Chat",_id,groupchat)
    }

    return (
        <>
        <Title/>
    <Header/>
     <Grid container height={"calc(100vh - 4rem)"}>
       <Grid item sm={4} md={3} sx={{
            display:{xs:"none",sm:"block"}
        }}
        height={"100%"}>
            <ChatList chats={chats} chatID={chatID} newMessagesAlert={[{
                chatID, 
            }]}
            handleDeleteChat={handleDeleteChat}
         />
      </Grid>
       <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        <WrappedComponent {...props}/>
        </Grid>
       <Grid item md={4} lg={3} height={"100%"} sx={{
            display:{xs:"none",md:"block"},
            padding:"2rem",
            bgcolor:"rgba(0,0,0,0.5)"
        }}>
            <Profile/>
        </Grid>
     </Grid> 
    </>
  );
}
}
export default Applayout
