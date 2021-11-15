import { Container, Grid, Slider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MyButton } from "../../../common/MyButton";

export const TenthStep = () => {

    const [value, setValue] = useState(5);

    useEffect(() => {
        console.log(value)
    }, [value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const valuetext = (value) => {
    //     console.log(value)
    // }

    return (
        <Container sx={{ mb: '50px', minHeight: '500px' }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Ile czasu chcesz spłacać kredyt?</h2>
                    </div>

                    <div>
                        <Slider
                            sx={{ mt: '30px' }}
                            size='medium'
                            color='primary'
                            marks
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                            step={5}
                            min={5}
                            max={35}
                        // getAriaValueText={valuetext}
                        />

                        <div className='d-flex justify-content-between'>
                            <span>5</span>
                            <span>35</span>
                        </div>

                    </div>

                    <MyButton buttonText='DALEJ' />
                </Grid>
            </Grid>
        </Container>
    )
}