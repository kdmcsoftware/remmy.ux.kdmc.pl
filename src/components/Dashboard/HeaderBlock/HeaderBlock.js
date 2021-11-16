import { Button, Grid } from "@mui/material";
import React from 'react';

export const HeaderBlock = ({ title, description, buttonName, children }) => {
    return (
        <div>
            <Grid container className='d-flex justify-content-center align-items-center h-100'>
                <Grid item xs={12}>
                    <span style={{ fontWeight: '600', textTransform: 'uppercase', color: '#314897' }}>{title}</span>
                </Grid>
                <Grid item xs={12}>
                    <span style={{ color: '#639AE0' }} >{description}</span>
                </Grid>
                <Grid item xxs={12} sm={9} xxl={8}>
                    {children}
                </Grid>
                <Grid item sm={3} xxl={4}>
                    <Button variant="contained" size='large'
                        sx={{ mt: '20px', color: '#FFFFFF', backgroundColor: '#314897' }}>{buttonName}</Button>
                </Grid>
            </Grid>
        </div>
    )
}