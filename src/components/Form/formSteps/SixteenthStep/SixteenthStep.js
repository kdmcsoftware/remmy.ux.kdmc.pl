import React, { useState, useContext, useEffect } from "react";
import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'
import { StepsContext } from '../../StepsState'

export const SixteenthStep = () => {

    const [value, setValue] = useState('one');
    const { steps, setSteps, sixteenthStepRef, seventeenthStepRef } = useContext(StepsContext)

    useEffect(() => {
        if (value === 'two') {
            if (steps.seventeenthStep === true) {
                setSteps((prevState) => ({ ...prevState, seventeenthStep: false }))
            }
        }
    }, [value])

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const nextStep = async () => {
        if (value === 'one') {
            if (steps.seventeenthStep !== true) {
                await setSteps((prevState) => ({ ...prevState, seventeenthStep: true }))
            }

            seventeenthStepRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Container ref={sixteenthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Czy posiadasz inne zobowiązania kredytywe?</h2>
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

                    {value === 'one' ? <MyButton buttonText='DALEJ' onClick={nextStep} /> : <MyButton buttonText='ZAKOŃCZ' onClick={nextStep} />}
                </Grid>
            </Grid>
        </Container>
    )
}