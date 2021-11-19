import { Container, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss';
import { StepsContext } from '../../StepsState'

export const ThirteenthStep = ({ countProgress }) => {

    const { steps, setSteps, thirteenthStepRef, fourteenthStepRef } = useContext(StepsContext)

    useEffect(() => {
        countProgress(13)
    })

    const nextStep = async () => {
        if (steps.fourteenthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, fourteenthStep: true }))
        }

        fourteenthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={thirteenthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xxs={12} md={8}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Dane osobiste</h2>
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            label="Imię Nazwisko"
                            type='text'
                            sx={{ mt: '10px' }}
                            variant="standard"
                        />

                        <TextField
                            fullWidth
                            label="Data urodzenia (dd/mm/rrrr)"
                            type='text'
                            sx={{ mt: '10px' }}
                            variant="standard"
                        />
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}