import React, { useState, useContext } from "react";
import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'
import { StepsContext } from '../../StepsState'

export const SecondStep = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { steps, setSteps, secondStepRef, thirdStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.thirdStep !== true) {
            await setSteps((prevState) => ({ ...prevState, thirdStep: true }))
        }

        thirdStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={secondStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>W czym mogę Ci pomóc?</h2>
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
                                    label="Sprawdź, na jaką nieruchomość mnie stać" />
                                <FormControlLabel className={`radioItem ${value === 'two' && 'radioActive'}`}
                                    value="two" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Oblicz ratę i porównaj oferty banków" />
                                <FormControlLabel className={`radioItem ${value === 'three' && 'radioActive'}`}
                                    value="three" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Przygotuj wniosek do banków" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}