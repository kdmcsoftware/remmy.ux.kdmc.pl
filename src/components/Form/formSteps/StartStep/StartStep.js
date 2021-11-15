import React from "react";
import { Box, Container, Grid } from "@mui/material";
import './startStep.scss'
import { MyButton } from "../../../common/MyButton";

export const StartStep = () => {
    return (
        <Container className='startStep' sx={{ mb: '50px', minHeight: '500px' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</h2>
                    </div>

                    <Box sx={{ display: { xs: 'block !important', md: 'none !important' } }} component="div"
                        className='helpInfo'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </Box>

                    <div>
                        <ul style={{ margin: '0px' }}>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Ut enim ad minim veniam</li>
                            <li>Duis aute irure dolor in reprehenderit</li>
                            <li>Excepteur sint occaecat cupidatat</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Ut enim ad minim veniam</li>
                        </ul>
                    </div>

                    <MyButton buttonText='ZACZNIJ' />
                </Grid>

                <Grid item xs={12} md={3}>
                    <Box sx={{ display: { xs: 'none !important', md: 'block !important' } }} component="div"
                        className='helpInfo'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p></Box>
                </Grid>
            </Grid>
        </Container>
    )
}