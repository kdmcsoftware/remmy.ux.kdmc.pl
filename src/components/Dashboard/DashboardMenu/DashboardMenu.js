import React from "react";
import { Grid } from "@mui/material";
import logo from "../img/logo.png";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import './dashboardMenu.scss'

export const DashboardMenu = () => {
    return (
        <>
            <Grid item md={12} className='desktopMenu'>
                <div className='largeMenu'>
                    <Grid item md={12} className='d-flex justify-content-center'>
                        <img alt="logo" className='mt--30' src={logo} />
                    </Grid>

                    <Grid item md={12} className='d-flex mt--30 pb--50'>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10}>
                            <div className='menuItem activeItem'>
                                <PersonRoundedIcon className='mIcon' />
                                <span>Profil</span>
                            </div>
                            <div className='menuItem'>
                                <Inventory2RoundedIcon className='mIcon' />
                                <span>Produkty</span>
                            </div>
                            <div className='menuItem'>
                                <AppsRoundedIcon className='mIcon' />
                                <span>Aplikacje</span>
                            </div>
                            <div className='menuItem'>
                                <SupportAgentRoundedIcon className='mIcon' />
                                <span>Doradca</span>
                            </div>
                            <div className='menuItem'>
                                <DescriptionRoundedIcon className='mIcon' />
                                <span>Documenty</span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='smallMenu'>
                    <Grid item md={12} className='d-flex justify-content-center'>
                        <img alt="logo" className='mt--30 w--40' src={logo} />
                    </Grid>

                    <Grid item md={12} className='d-flex justify-content-center mt--30 pb--50'>
                        <Grid item xxs={6}>
                            <div className='menuItem activeItem'>
                                <PersonRoundedIcon />
                            </div>
                            <div className='menuItem'>
                                <Inventory2RoundedIcon />
                            </div>
                            <div className='menuItem'>
                                <AppsRoundedIcon />
                            </div>
                            <div className='menuItem'>
                                <SupportAgentRoundedIcon />
                            </div>
                            <div className='menuItem'>
                                <DescriptionRoundedIcon />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

            <nav className="navbar navbar-expand-lg navbar-light mobileMenu" >
                <div className="container-fluid">
                    <div className='d-flex justify-content-center'>
                        <img alt='logo' className='h--50' src={logo} />
                    </div>

                    <button style={{ backgroundColor: 'white' }} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className='menuItem activeItem'>
                                    <PersonRoundedIcon className='mIcon' />
                                    <span>Profil</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='menuItem'>
                                    <Inventory2RoundedIcon className='mIcon' />
                                    <span>Produkty</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='menuItem'>
                                    <AppsRoundedIcon className='mIcon' />
                                    <span>Aplikacje</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='menuItem'>
                                    <SupportAgentRoundedIcon className='mIcon' />
                                    <span>Doradca</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='menuItem'>
                                    <DescriptionRoundedIcon className='mIcon' />
                                    <span>Documenty</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}