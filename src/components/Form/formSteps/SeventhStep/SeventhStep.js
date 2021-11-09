import React from "react";
import {Container, Grid} from "@mui/material";
import {MyButton} from "../../../common/MyButton";

export const SeventhStep = () => {
    return (
        <Container sx={{mb: '50px', minHeight: '500px'}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</h2>
                    </div>

                    <div>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <MyButton buttonText='ZACZNIJ'/>
                </Grid>
            </Grid>
        </Container>
    )
}