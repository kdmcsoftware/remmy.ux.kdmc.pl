import React from "react";
import {Container, Grid, TextField} from "@mui/material";
import {MyButton} from "../../../common/MyButton";
import './fourthStep.scss'

export const FourthStep = () => {

    return (
        <Container className='fourthStep' sx={{mb: '50px', minHeight: '500px'}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</h2>
                    </div>

                    <div className='textInputs'>
                        <TextField fullWidth sx={{mt: '10px'}} type='text' label="label" variant="standard" />
                        <TextField fullWidth sx={{mt: '10px'}} type='text' label="label" variant="standard" />
                        <TextField fullWidth sx={{mt: '10px'}} type='text' label="label" variant="standard" />
                    </div>

                    <MyButton buttonText='DALEJ'/>
                </Grid>
            </Grid>
        </Container>
    )
}