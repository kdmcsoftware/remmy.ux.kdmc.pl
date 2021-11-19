import React, { useState, useContext, useEffect } from "react";
import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'
import { StepsContext } from '../../StepsState'

export const FourthStep = ({ countProgress }) => {

    const [value, setValue] = useState('one');

    useEffect(() => {
        countProgress(4)
    })

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { steps, setSteps, fourthStepRef, fifthStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.fifthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, fifthStep: true }))
        }

        fifthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={fourthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xxs={12} md={8}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Na co chcesz przeznaczyć kredyt?</h2>
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
                                    label="Zakup nieruchomości" />
                                <FormControlLabel className={`radioItem ${value === 'two' && 'radioActive'}`}
                                    value="two" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Budowa nieruchomości" />
                                <FormControlLabel className={`radioItem ${value === 'three' && 'radioActive'}`}
                                    value="three" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Adaptacja" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}