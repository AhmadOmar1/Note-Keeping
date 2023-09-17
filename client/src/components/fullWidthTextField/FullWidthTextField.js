import React, { useState } from 'react';
import { Box, TextField, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function FullWidthTextField() {
    const [expanded, setExpanded] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    const handleFocus = () => {
        setExpanded(true);
    };
    
    const handleAdd = () => {

    }

    const handleClose = () => {
        setExpanded(false);
    };


    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            {expanded ? (
                <div
                    style={{
                        border: '1px solid #ccc',
                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                        borderRadius: '5px',
                        padding: '10px',
                        display: 'flex',
                        gap: '1rem',
                        flexDirection: 'column',
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        style={{ alignSelf: 'flex-end' }}
                        color="error"
                    >
                        <CloseIcon />
                    </IconButton>
                    <TextField
                        fullWidth
                        label="Note Title"
                        id="noteTitle"
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Note Content"
                        id="noteContent"
                        multiline
                        rows={4}
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                    />
                    <Button variant="contained" color="success" onClick={handleAdd}>
                        Add
                    </Button>       
                     </div>
            ) : (
                <TextField
                    fullWidth
                    label="Take a Note"
                    id="fullWidth"
                    onFocus={handleFocus}
                />
            )}
        </Box>
    );
}

export default FullWidthTextField;
