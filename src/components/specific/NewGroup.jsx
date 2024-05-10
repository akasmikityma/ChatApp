import { useInputValidation } from "6pp";
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from 'react';
import { Sampleusers } from "../../Constants/sampleData.js";
import UserItem from '../Shared/UserItem.jsx';
const NewGroup = () => {
  const [members, setmembers] = useState(Sampleusers)
  const [selectedMembers, setselectedMembers] = useState([])
  const groupname=useInputValidation("")
  const selectMemberHandler=(id)=>{
   
    setmembers((prev)=>prev.map((user)=>user._id===id?{...user,isAdded:!user.isAdded}:user))

     setselectedMembers((prev)=>
      prev.includes(id)?
      prev.filter((currElement)=>currElement!=id):[...prev,id]
     )
  }
  const submitHandler=()=>{

  }
  const closeHandler=()=>{

  }
  return (
    <div>
       <Dialog open onClose={closeHandler}>
        <Stack p={{xs:"1rem",sm:"3rem"}} width={"25rem"} spacing={"2rem"}>
          <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>
          <TextField label="group name" value={groupname.value} onChange={groupname.changeHandler}/>
          <Typography variant='body1'>Members</Typography>
          <Stack>
        {members.map((user)=>{
         return  <UserItem key={user._id}
          user={user} handler={selectMemberHandler} isAdded={selectedMembers.includes(user._id)}/>
        })}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant='outlined' color='error' size='large'>Cancel</Button>
          <Button variant='contained' size='large' onClick={submitHandler}>create</Button>

        </Stack>
        </Stack>
      </Dialog>
    </div>
  )
}

export default NewGroup