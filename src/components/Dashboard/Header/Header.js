import { Grid } from "@mui/material";
import React from 'react';
import profileImg from '../img/profileImg.png';
import { Progress } from '../Progress/Progress'
import './header.scss'

export const Header = () => {
    return (
        <Grid container className='d-flex align-items-center header'>
            <Grid item className='mt--5' xxs={12} xs={3} sm={2} md={2} lg={1} >
                <div>
                    <img alt="profileImg" style={{ borderRadius: "50px" }} src={profileImg} />
                </div>
            </Grid>
            <Grid item className='mt--5 ' xxs={12} xs={9} md={6} lg={7}>
                <div className=' me-auto'>
                    <span className='headerTitle'>Witam Tomek!</span><br />
                    <span className='headerDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
            </Grid>
            <Grid item className='mt--5' xxs={12} md={4}>
                <div className="progressInHeader">
                    <span className='me--15'>Gotowność do aplikowania</span>
                    <Progress size={70} value={70} />
                </div>
            </Grid>
        </Grid>
    )
}