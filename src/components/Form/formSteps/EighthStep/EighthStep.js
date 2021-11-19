import { Container, Grid, TextField, InputAdornment } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss';
import { StepsContext } from '../../StepsState'

export const EighthStep = ({ countProgress }) => {

    const { steps, setSteps, eighthStepRef, ninthStepRef } = useContext(StepsContext)

    useEffect(() => {
        countProgress(8)
    })

    const nextStep = async () => {
        if (steps.ninthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, ninthStep: true }))
        }

        ninthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={eighthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xxs={12} md={8}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Jaka jest wartość nieruchomości, na którą chcesz przeznaczyć kredyt?</h2>
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            label="Wpisz wartość"
                            type='number'
                            sx={{ mt: '10px' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">PLN</InputAdornment>,
                            }}
                            variant="standard"
                        />
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}