import React, { Suspense, lazy, memo, useEffect, useState } from 'react';
import { Backdrop, Box, Button, Drawer, Stack, Typography, TextField } from '@mui/material';
import { Grid, IconButton, Menu, Tooltip } from "@mui/material";
import { Add, Delete, Done, KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from '../../src/components/Styles/StyledComponents';
import AvatarCard from '../../src/components/Shared/AvatarCard';
import { chats,Sampleusers } from '../Constants/sampleData.js';
import { Edit as EditIcon } from '@mui/icons-material';
import UserItem from '../components/Shared/UserItem.jsx';
const ConfirmDeleteDialogue = lazy(() => import("../components/dialogs/ConfirmDeleteDialogue.jsx"));
const AddDialogMember = lazy(() => import("../components/dialogs/AddDialogMember.jsx"));

const Groups = () => {
    const chatId = useSearchParams()[0].get("query");
    const [confirmDeleteDialogue, setConfirmDeleteDialogue] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [groupnameUpdateValue, setGroupnameUpdateValue] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const navigate = useNavigate();
    const isAddMember = true;

    const navigateBack = () => {
        navigate("/");
    };

    const confirmDeleteHandler = () => {
        setConfirmDeleteDialogue(true);
    };

    const closeConfirmDeleteHandler = () => {
        setConfirmDeleteDialogue(false);
    };

    const AddMemberHandler = () => {
        // Add your logic here
    };

    const updateGroupName = () => {
        setIsEdit(false);
        setGroupName(groupnameUpdateValue);
    };

    const handleMobile = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleMobileClose = () => {
        setIsMobileMenuOpen(false);
    };
    
     const removeMemberHandler=(id)=>{
       console.log(first)
     }

    const deleteHandlerhere = () => {
        console.log("Delete handler executed");
        closeConfirmDeleteHandler();
    };

    useEffect(() => {
       if(chatId){
        setGroupName(`groupname ${chatId}`);
        setGroupnameUpdateValue(`groupname ${chatId}`);
       }
        return () => {
            setGroupName("");
            setGroupnameUpdateValue("");
            setIsEdit(false);
        };
    }, [chatId]);

    const IconBtns = (
        <>
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "none",
                        position: "fixed",
                        right: "1rem",
                        top: "1rem"
                    }
                }}>
                <IconButton onClick={handleMobile}>
                    <Menu />
                </IconButton>
            </Box>
            <Tooltip title="Back">
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "2rem",
                        left: "2rem",
                        bgcolor: "#1c1c1c",
                        color: "white",
                        "&:hover": {
                            bgcolor: "rgba(0,0,0,0.5)"
                        }
                    }}
                    onClick={navigateBack}
                >
                    <KeyboardBackspaceIcon />
                </IconButton>
            </Tooltip>
        </>
    );

    return (
        <Grid container height={"100vh"}>
            <Grid
                item
                sm={4}
                sx={{
                    display: {
                        xs: "none",
                        sm: "block",
                    }
                }}
                bgcolor={"bisque"}
            >
                <GroupList myGroups={chats} chatId={chatId} />
            </Grid>
            <Grid item xs={12} sm={8} sx={
                {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    padding: "1rem 3rem"
                }
            }>
                {IconBtns}
                <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} spacing={2}>
                    <GroupName
                        groupName={groupName}
                        isEdit={isEdit}
                        groupnameUpdateValue={groupnameUpdateValue}
                        setIsEdit={setIsEdit}
                        setGroupnameUpdateValue={setGroupnameUpdateValue}
                        updateGroupName={updateGroupName}
                    />
                    <Typography variant='body1' margin={"2rem"} alignSelf={"flex-start"}>
                        Members
                    </Typography>
                    <Stack maxWidth={"45rem"} width={"100%"} boxSizing={"border-box"} padding={{ sm: "1rem", xs: "0", md: "1rem 4rem" }} spacing={"2rem"}  height={"50vh"} overflow={"auto"}>
                        {/* Render members here */}
                        {
                            Sampleusers.map((i)=>(
                                <UserItem key={i._id} user={i} isAdded styling={{
                                    boxShadow:"0 0 0.5rem rgba(0,0,0,0.2)",
                                    padding:"1rem 2rem",
                                    borderRadius:"1rem"
                                }}
                                handler={removeMemberHandler}
                                />
                            ))
                        }
                    </Stack>
                    <ButtonsGroup confirmDeleteHandler={confirmDeleteHandler} AddMemberHandler={AddMemberHandler} />
                </Stack>
            </Grid>
            {isAddMember && <Suspense fallback={<Backdrop open />}><AddDialogMember /></Suspense>}
            {confirmDeleteDialogue && <Suspense fallback={<Backdrop open />}><ConfirmDeleteDialogue open={confirmDeleteDialogue} handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandlerhere} /></Suspense>}
            <Drawer
                sx={{ display: { xs: "block", sm: "none" } }}
                open={isMobileMenuOpen} onClose={handleMobileClose}>
                <GroupList myGroups={chats} chatId={chatId} w={"50vw"} />
            </Drawer>
        </Grid>
    );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
    return (
        <Stack width={w}>
            {myGroups.length > 0 ? (
                myGroups.map((group) => (
                    <GroupListItem group={group} key={group._id} chatId={chatId} />
                ))
            ) : (
                <Typography textAlign={"center"} padding="1rem">No Groups</Typography>
            )}
        </Stack>
    );
};

const GroupListItem = memo(({ group, chatId }) => {
    const { name, avatar, _id } = group;
    return (
        <Link to={`?query=${_id}`} onClick={(e) => { if (chatId === _id) e.preventDefault(); }}>
            <Stack>
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </Link>
    );
});

const GroupName = ({ groupName, isEdit, groupnameUpdateValue, setIsEdit, setGroupnameUpdateValue, updateGroupName }) => {
    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={1} padding={"3rem"}>
            {isEdit ? (
                <>
                    <TextField value={groupnameUpdateValue} onChange={(e) => setGroupnameUpdateValue(e.target.value)} />
                    <IconButton onClick={updateGroupName}><Done /></IconButton>
                </>
            ) : (
                <>
                    <Typography variant='h4'>{groupName}</Typography>
                    <IconButton onClick={() => setIsEdit(true)}><EditIcon /></IconButton>
                </>
            )}
        </Stack>
    );
};

const ButtonsGroup = ({ confirmDeleteHandler, AddMemberHandler }) => {
    return (
        <Stack direction={{ sm: "row" }} spacing={"1rem"} p={{ xs: "0", sm: "1rem", md: "1rem 4rem" }}>
            <Button size='large' color='error' variant='outlined' startIcon={<Delete />} onClick={confirmDeleteHandler}>Delete Group</Button>
            <Button size='large' startIcon={<Add />} onClick={AddMemberHandler} variant='contained'>Add Member</Button>
        </Stack>
    );
};

export default Groups;
