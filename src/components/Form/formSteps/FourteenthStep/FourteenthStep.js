import React, { useState, useContext } from "react";
import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'
import { StepsContext } from '../../StepsState'

export const FourteenthStep = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { steps, setSteps, fourteenthStepRef, fifteenthStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.fifteenthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, fifteenthStep: true }))
        }

        fifteenthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={fourteenthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>W jakiej formie posiadasz dochody?</h2>
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
                                    label="Pracuję na etat" />
                                <FormControlLabel className={`radioItem ${value === 'two' && 'radioActive'}`}
                                    value="two" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Posiadam własną działalność gospodarczą" />
                                <FormControlLabel className={`radioItem ${value === 'three' && 'radioActive'}`}
                                    value="three" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Wynajmuje nieruchomości" />
                                <FormControlLabel className={`radioItem ${value === 'four' && 'radioActive'}`}
                                    value="four" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Renta lub emerytura" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}