import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss';

export const FirstStep = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container className='radioStep' sx={{ mb: '50px', minHeight: '500px' }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Cześć, na jakim etapie zakupu nieruchomości jesteś?</h2>
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
                                <FormControlLabel style={{ fontFamily: 'Montserrat' }} className={`radioItem ${value === 'one' && 'radioActive'}`}
                                    value="one" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Przeglądam ogłoszenia" />
                                <FormControlLabel className={`radioItem ${value === 'two' && 'radioActive'}`}
                                    value="two" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Odwiedzam nieruchomości wystawione na sprzedaż" />
                                <FormControlLabel className={`radioItem ${value === 'three' && 'radioActive'}`}
                                    value="three" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Mam już wybraną nieruchomość" />
                                <FormControlLabel className={`radioItem ${value === 'four' && 'radioActive'}`}
                                    value="four" control={<Radio sx={{ '&.Mui-checked': { color: "white" } }} />}
                                    label="Mam już ofertę kredytu" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='DALEJ' />
                </Grid>
            </Grid>
        </Container>
    )
}