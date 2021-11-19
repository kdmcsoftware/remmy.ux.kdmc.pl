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
        <Container>
            <Grid container className='startStep' sx={{ pt: '100px', minHeight: '100vh' }}>
                <Grid item xxs={12} md={8}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</h2>
                    </div>

                    <div className='d-flex justify-content-start'>
                        <Box sx={{ display: { xxs: 'block !important', md: 'none !important' } }} component="div"
                            className='helpInfo'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                        </Box>
                    </div>

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

                <Grid item xxs={12} md={4} sx={{ pl: '15px', pb: '100px' }}>
                    <div>
                        <Box sx={{ display: { xxs: 'none !important', md: 'block !important' } }} component="div" className='helpInfo'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Box>
                    </div>

                </Grid>
            </Grid>
        </Container>

    )
}