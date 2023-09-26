import {react, useState}  from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ isOpen, confirmDelete,setOpenAlertDialog}) {


  return (
    <div>
      <Dialog
        open={isOpen} 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deleting the note"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color={'error'}>
            Are you sure you want to delete this note?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setOpenAlertDialog(false)}}>Disagree</Button>
          <Button onClick={() => {confirmDelete();setOpenAlertDialog(false);}} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
