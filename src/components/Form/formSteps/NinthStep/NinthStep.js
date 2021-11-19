import { Container, Grid, Slider } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { MyButton } from "../../../common/MyButton";
import { StepsContext } from '../../StepsState'

export const NinthStep = ({ countProgress }) => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        countProgress(9)
    })

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { steps, setSteps, ninthStepRef, tenthStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.tenthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, tenthStep: true }))
        }

        tenthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // const valuetext = (value) => {
    //     console.log(value)
    // }

    return (
        <Container ref={ninthStepRef} sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xxs={12} md={8}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Ile pieniędzy jesteś w stanie przeznaczyć na depozyt?</h2>
                    </div>

                    <div>
                        <Slider
                            sx={{ mt: '30px' }}
                            size='medium'
                            color='primary'
                            marks
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                            step={10000}
                            min={0}
                            max={500000}
                        // getAriaValueText={valuetext}
                        />

                        <div className='d-flex justify-content-between'>
                            <span>0</span>
                            <span>500 000</span>
                        </div>

                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}