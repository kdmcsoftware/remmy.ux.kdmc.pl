import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'
import { StepsContext } from '../../StepsState'

export const ThirdStep = ({ countProgress }) => {

    const [value, setValue] = useState('one');

    useEffect(() => {
        countProgress(3)
    })

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { steps, setSteps, thirdStepRef, fourthStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.fourthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, fourthStep: true }))
        }

        fourthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={thirdStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xxs={12} md={8}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Kiedy chcesz kupić nieruchomość?</h2>
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
                                    label="Jak najszybciej" />
                                <FormControlLabel className={`radioItem ${value === 'two' && 'radioActive'}`}
                                    value="two" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="W ciągu 3 miesięcy" />
                                <FormControlLabel className={`radioItem ${value === 'three' && 'radioActive'}`}
                                    value="three" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Wciągu pół roku" />
                                <FormControlLabel className={`radioItem ${value === 'four' && 'radioActive'}`}
                                    value="four" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="W ciągu roku" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}