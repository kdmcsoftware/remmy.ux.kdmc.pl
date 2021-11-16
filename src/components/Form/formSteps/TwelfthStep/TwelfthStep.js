import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Slider } from "@mui/material";
import React, { useState, useContext } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'
import { StepsContext } from '../../StepsState'

export const TwelfthStep = () => {

    const [sliderValue, setSliderValue] = useState(0);
    const [radioValue, setRadioValue] = useState('one');

    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
    };

    const handleChangeSlider = (event, newValue) => {
        setSliderValue(newValue);
    };

    const { steps, setSteps, twelfthStepRef, thirteenthStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.thirteenthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, thirteenthStep: true }))
        }

        thirteenthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={twelfthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Jak duży jest dom który chcesz kupić?</h2>
                    </div>

                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="gender"
                                name="controlled-radio-buttons-group"
                                defaultValue="one"
                                value={radioValue}
                                onChange={handleChangeRadio}
                            >
                                <FormControlLabel className={`radioItem ${radioValue === 'one' && 'radioActive'}`}
                                    value="one" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Powierzchnia w metrach kwadratowych" />
                                <FormControlLabel className={`radioItem ${radioValue === 'two' && 'radioActive'}`}
                                    value="two" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Liczba pokoi" />
                            </RadioGroup>
                        </FormControl>

                        <Slider
                            sx={{ mt: '40px' }}
                            size='medium'
                            color='primary'
                            value={sliderValue}
                            onChange={handleChangeSlider}
                            valueLabelDisplay="on"
                            step={5}
                            min={0}
                            max={100}
                        />
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}