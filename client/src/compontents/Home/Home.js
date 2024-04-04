import { Box, Button, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import bell_image from '../satitc/bell_image.png'
import sofa from '../satitc/sofa.png'
import DealGureCard from '../dealguruCard/DealGureCard'
function Home() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div
                style={{
                    color: 'blue',
                    bottom: '10px',
                    fontSize: '20px',
                    padding: "10rem,20rem",

                }}
            >
                <ul style={{ margin: "0px", fontSize: '20px' }}> {dots} </ul>
            </div>
        )
    }
    return (
        <Box>
        <Slider {...settings}>


            <Grid container sx={{ height: { xs: 'auto', md: '80vh' }, display: 'flex !important', 'backgroundColor': '#f6f7fb' }}>
                <Grid item md={2} xs={12} >
                    <img src={bell_image} width={200} />
                </Grid>

                <Grid item md={6} xs={12} sx={{ display: 'flex', textAlign: { xs: 'center', md: 'left' }, 'alignItems': 'center', }}>
                    <Box dipslay="flex" alignItems="center">
                        <Typography color={"#fb2e86"} variant="subtitle1" component="div" sx={{ 'fontFamily': 'Lato', 'fontStyle': 'normal', 'fontWeight': '700', 'fontSize': '16px', 'lineHeight': '28px' }}>
                            Best Furniture For Your Castle....
                        </Typography>
                        <Typography fontWeight={700} component="div" variant="h3" sx={{ fontFamily: 'var(--josefin) sans', 'lineHeight': '70px', 'letterSpacing': '1.5' }}>
                            New Furniture Collection
                            Trends in 2024S
                            
                        </Typography>
                        <Typography my={3} component="div" variant="p" sx={{ color: 'var(--soft-blue)', 'fontFamily': 'Lato', 'fontStyle': 'normal', 'fontWeight': '600', 'fontSize': '16px', 'lineHeight': '28px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.
                        </Typography>
                        <Box>
                            <Button sx={{ padding: " 16px 40px ", backgroundColor: "#fb2e86", color: "#fff", fontSize: "1.2rem", fontFamily: 'Josefin Sans', }}>
                                Shop Now
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid items md={1} mt={"2rem"}>
                    <img src={sofa} width={400} />
                </Grid>
            </Grid>

            <Grid container sx={{ height: { xs: 'auto', md: '80vh' }, display: 'flex !important', 'backgroundColor': '#f6f7fb' }}>
                <Grid item md={2} xs={12} >
                    <img src={bell_image} width={200} />
                </Grid>

                <Grid item md={6} xs={12} sx={{ display: 'flex', textAlign: { xs: 'center', md: 'left' }, 'alignItems': 'center', }}>
                    <Box dipslay="flex" alignItems="center">
                        <Typography color={"#fb2e86"} variant="subtitle1" component="div" sx={{ 'fontFamily': 'Lato', 'fontStyle': 'normal', 'fontWeight': '700', 'fontSize': '16px', 'lineHeight': '28px' }}>
                            Best Furniture For Your Castle....
                        </Typography>
                        <Typography fontWeight={700} component="div" variant="h3" sx={{ fontFamily: 'var(--josefin) sans', 'lineHeight': '70px', 'letterSpacing': '1.5' }}>
                            New Furniture Collection
                            Trends in 2020S
                        </Typography>
                        <Typography my={3} component="div" variant="p" sx={{ color: 'var(--soft-blue)', 'fontFamily': 'Lato', 'fontStyle': 'normal', 'fontWeight': '600', 'fontSize': '16px', 'lineHeight': '28px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.
                        </Typography>
                        <Box>
                            <Button sx={{ padding: " 16px 40px ", backgroundColor: "#fb2e86", color: "#fff", fontSize: "1.2rem", fontFamily: 'Josefin Sans', }}>
                                Shop Now
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid items md={1} mt={"2rem"}>
                    <img src={sofa} width={400} />
                </Grid>
            </Grid>
            <Grid container sx={{ height: { xs: 'auto', md: '80vh' }, display: 'flex !important', 'backgroundColor': '#f6f7fb' }}>
                <Grid item md={2} xs={12} >
                    <img src={bell_image} width={200} />
                </Grid>

                <Grid item md={6} xs={12} sx={{ display: 'flex', textAlign: { xs: 'center', md: 'left' }, 'alignItems': 'center', }}>
                    <Box dipslay="flex" alignItems="center">
                        <Typography color={"#fb2e86"} variant="subtitle1" component="div" sx={{ 'fontFamily': 'Lato', 'fontStyle': 'normal', 'fontWeight': '700', 'fontSize': '16px', 'lineHeight': '28px' }}>
                            Best Furniture For Your Castle....
                        </Typography>
                        <Typography fontWeight={700} component="div" variant="h3" sx={{ fontFamily: 'var(--josefin) sans', 'lineHeight': '70px', 'letterSpacing': '1.5' }}>
                            New Furniture Collection
                            Trends in 2020S
                        </Typography>
                        <Typography my={3} component="div" variant="p" sx={{ color: 'var(--soft-blue)', 'fontFamily': 'Lato', 'fontStyle': 'normal', 'fontWeight': '600', 'fontSize': '16px', 'lineHeight': '28px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.
                        </Typography>
                        <Box>
                            <Button sx={{ padding: " 16px 40px ", backgroundColor: "#fb2e86", color: "#fff", fontSize: "1.2rem", fontFamily: 'Josefin Sans', }}>
                                Shop Now
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid items md={1} mt={"2rem"}>
                    <img src={sofa} width={400} />
                </Grid>
            </Grid>
            <Grid container sx={{ height: { xs: 'auto', md: '80vh' }, display: 'flex !important', 'backgroundColor': '#f6f7fb' }}>
                <Grid item md={2} xs={12} >
                    <img src={bell_image} width={200} />
                </Grid>

                <Grid item md={6} xs={12} sx={{ display: 'flex', textAlign: { xs: 'center', md: 'left' }, 'alignItems': 'center', }}>
                    <Box dipslay="flex" alignItems="center">
                        <Typography color={"#fb2e86"} variant="subtitle1" component="div" sx={{ 'fontFamily': 'Lato', 'fontStyle': 'normal', 'fontWeight': '700', 'fontSize': '16px', 'lineHeight': '28px' }}>
                            Best Furniture For Your Castle....
                        </Typography>
                        <Typography fontWeight={700} component="div" variant="h3" sx={{ fontFamily: 'var(--josefin) sans', 'lineHeight': '70px', 'letterSpacing': '1.5' }}>
                            New Furniture Collection
                            Trends in 2024S
                        </Typography>
                        <Typography my={3} component="div" variant="p" sx={{ color: 'var(--soft-blue)', 'fontFamily': 'Lato', 'fontStyle': 'normal', 'fontWeight': '600', 'fontSize': '16px', 'lineHeight': '28px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.
                        </Typography>
                        <Box>
                            <Button sx={{ padding: " 16px 40px ", backgroundColor: "#fb2e86", color: "#fff", fontSize: "1.2rem", fontFamily: 'Josefin Sans', }}>
                                Shop Now
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid items md={1} mt={"2rem"}>
                    <img src={sofa} width={400} />
                </Grid>
            </Grid>
        </Slider>
        <DealGureCard/>
        </Box>
    )
}

export default Home