import { Container, Grid, TextField } from "@mui/material";
import React from "react";
import { MyButton } from "../../../common/MyButton";
import '../../radioStep.scss';

export const EleventhStep = () => {

    return (
        <Container className='radioStep' sx={{ mb: '50px', minHeight: '500px' }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{ lineHeight: '1.5' }}>Podaj adres domu który chcesz kupić</h2>
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            label="Adres"
                            type='text'
                            sx={{ mt: '10px' }}
                            variant="standard"
                        />
                    </div>

                    <MyButton buttonText='DALEJ' />
                </Grid>
            </Grid>
        </Container>
    )
}