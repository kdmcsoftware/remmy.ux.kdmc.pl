import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'
import { StepsContext } from '../../StepsState'

export const SixthStep = ({ countProgress }) => {

    const [value, setValue] = useState('one');

    useEffect(() => {
        countProgress(6)
    })

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { steps, setSteps, sixthStepRef, seventhStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.seventhStep !== true) {
            await setSteps((prevState) => ({ ...prevState, seventhStep: true }))
        }

        seventhStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={sixthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xxs={12} md={8}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Czy zamierzasz kupić mieszkanie bezpośrednio od dewelopera?</h2>
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