import { Container, Grid, TextField, InputAdornment } from "@mui/material";
import React from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss';

export const EighthStep = () => {

    return (
        <Container className='radioStep' sx={{ mb: '50px', minHeight: '500px' }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Jaka jest wartość nieruchomości, na którą chcesz przeznaczyć kredyt?</h2>
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            label="Wpisz wartość"
                            type='number'
                            sx={{ mt: '10px' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">PLN</InputAdornment>,
                            }}
                            variant="standard"
                        />
                    </div>

                    <MyButton buttonText='DALEJ' />
                </Grid>
            </Grid>
        </Container>
    )
}