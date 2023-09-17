import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const cardStyle = {
  maxWidth: 300,
  marginLeft: 0, // Ensure there are no unwanted margins
};

const cardContentStyle = {
    display: 'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    textAlign:'start'
}


export default function NoteCard() {
  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        <CardContent sx={cardContentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
