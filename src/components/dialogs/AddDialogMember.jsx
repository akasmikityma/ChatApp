import React, { useState } from 'react';
import { Dialog, DialogTitle, Button, Stack, Typography } from '@mui/material';
import { Sampleusers } from "../../Constants/sampleData.js";
import UserItem from "../Shared/UserItem.jsx";

const AddDialogMember = ({ addMember, isLoading, chatId }) => {
    const [members, setMembers] = useState(Sampleusers);
    const [selectedMembers, setSelectedMembers] = useState([]);

    const selectMemberHandler = (id) => {
        setMembers((prev) =>
            prev.map((user) =>
                user._id === id ? { ...user, isAdded: !user.isAdded } : user
            )
        );

        setSelectedMembers((prev) =>
            prev.includes(id)
                ? prev.filter((currElement) => currElement !== id)
                : [...prev, id]
        );
    };

    const addMembersubmitHandler = () => {
        // Add your logic to submit selected members
        closeHandler();
    };

    const closeHandler = () => {
        // Add your logic to close the dialog
        setSelectedMembers([]);
        setMembers([]);
    };

    return (
        <Dialog  onClose={closeHandler}>
            <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
                <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
                <Stack spacing={"1rem"}>
                    {members.length > 0 ? (
                        members.map((user) => (
                            <UserItem
                                key={user._id}
                                user={user}
                                handler={selectMemberHandler}
                                isAdded={selectedMembers.includes(user._id)}
                            />
                        ))
                    ) : (
                        <Typography textAlign={"center"}>No Friends </Typography>
                    )}
                </Stack>
                <Stack direction={"row"} alignContent={"center"} justifyContent={"space-evenly"}>
                    <Button color='error' onClick={closeHandler}>Cancel</Button>
                    <Button variant='contained' onClick={addMembersubmitHandler} disabled={isLoading}>Submit Change</Button>
                </Stack>
            </Stack>
        </Dialog>
    );
};

export default AddDialogMember;
