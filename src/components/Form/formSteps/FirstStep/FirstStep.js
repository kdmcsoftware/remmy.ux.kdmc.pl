import React from "react";
import {Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid} from "@mui/material";
import {MyButton} from "../../../common/MyButton";
import './firstStep.scss'

export const FirstStep = () => {

    const [checked1, setChecked1] = React.useState(false)
    const [checked2, setChecked2] = React.useState(false)
    const [checked3, setChecked3] = React.useState(true)
    const [checked4, setChecked4] = React.useState(true)
    const [checked5, setChecked5] = React.useState(true)

    const handleChange1 = (event) => {setChecked1(event.target.checked)}
    const handleChange2 = (event) => {setChecked2(event.target.checked)}
    const handleChange3 = (event) => {setChecked3(event.target.checked)}
    const handleChange4 = (event) => {setChecked4(event.target.checked)}
    const handleChange5 = (event) => {setChecked5(event.target.checked)}

    return (
        <Container className='firstStep' sx={{mb: '50px', minHeight: '500px'}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</h2>
                    </div>

                    <div>
                        <FormControl component="fieldset" variant="standard">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox sx={{'&.Mui-checked': {color: 'white'}}}/>}
                                                  checked={checked1}
                                                  onChange={handleChange1}
                                                  className={`checkboxItem ${checked1 && 'checkboxActive'}`}
                                                  label="Lorem ipsum dolor sit amet"/>
                                <FormControlLabel control={<Checkbox sx={{'&.Mui-checked': {color: 'white'}}}/>}
                                                  checked={checked2}
                                                  onChange={handleChange2}
                                                  className={`checkboxItem ${checked2 && 'checkboxActive'}`}
                                                  label="Ut enim ad minim veniam"/>
                                <FormControlLabel control={<Checkbox sx={{'&.Mui-checked': {color: 'white'}}}/>}
                                                  checked={checked3}
                                                  onChange={handleChange3}
                                                  className={`checkboxItem ${checked3 && 'checkboxActive'}`}
                                                  label="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>
                                <FormControlLabel control={<Checkbox sx={{'&.Mui-checked': {color: 'white'}}}/>}
                                                  checked={checked4}
                                                  onChange={handleChange4}
                                                  className={`checkboxItem ${checked4 && 'checkboxActive'}`}
                                                  label="Excepteur sint occaecat cupidatat"/>
                                <FormControlLabel control={<Checkbox sx={{'&.Mui-checked': {color: 'white'}}}/>}
                                                  checked={checked5}
                                                  onChange={handleChange5}
                                                  className={`checkboxItem ${checked5 && 'checkboxActive'}`}
                                                  label="Lorem ipsum dolor sit amet"/>
                            </FormGroup>
                        </FormControl>
                    </div>

                    <MyButton buttonText='DALEJ'/>
                </Grid>
            </Grid>
        </Container>
    )
}