import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import logo from './logo.png'
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <AppBar sx={{ backgroundColor: '#F9F9F9' }}>
            <Toolbar className='d-flex justify-content-between'>
                <img alt='logo' src={logo} />
                <div>
                    <Link className='pe--20' to='/dashboard'>Dashboard</Link>
                    <Link to='/dashboardNext'>DashboardNext</Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}