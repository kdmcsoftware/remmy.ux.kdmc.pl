import { Button, createTheme, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import './dashboard.scss';
import { DashboardBlock } from "./DashboardBlock/DashboardBlock";
import { DashboardMenu } from "./DashboardMenu/DashboardMenu";
import { Header } from './Header/Header';
import { HelpBlock } from "./HelpBlock";
import bankPekao from './img/bankPekao.png';
import bnp from './img/bnp.png';
import ing from './img/ing.png';
import mBank from './img/mBank.png';
import pko from './img/pko.png';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const theme = createTheme({
    breakpoints: {
        values: {
            xxs: 0,
            xs: 400,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1500,
            xxl: 1800,
        },
    },
});

export const DashboardNext = () => {

    return (
        <ThemeProvider theme={theme}>
            <div className='dashboard'>
                <Grid container className='h-100'>
                    <Grid item xxs={12} md={0.7} lg={0.5} xl={2}>
                        <div className='h-100'>
                            <DashboardMenu />
                        </div>
                    </Grid>

                    <Grid item xxs={12} md={11.3} lg={11.5} xl={10}>
                        <div>
                            <Grid container className='d-flex justify-content-center'>
                                <Grid item xxs={12}>
                                    <Header />
                                </Grid>

                                <Grid item xs={12} className='mt--15'>
                                    <DashboardBlock title='Twoje rozwiązanie'>
                                        <HelpBlock icon={pko} showBorder={true}>
                                            <Grid container spacing={1} className='d-flex'>
                                                <Grid item xxs={12} xs={2} sm={2} md={5} lg={2} xl={2} xxl={3} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                    <span style={{ color: '#639AE0', fontWeight: '600' }}>Rata</span>
                                                    <span>1024</span>
                                                </Grid>
                                                <Grid item xxs={12} xs={2.5} sm={3} md={7} lg={3} xl={3} xxl={3} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                    <span style={{ color: '#639AE0', fontWeight: '600' }}>Prowizja</span>
                                                    <span>0 %</span>
                                                </Grid>
                                                <Grid item xxs={12} xs={2.5} sm={3} md={5} lg={2} xl={3} xxl={3} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                    <span style={{ color: '#639AE0', fontWeight: '600' }}>RRSO</span>
                                                    <span>1,21 %</span>
                                                </Grid>
                                                <Grid item xxs={12} xs={5} sm={4} md={7} lg={5} xl={4} xxl={3} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                    <span style={{ color: '#639AE0', fontWeight: '600' }}>Oprocentowanie</span>
                                                    <span>2,4 %</span>
                                                </Grid>
                                            </Grid>
                                        </HelpBlock>

                                        <HelpBlock icon={pko} showBorder={true}></HelpBlock>
                                        <HelpBlock icon={pko} showBorder={true}></HelpBlock>

                                        <Button variant="text" size='small'
                                            sx={{ fontFamily: 'Montserrat', color: '#314897', fontWeight: '600' }}>pokaż więcej</Button>
                                    </DashboardBlock>
                                </Grid>

                                <Grid item xxs={12} sm={7} md={8} className='mt--15'>
                                    <DashboardBlock title='Twoje odpowiedzi'>
                                        <Grid container>
                                            <Grid container className='d-flex justify-content-between'>
                                                <Grid item xxs={12} className='d-flex justify-content-end'>
                                                    <EditRoundedIcon sx={{ color: '#639AE0' }} />
                                                </Grid>
                                                <Grid item xxs={12} lg={6} sx={{ pr: '20px' }}>
                                                    <div className='d-flex' style={{ padding: '15px 0px' }}>
                                                        <Grid item xxs={1}>
                                                            <HomeWorkRoundedIcon sx={{ color: '#314897' }} />
                                                        </Grid>
                                                        <Grid item xxs={7} xs={6} sx={{ pl: '10px' }}>
                                                            <span>Wartość nieruchomości</span>
                                                        </Grid>
                                                        <Grid item xxs={4} xs={5} className='d-flex justify-content-end'>
                                                            {/* <span style={{ color: '#314897' }}>500000.000000000 PLN</span> */}
                                                            <span style={{ wordBreak: 'break-all', color: '#314897' }}>500000.000 <p className='m--0 d-flex justify-content-end'>PLN</p></span>
                                                        </Grid>
                                                    </div>
                                                    <div className='d-flex' style={{ padding: '15px 0px' }}>
                                                        <Grid item xxs={1}>
                                                            <AccessTimeRoundedIcon sx={{ color: '#314897' }} />
                                                        </Grid>
                                                        <Grid item xxs={6} sx={{ pl: '10px' }}>
                                                            <span>Na jaki okres kredyt </span>
                                                        </Grid>
                                                        <Grid item xxs={5} className='d-flex justify-content-end'>
                                                            <span style={{ color: '#314897' }}>30 LAT</span>
                                                        </Grid>
                                                    </div>
                                                    <div className='d-flex' style={{ padding: '15px 0px' }}>
                                                        <Grid item xxs={1}>
                                                            <EuroRoundedIcon sx={{ color: '#314897' }} />
                                                        </Grid>
                                                        <Grid item xxs={6} sx={{ pl: '10px' }}>
                                                            <span>Twoje zarobki</span>
                                                        </Grid>
                                                        <Grid item xxs={5} className='d-flex justify-content-end'>
                                                            <span style={{ color: '#314897' }}>8000 PLN</span>
                                                        </Grid>
                                                    </div>
                                                    <div className='d-flex' style={{ padding: '15px 0px' }}>
                                                        <Grid item xxs={1}>
                                                            <SavingsRoundedIcon sx={{ color: '#314897' }} />
                                                        </Grid>
                                                        <Grid item xxs={6} sx={{ pl: '10px' }}>
                                                            <span>Wkład własny</span>
                                                        </Grid>
                                                        <Grid item xxs={5} className='d-flex justify-content-end'>
                                                            <span style={{ color: '#314897' }}>50000 PLN</span>
                                                        </Grid>
                                                    </div>

                                                </Grid>

                                                <Grid item xxs={12} lg={6} className='showTopBorder' sx={{ p: '0px 0px 0px 20px' }}>
                                                    <div className='showLeftBorder'></div>
                                                    <div className='d-flex' style={{ padding: '15px 0px' }}>
                                                        <Grid item xxs={11} sx={{ pr: '10px' }}>
                                                            <span>Kwalifikujesz się na “Mieszkanie bez wkładu własnego”</span>
                                                        </Grid>
                                                        <Grid item xxs={1} className='d-flex justify-content-end'>
                                                            <CheckRoundedIcon sx={{ color: '#314897' }} />
                                                        </Grid>
                                                    </div>
                                                    <div className='d-flex' style={{ padding: '15px 0px' }}>
                                                        <Grid item xxs={11} sx={{ pr: '10px' }}>
                                                            <span>Kwalifikacja na fundusz gwarancyjny</span>
                                                        </Grid>
                                                        <Grid item xxs={1} className='d-flex justify-content-end'>
                                                            <CheckRoundedIcon sx={{ color: '#314897' }} />
                                                        </Grid>
                                                    </div>
                                                    <div className='d-flex' style={{ padding: '15px 0px 0px 0px' }}>
                                                        <Grid item xxs={11} sx={{ pr: '10px' }}>
                                                            <span>Ubezpieczenie wkładu własnego: </span>
                                                        </Grid>
                                                        <Grid item xxs={1} className='d-flex justify-content-end'>
                                                            <CloseRoundedIcon sx={{ color: '#989898' }} />
                                                        </Grid>
                                                    </div>
                                                    <div style={{ padding: '0px 0px' }}>
                                                        <Grid item xxs={12} >
                                                            <span style={{ color: '#989898' }}>59,21 PLN</span>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </DashboardBlock>
                                </Grid>
                                <Grid item xxs={12} sm={5} md={4} className='mt--15'>
                                    <DashboardBlock title='Podsumowanie'>
                                        <Grid container spacing={1} className='d-flex justify-content-center' sx={{ pb: '15px', borderBottom: '1px solid #E4E4E4' }}>
                                            <Grid item xxs={12} xl={7} className='text-center'>
                                                <span style={{ fontSize: '18px', color: '#639AE0', fontWeight: '500' }}>Początkowe koszty</span>
                                            </Grid>
                                            <Grid item xxs={12} xl={5} className='text-center'>
                                                <span style={{ fontSize: '18px', color: '#314897', fontWeight: '600' }}>3458,00 PLN</span>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={1} className='d-flex justify-content-center' sx={{ pt: '15px' }}>
                                            <Grid item xxs={12} xl={7} className='text-center'>
                                                <span style={{ fontSize: '18px', color: '#639AE0', fontWeight: '500' }}>Miesięczne koszty</span>
                                            </Grid>
                                            <Grid item xxs={12} xl={5} className='text-center'>
                                                <span style={{ fontSize: '18px', color: '#314897', fontWeight: '600' }}>1258,00 PLN</span>
                                            </Grid>
                                        </Grid>
                                    </DashboardBlock>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid >
            </div >
        </ThemeProvider >
    )
}