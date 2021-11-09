import { CardActionArea, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';

  const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 , my:5}}>
        <Container>
        <Typography variant="h6" color="text.secondary">
            our services
          </Typography>
          <Typography variant="h4" color="" sx={{mb:2}}>
            service we provide
          </Typography>
        <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map (service=><Grid item xs={2} sm={4} md={4} key={service.name}>
            <Card sx={{ maxWidth: 345,border:0, boxShadow: 0  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{height:80,width:"auto",margin:" 0 auto"}}
          image={service.img}
          alt={service.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
          )}
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;