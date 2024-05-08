import React,{useState} from 'react'
import { Avatar, Button, Container,IconButton,Paper, Stack, TextField, Typography } from '@mui/material'
import {CameraAlt} from "@mui/icons-material";
import { VisuallyHiddenInput } from '../components/Styles/StyledComponents';
import {useFileHandler, useInputValidation,useStrongPassword} from "6pp";
import usernameValidator from '../utils/validation.js';
export default function Login() {
    const [isLogin, setisLogin] = useState(true)
    const toggleLogin=()=>setisLogin((value)=>!value)
    const name=useInputValidation("")
    const bio=useInputValidation("")
    const password=useStrongPassword()
    const username=useInputValidation("",usernameValidator)
    const avatar =useFileHandler("single")
    const handleLogin=(e)=>{
      e.preventDefault()
    }
    const handleSignUP=(e)=>{
        e.preventDefault()
    }
  return (
    <Container component={"main"} maxWidth="xs"
        sx={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Paper 
            elevation={3}
            sx={{
                padding:4,
                display:'flex',
                flexDirection:"column",
                alignItems:"center"
            }}
            >
            {
                isLogin?(
                <>
                <Typography variant="h5">Login</Typography>
                <form style={
                {
                    width:"100%",
                    marginTop:"1rem"
                }
                } onSubmit={handleLogin}>
                    <TextField 
                    required 
                    fullWidth 
                    label="username"
                    margin='normal'
                    variant='outlined'
                    value={username.value}
                    onChange={username.changeHandler}
                    />
                    <TextField 
                    required 
                    fullWidth 
                    label="password"
                    type='password'
                    margin='normal'
                    variant='outlined'
                    value={password.value}
                    onChange={password.changeHandler}
                    />
                    <Button sx={{
                        marginTop:"1rem"
                    }}
                    variant='contained'
                    color='primary'
                    fullWidth
                    type='submit'>Login</Button>
                    <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                    <Button sx={{
                        marginTop:"1rem"
                    }}
                    variant='text'
                    fullWidth
                    type='submit' onClick={toggleLogin}>Sign Up</Button>
                </form>
                </>
                ):(
                    <>
                    <Typography variant="h5">Sign UP</Typography>
                    <form style={
                    {
                    width:"100%",
                    marginTop:"1rem"
                    }
                    }  onSubmit={handleSignUP}>
                         <Stack position={"relative"} width={"10rem"}
                    margin={"auto"}>
                        <Avatar 
                        sx={{
                            width:"10rem",
                            height:"10rem",
                            objectFit:"contain",
                        }}
                        src={avatar.preview}/>
                        {avatar.error&&(
                            <Typography color="error" variant='caption'>
                                {avatar.error}
                            </Typography>
                        )}
                        <IconButton
                        sx={{
                            position:"absolute",
                            bottom:"0",
                            right:"0",
                            color:"white",
                            bgcolor:"rgb(0,0,0,0.5)",
                            ":hover":{
                                bgcolor:"rgb(0,0,0,0.7)"
                            }
                        }}
                        component="label">
                            <>
                            <CameraAlt/>
                            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                            </>
                        </IconButton>
                    </Stack>
                        <TextField 
                    required 
                    fullWidth 
                    label="name"
                    margin='normal'
                    variant='outlined'
                    value={name.value}
                    onChange={name.changeHandler}
                    />
                        <TextField 
                    required 
                    fullWidth 
                    label="bio"
                    margin='normal'
                    variant='outlined'
                    value={bio.value}
                    onChange={bio.changeHandler}
                    />
                    <TextField 
                    required 
                    fullWidth 
                    label="username"
                    margin='normal'
                    variant='outlined'
                    value={username.value}
                    onChange={username.changeHandler}
                    />
                    {   
                       
                        username.error&&(
                            <Typography color="error" variant='caption'>
                                {username.error||"username is invalid"}
                            </Typography>
                        )
                    }
                    <TextField 
                    required 
                    fullWidth 
                    label="password"
                    type='password'
                    margin='normal'
                    variant='outlined'
                    value={password.value}
                    onChange={password.changeHandler}
                    />
                    {   
                       
                       password.error&&(
                           <Typography color="error" variant='caption'>
                               {password.error||"username is invalid"}
                           </Typography>
                       )
                   }
                    <Button sx={{
                        marginTop:"1rem"
                    }}
                    variant='contained'
                    color='primary'
                    fullWidth
                    type='submit'>Sign Up</Button>
                    <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                    <Button sx={{
                        marginTop:"1rem"
                    }}
                    variant='text'
                    fullWidth
                    type='submit' onClick={toggleLogin}>Login</Button>
                    </form>
                    </>
                )
            }
        </Paper>
    </Container>
  )
}
