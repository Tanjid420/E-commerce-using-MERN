import React, { useState } from "react"
import { useTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const CategoryCard = (props) => {
   

    console.log(props.categorycard)
    // setX(props.categorycard)
    console.log("hel")
    return (
      <Card sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ width: 250, height: 250 }}
        image={props.categorycard.img}
        
      />
        
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {props.categorycard.name}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography> */}
          </CardContent>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box> */}
        
        
        
      </Card>
    );
};

export default CategoryCard;
