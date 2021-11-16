import { Container, Grid, Slider } from "@mui/material";
import React, { useState, useContext } from "react";
import { MyButton } from "../../../common/MyButton";
import { StepsContext } from '../../StepsState'

export const TenthStep = () => {

    const [value, setValue] = useState(5);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { steps, setSteps, tenthStepRef, eleventhStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.eleventhStep !== true) {
            await setSteps((prevState) => ({ ...prevState, eleventhStep: true }))
        }

        eleventhStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // const valuetext = (value) => {
    //     console.log(value)
    // }

    return (
        <Container ref={tenthStepRef} sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Ile czasu chcesz spłacać kredyt?</h2>
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
                            step={5}
                            min={5}
                            max={35}
                        // getAriaValueText={valuetext}
                        />

                        <div className='d-flex justify-content-between'>
                            <span>5</span>
                            <span>35</span>
                        </div>

                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}