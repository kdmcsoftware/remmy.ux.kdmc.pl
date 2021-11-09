import React, {useState} from "react";
import {Box, Container, Grid, TextField} from "@mui/material";
import {MyButton} from "../../../common/MyButton";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export const SixthStep = () => {

    const [value, setValue] = useState(new Date());

    return (
        <Container sx={{mb: '50px', minHeight: '500px'}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</h2>
                    </div>

                    <div>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    label="Week picker"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                    inputFormat="'Week of' MMM d"
                                />
                            </LocalizationProvider>
                        </Box>
                    </div>

                    <MyButton buttonText='DALEJ'/>
                </Grid>
            </Grid>
        </Container>
    )
}