import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React, { useState, useContext } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'
import { StepsContext } from '../../StepsState'

export const FifthStep = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { steps, setSteps, fifthStepRef, sixthStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.sixthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, sixthStep: true }))
        }

        sixthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={fifthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Jaką nieruchomość planujesz kupić?</h2>
                    </div>

                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="gender"
                                name="controlled-radio-buttons-group"
                                defaultValue="one"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel className={`radioItem ${value === 'one' && 'radioActive'}`}
                                    value="one" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Mieszkanie" />
                                <FormControlLabel className={`radioItem ${value === 'two' && 'radioActive'}`}
                                    value="two" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Dom" />
                                <FormControlLabel className={`radioItem ${value === 'three' && 'radioActive'}`}
                                    value="three" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Działkę" />
                                <FormControlLabel className={`radioItem ${value === 'four' && 'radioActive'}`}
                                    value="four" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Lokal użytkowy" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}