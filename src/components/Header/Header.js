import React from "react";
import {AppBar, Toolbar} from "@mui/material";
import logo from './logo.png'

export const Header = () => {
    return (
        <AppBar sx={{backgroundColor: '#F9F9F9'}}>
            <Toolbar>
                    <img alt='logo' src={logo}/>
            </Toolbar>
        </AppBar>
    )
}