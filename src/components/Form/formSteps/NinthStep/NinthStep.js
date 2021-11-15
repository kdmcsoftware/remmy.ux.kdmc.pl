import { Container, Grid, Slider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MyButton } from "../../../common/MyButton";

export const NinthStep = () => {

    const [value, setValue] = useState(0);

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
                        <h2 style={{ lineHeight: '1.5' }}>Ile pieniędzy jesteś w stanie przeznaczyć na depozyt?</h2>
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
                            step={10000}
                            min={0}
                            max={500000}
                        // getAriaValueText={valuetext}
                        />

                        <div className='d-flex justify-content-between'>
                            <span>0</span>
                            <span>500 000</span>
                        </div>

                    </div>

                    <MyButton buttonText='DALEJ' />
                </Grid>
            </Grid>
        </Container>
    )
}