import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'

export const TwelfthStep = () => {

    const [sliderValue, setSliderValue] = useState(0);
    const [radioValue, setRadioValue] = useState('one');

    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
    };

    const handleChangeSlider = (event, newValue) => {
        setSliderValue(newValue);
    };

    return (
        <Container className='radioStep' sx={{ mb: '50px', minHeight: '500px' }}>
            <Grid container>
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

                    <MyButton buttonText='DALEJ' />
                </Grid>
            </Grid>
        </Container>
    )
}