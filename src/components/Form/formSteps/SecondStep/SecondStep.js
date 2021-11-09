import React, {useState} from "react";
import {Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup} from "@mui/material";
import {MyButton} from "../../../common/MyButton";
import './secondStep.scss'

export const SecondStep = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container className='secondStep' sx={{mb: '50px', minHeight: '500px'}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</h2>
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
                                                  value="one" control={<Radio sx={{'&.Mui-checked': {color: "white"}}}/>}
                                                  label="Lorem ipsum dolor sit amet"/>
                                <FormControlLabel className={`radioItem ${value === 'two' && 'radioActive'}`}
                                                  value="two" control={<Radio sx={{'&.Mui-checked': {color: "white"}}}/>}
                                                  label="Lorem ipsum dolor sit amet"/>
                                <FormControlLabel className={`radioItem ${value === 'three' && 'radioActive'}`}
                                                  value="three" control={<Radio sx={{'&.Mui-checked': {color: "white"}}}/>}
                                                  label="Lorem ipsum dolor sit amet"/>
                                <FormControlLabel className={`radioItem ${value === 'four' && 'radioActive'}`}
                                                  value="four" control={<Radio sx={{'&.Mui-checked': {color: "white"}}}/>}
                                                  label="Lorem ipsum dolor sit amet"/>
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='DALEJ'/>
                </Grid>
            </Grid>
        </Container>
    )
}