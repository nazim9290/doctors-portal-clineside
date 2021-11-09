import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Exceptimg from "../../../images/treatment.png";



const Exception = () => {
    return (
        <Container>
        <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
   <img height="80%" width="100%" src={Exceptimg} alt=""/>
  </Grid>
  <Grid item xs={12} md={6} sx={{px:10,textAlign: 'left'}}>
  <Typography variant="h4" component="div" sx={{my:5}}>
        Exception Dental care on your terms
      </Typography>
  <Typography variant="subtitle1" gutterBottom component="div">
  Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity (the mouth), commonly in the dentition (development and arrangement of teeth) as well as the oral mucosa, and of adjacent and related structures and tissues, particularly in associated maxillofacial (jaw and facial) area.[1] The field of dentistry or dental medicine includes teeth as well as other aspects of the craniofacial complex including the temporomandibular joint and other supporting, muscular, lymphatic, nervous, vascular, and anatomical structures. The practitioner is called a dentist.
      </Typography>
  </Grid>
</Grid>
</Container>
    );
};

export default Exception;