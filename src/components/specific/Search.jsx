import React ,{useState}from 'react'
import {Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField} from "@mui/material"
import {useInputValidation} from "6pp"
import {Search as Searchicon} from "@mui/icons-material"
import { Sampleusers } from '../../Constants/sampleData.js'
import UserItem from '../Shared/UserItem.jsx'
const Search = () => {
  const [users, setusers] = useState(Sampleusers)
  const search=useInputValidation("")
  const isLoadingsendFriendRequest=false;
  const addFriendHandler=(id)=>{
    console.log(id)
  }
  return (
    <div>
      <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find preople</DialogTitle>
        <TextField label="" 
        variant='outlined'
        size='small'
        InputProps={{
          startAdornment:(
            <InputAdornment position='start'>
              <Searchicon/>
            </InputAdornment>
          )
        }}
        value={search.value} onChange={search.changeHandler}/>
        <List>
        {Sampleusers.map((user)=>{
         return  <UserItem key={user._id}
          user={user} handler={addFriendHandler} handlerIsLoading={isLoadingsendFriendRequest}/>
        })}
        </List>
        </Stack>
      </Dialog>
     
    </div>
  )
}

export default Search