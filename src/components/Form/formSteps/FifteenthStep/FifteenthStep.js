import { Container, FormControl, Grid, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss';
import { StepsContext } from '../../StepsState'

export const FifteenthStep = ({ countProgress }) => {

    const [minPrice, setMinPrice] = useState('none');
    const [maxPrice, setMaxPrice] = useState('none');

    useEffect(() => {
        countProgress(15)
    })

    const changeMinPrice = (event) => {
        setMinPrice(event.target.value);
    };

    const changeMaxPrice = (event) => {
        setMaxPrice(event.target.value);
    };

    const { steps, setSteps, fifteenthStepRef, sixteenthStepRef } = useContext(StepsContext)

    const nextStep = async () => {
        if (steps.sixteenthStep !== true) {
            await setSteps((prevState) => ({ ...prevState, sixteenthStep: true }))
        }

        sixteenthStepRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container ref={fifteenthStepRef} className='radioStep' sx={{ minHeight: '100vh' }}>
            <Grid container sx={{ pt: '100px' }}>
                <Grid item xxs={12} md={8}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Podaj swoje miesięczne dochody</h2>
                    </div>

                    <div className='d-flex'>
                        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor="minPrice">PLN</InputLabel>
                            <Select
                                id="minPrice"
                                defaultValue={'none'}
                                value={minPrice}
                                onChange={changeMinPrice}
                            >
                                <MenuItem value="none">Od</MenuItem>
                                <MenuItem value='2000'>2000</MenuItem>
                                <MenuItem value='3000'>3000</MenuItem>
                                <MenuItem value='5000'>5000</MenuItem>
                                <MenuItem value='10000'>10000</MenuItem>
                                <MenuItem value='15000'>15000</MenuItem>
                                <MenuItem value='20000'>20000</MenuItem>
                                <MenuItem value='25000'>25000</MenuItem>
                                <MenuItem value='30000'>30000</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor="maxPrice">PLN</InputLabel>
                            <Select
                                id="maxPrice"
                                defaultValue={'none'}
                                value={maxPrice}
                                onChange={changeMaxPrice}
                            >
                                <MenuItem value="none">Do</MenuItem>
                                <MenuItem value='2000'>2000</MenuItem>
                                <MenuItem value='3000'>3000</MenuItem>
                                <MenuItem value='5000'>5000</MenuItem>
                                <MenuItem value='10000'>10000</MenuItem>
                                <MenuItem value='15000'>15000</MenuItem>
                                <MenuItem value='20000'>20000</MenuItem>
                                <MenuItem value='25000'>25000</MenuItem>
                                <MenuItem value='30000'>30000</MenuItem>
                            </Select>
                        </FormControl>

                    </div>

                    <MyButton buttonText='DALEJ' onClick={nextStep} />
                </Grid>
            </Grid>
        </Container>
    )
}