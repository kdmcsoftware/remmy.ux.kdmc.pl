import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React, { useState, useContext } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss';
import { StepsContext } from '../../StepsState'

export const SeventeenthStep = () => {

    const [value, setValue] = useState('one');
    const { seventeenthStepRef } = useContext(StepsContext)

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container ref={seventeenthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
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
                                    label="Karta kredytowa" />
                                <FormControlLabel className={`radioItem ${value === 'two' && 'radioActive'}`}
                                    value="two" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Pożyczka osobista" />
                                <FormControlLabel className={`radioItem ${value === 'three' && 'radioActive'}`}
                                    value="three" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Pożyczka biznesowa" />
                                <FormControlLabel className={`radioItem ${value === 'four' && 'radioActive'}`}
                                    value="four" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Leasing samochodu" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='ZAKOŃCZ' />
                </Grid>
            </Grid>
        </Container>
    )
}