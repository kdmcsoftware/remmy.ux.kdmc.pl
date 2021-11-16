import React, { useContext } from "react";
import { Box, Container, Grid } from "@mui/material";
import './startStep.scss'
import { MyButton } from "../../../common/MyButton";
import { StepsContext } from '../../StepsState'

export const StartStep = () => {

    const { steps, setSteps, firstStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.firstStep !== true) {
            await setSteps((prevState) => ({ ...prevState, firstStep: true }))
        }

        firstStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container className='startStep' sx={{ minHeight: '100%' }}>
            <Grid container spacing={3} sx={{ pt: '30px' }}>
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

                    <MyButton buttonText='ZACZNIJ' onClick={nextStep} />
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