import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './NoteCard.css';
import { Box, TextField, IconButton, Button } from '@mui/material';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

const cardStyle = {
  backgroundColor: 'lightsteelblue',
  width: '300px',
  height: '180px',
  cursor: 'pointer',
  boxShadow: '0 1px 5px 1px',
};

const cardContentStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'start',
  justifyContent: 'space-between',
};

export default function NoteCard({ id, title, content, creationDate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [noteTitle, setTitle] = useState(title);
  const [noteContent, setContent] = useState(content);


  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleClose = () => { };

  const textFieldStyle = {
    border: 'none',
  };

  const centerDivStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    zIndex: 100,
    width: '30%',
    boxShadow: '0px 1px 5px 1px',
    borderRadius: '5px',
    padding: '20px',
    display: 'flex',
    gap: '1rem',
    flexDirection: 'column',
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);

  }


  return (
    <div>
      {isEditing ? (
        <div style={centerDivStyle}>
          <TextField sx={textFieldStyle} fullWidth label="Note Title" id="noteTitle" value={noteTitle} />
          <TextField
            fullWidth
            label="Note Content"
            id="noteContent"
            multiline
            rows={4}
            value={noteContent}
          />
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-end',
              gap: '0.6rem',
            }}
          >
            <Button variant="outlined" color="success">
              Update
            </Button>
            <Button variant="outlined" color="warning" onClick={toggleEditing}>
              Close
            </Button>
          </div>
        </div>
      ) : (
        <Card className='cardStyle' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  >
          <CardContent className='cardContentStyle' >
            <div>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {content}
              </Typography>
            </div>

            <div className='last-line'>
              <span className="date-field">
                {creationDate}
              </span>
              {isHover && (<IconButton color="primary" aria-label="delete" size='large' onClick={onDelete} >
                <DeleteIcon />
              </IconButton>)
              }
            </div>

          </CardContent>
        </Card>
      )}
    </div>
  );
}
