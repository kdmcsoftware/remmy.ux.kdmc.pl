import { Container, Grid, TextField } from "@mui/material";
import React, { useContext } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss';
import { StepsContext } from '../../StepsState'

export const EleventhStep = () => {

    const { steps, setSteps, eleventhStepRef, twelfthStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.twelfthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, twelfthStep: true }))
        }

        twelfthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={eleventhStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xxs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Podaj adres domu który chcesz kupić</h2>
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            label="Adres 1"
                            type='text'
                            sx={{ mt: '10px' }}
                            variant="standard"
                        />

                        <TextField
                            fullWidth
                            label="Adres 2"
                            type='text'
                            sx={{ mt: '10px' }}
                            variant="standard"
                        />

                        <Grid container className='d-flex justify-content-between'>
                            <Grid item xxs={12} xs={4}>
                                <TextField
                                    fullWidth
                                    label="Kod pocztowy"
                                    type='text'
                                    sx={{ mt: '10px' }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xxs={12} xs={7}>
                                <TextField
                                    fullWidth
                                    label="Miasto"
                                    type='text'
                                    sx={{ mt: '10px' }}
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container >
    )
}