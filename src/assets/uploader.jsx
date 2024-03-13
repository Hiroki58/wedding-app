import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import UploadIcon from '@mui/icons-material/Upload';
import { useState } from "react";
import { useForm } from 'react-hook-form'




export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit } = useForm("");

    const onSubmit = (data, e) => {
        console.log(data, e);
        handleClose();
        window.location.reload(false)
    }
    const onError = (errors, e) => console.log(errors, e)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setImg();
    };

    const handleInput = async (e) => {
        setImg(e.target.files)
    }

    const [img, setImg] = useState("");

    return (
        <React.Fragment>
            <BottomNavigationAction label="Upload" icon={<UploadIcon />} onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Apply to the contest</DialogTitle>
                <DialogContent>
                    {img ?
                        < img
                            src={img[0] ? URL.createObjectURL(img[0]) : null}
                            style={{
                                width: '50%',
                                height: '50%',
                                objectFit: 'contain',
                                aspectRatio: '1 / 1'
                            }}
                            alt=''
                        />
                        : null
                    }
                    <input
                        accept="image/*"
                        className={"photo-input"}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                        {...register('src')}
                        onChange={handleInput}
                    />
                    {img ?
                        null :
                        <label htmlFor="raised-button-file">

                            <Button variant="outlined" component="span" className={"upload-btn"}>
                                Upload
                            </Button>
                        </label>
                    }
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="title"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        {...register('title')}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Artist name"
                        type="text"
                        fullWidth
                        variant="standard"
                        {...register('name')}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={handleSubmit(onSubmit, onError)}
                    >
                        submit
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}