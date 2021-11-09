import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Bg from "../../../images/appointment-bg.png";
import Doctor from "../../../images/doctor.png";

const apppointmentBanner={
    background: `URL(${Bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={apppointmentBanner} sx={{flexGrow:1}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: '-110px' }} src={Doctor} alt=""/>

                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                    Appointment
                </Typography>
                <Typography variant="h4" sx={{ mb: 5 }}>
                its a new appointment
                </Typography>
                <Typography variant="h4" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                its a new appointment
                </Typography>
                <Button variant="contained">Learn More</Button>
                </Grid>
            </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;