import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const ConfirmDeleteDialogue = ({open,handleClose,deleteHandler}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Are u sure u want to delete this group?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>NO</Button>
            <Button onClick={deleteHandler} color='error'>Yes</Button>

        </DialogActions>
    </Dialog>
  )
}

export default ConfirmDeleteDialogue