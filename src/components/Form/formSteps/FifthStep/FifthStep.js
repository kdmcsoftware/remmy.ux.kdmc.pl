import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss'

export const FifthStep = () => {

    // const [age, setAge] = useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    const [value, setValue] = useState('one');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container className='radioStep' sx={{ mb: '50px', minHeight: '500px' }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Jaką nieruchomość planujesz kupić?</h2>
                    </div>

                    <div>
                        {/* <div className='d-flex flex-column'> */}
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
                                    label="DziLokal użytkowyałkę" />
                            </RadioGroup>
                        </FormControl>
                        {/* <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">label</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="label"
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value='10'>Ten</MenuItem>
                                <MenuItem value='20'>Twenty</MenuItem>
                                <MenuItem value='30'>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label1">label</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label1"
                                id="demo-simple-select-standard1"
                                value={age}
                                onChange={handleChange}
                                label="label"
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value='10'>Ten</MenuItem>
                                <MenuItem value='20'>Twenty</MenuItem>
                                <MenuItem value='30'>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label2">label</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label2"
                                id="demo-simple-select-standard2"
                                value={age}
                                onChange={handleChange}
                                label="label"
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value='10'>Ten</MenuItem>
                                <MenuItem value='20'>Twenty</MenuItem>
                                <MenuItem value='30'>Thirty</MenuItem>
                            </Select>
                        </FormControl> */}
                    </div>

                    <MyButton buttonText='DALEJ' />
                </Grid>
            </Grid>
        </Container>
    )
}