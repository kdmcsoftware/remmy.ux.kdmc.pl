import React from "react";
import { Button, Grid } from "@mui/material";

export const HelpBlock = ({ icon, buttonName, children }) => {
    return (
        <div style={{
            borderBottom: '1px solid #E4E4E4',
            padding: '5px'
        }}>
            <Grid container className='d-flex justify-content-center'>
                <Grid item sm={1} className='d-flex justify-content-center align-items-center'>
                    <img src={icon} />
                </Grid>

                <Grid item sm={9} className='d-flex justify-content-center align-items-center' sx={{
                    textAlign: 'center',
                    p: '10px'
                }}>
                    {children}
                </Grid>

                <Grid item sm={2} className='d-flex justify-content-center align-items-center'>
                    <Button variant="outlined" size='small'
                        sx={{ color: '#314897' }}>{buttonName ? buttonName : 'Więcej'}</Button>
                </Grid>
            </Grid>
        </div>
    )
}