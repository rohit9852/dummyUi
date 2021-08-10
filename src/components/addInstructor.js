import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

 export default function addInstructor({
     isOpenModel, handleClose, personName, handleChange, handleAddInstructor
 }) {
     if(!isOpenModel) return null;
    return(
         <>
                <Dialog open={isOpenModel} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Instructor</DialogTitle>
                <DialogContent>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={personName}
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                    <TextField
                        margin="dense"
                        id="name"
                        label="name"
                        type="text"
                        fullWidth
                    />
                <InputLabel id="demo-simple-select-label">Instructor Name</InputLabel>
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddInstructor} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}