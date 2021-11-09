import React, {useState} from "react";
import {Container, Grid, Slider} from "@mui/material";
import {MyButton} from "../../../common/MyButton";

export const ThirdStep = () => {

    const [value, setValue] = useState([40, 60]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const valuetext = (value) => {
        // console.log(value)
    }

    return (
        <Container sx={{mb: '50px', minHeight: '500px'}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</h2>
                    </div>

                    <div>
                        <Slider
                            sx={{ mt: '30px'}}
                            getAriaLabel={() => 'Temperature range'}
                            size='medium'
                            color='primary'
                            marks
                            step={20}
                            min={0}
                            max={100}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </div>

                    <MyButton buttonText='DALEJ'/>
                </Grid>
            </Grid>
        </Container>
    )
}