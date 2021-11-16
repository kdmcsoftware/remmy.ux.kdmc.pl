import React, { useState, useContext } from "react";
import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'
import { StepsContext } from '../../StepsState'

export const SeventhStep = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { steps, setSteps, seventhStepRef, eighthStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.eighthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, eighthStep: true }))
        }

        eighthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={seventhStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }} >
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Czy masz zamiar remontować mieszkanie?</h2>
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
                                    label="Tak" />
                                <FormControlLabel className={`radioItem ${value === 'two' && 'radioActive'}`}
                                    value="two" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Nie" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}