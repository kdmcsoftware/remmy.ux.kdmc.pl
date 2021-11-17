import { Button, Grid, Rating } from "@mui/material";
import React from "react";
import { CustomStepper } from './CustomStepper/CustomStepper';
import './dashboard.scss';
import { DashboardBlock } from "./DashboardBlock/DashboardBlock";
import { DashboardMenu } from "./DashboardMenu/DashboardMenu";
import { Formalnosc } from './Formalnosc/Formalnosc';
import { Header } from './Header/Header';
import { HeaderBlock } from './HeaderBlock/HeaderBlock';
import { HelpBlock } from "./HelpBlock";
import docIcon from './img/docIcon.png';
import flaga from './img/flaga.png';
import homeIcon from './img/homeIcon.png';
import line from './img/line.png';
import pko from './img/pko.png';
import pzu from './img/pzu.png';
import userIcon from './img/userIcon.png';

export const Dashboard = () => {

    return (
        <div className='dashboard'>
            <Grid container className='h-100'>
                <Grid item xxs={12} md='auto' xl={2}>
                    <div className='h-100'>
                        <DashboardMenu />
                    </div>
                </Grid>

                <Grid item xxs={12} md={true} xl={10}>
                    <div>
                        <Grid container className='d-flex justify-content-center'>
                            <Grid item xxs={12}>
                                <Header />
                            </Grid>
                            <Grid item xxs={12} sx={{ backgroundColor: '#FFFFFF' }}>
                                <Grid container className='d-flex'>

                                    <Grid item xxs={12} md={12} lg={6} xl={6} xxl={6} sx={{ padding: '10px 20px' }}>
                                        <HeaderBlock
                                            title='Twoja sytuacja'
                                            description='Na podstawie informacji których nam udostępniłeś:'
                                            buttonName='Zobacz produkty'
                                        >
                                            <div className='mt--10'>
                                                <Grid container spacing={1} className='d-flex'>
                                                    <Grid item xxs={3} sm={2} lg={true} xl={2} className='d-flex'>
                                                        <div className='d-flex align-items-center'>
                                                            <img alt='home icon' style={{ width: '35px' }} src={homeIcon} />
                                                        </div>
                                                    </Grid>
                                                    <Grid item xxs={4} sm={2} md={3} lg={true} xl={2} className='d-flex'>
                                                        <div className='d-flex align-items-center'>
                                                            <span style={{ wordBreak: 'break-all' }}>700,000 <p className='m--0'>PLN</p></span>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xxs={12} sm={8} md={7} lg={8} className='d-flex pe--15'>
                                                        <div className='d-flex align-items-center'>
                                                            <span>Maksymalna cena nieruchomości</span>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>

                                            <div className='mt--10'>
                                                <Grid container spacing={1} className='d-flex'>
                                                    <Grid item xxs={3} sm={2} lg={true} xl={2} className='d-flex'>
                                                        <div className='d-flex align-items-center'>
                                                            <img alt='document icon' style={{ height: '35px' }} src={docIcon} />
                                                        </div>
                                                    </Grid>
                                                    <Grid item xxs={4} sm={2} md={3} lg={true} xl={2} className='d-flex'>
                                                        <div className='d-flex align-items-center'>
                                                            <span>12</span>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xxs={12} sm={8} md={7} lg={8} className='d-flex pe--15'>
                                                        <div className='d-flex align-items-center'>
                                                            <span>Na rynku jest 12 produktów dostępnych dla Ciebie</span>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </HeaderBlock>
                                    </Grid>

                                    <Grid item xxs={12} md={12} lg={6} xl={6} xxl={6} className='showTopBorder'>
                                        <div className='showLeftBorder'></div>
                                        <HeaderBlock
                                            title='Twój doradca'
                                            description='W każdej chwili możesz skonsultować się ze swoim doradcą finansowym'
                                            buttonName='Umów się na rozmowę'
                                        >
                                            <div className='mt--10'>
                                                <Grid container className='d-flex justify-content-center'>
                                                    <Grid item xxs={4} sm={3} md='auto' lg={4} className='mb--10'>
                                                        <div className='d-flex align-items-start'>
                                                            <div className='d-flex flex-column align-items-center'>
                                                                <img alt='user icon' className='h--60' src={userIcon} />
                                                                <Rating name="read-only" value={5} readOnly
                                                                    size='small'
                                                                    sx={{
                                                                        mt: '5px',
                                                                        mb: '5px',
                                                                        color: '#639AE0'
                                                                    }} />
                                                                <span className='text-center' style={{ fontSize: '10px', color: '#989898' }}>(na podstawie 5 opinii)</span>
                                                            </div>

                                                        </div>
                                                    </Grid>
                                                    <Grid item xxs={8} sm={9} md={true} lg={8} className='pe--15'>
                                                        <div>
                                                            <span style={{ fontWeight: '600', color: '#314897', margin: '0px 0px 10px 0px' }}>Jan Kowaski</span>
                                                        </div>
                                                        <div>
                                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </HeaderBlock>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xxs={12} md={6} xl={6} xxl={6} className='mt--15'>
                                <DashboardBlock title='Formalności'>
                                    <Grid container className='mt--15'>
                                        <Grid item xxs={12} className='text-center'>
                                            <Formalnosc title='Zdolność kredytowa' isActive={true} helpText='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
                                            <div className='d-flex justify-content-center'>
                                                <div className='d-flex'>
                                                    <img alt='arrow' src={line} />
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xxs={12} className='text-center'>
                                            <Formalnosc title='Umowa kredytowa' helpText='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
                                            <div className='d-flex justify-content-center'>
                                                <div className='d-flex'>
                                                    <img alt='arrow' src={line} />
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xxs={12} className='text-center'>
                                            <Formalnosc title='Ubezpieczenie' helpText='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
                                            <div className='d-flex justify-content-center'>
                                                <div className='d-flex justify-content-around'
                                                    style={{ width: '60%' }}>
                                                    <img alt='arrow' src={line} />
                                                    <img alt='arrow' src={line} />
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xxs={12}>
                                            <Grid container className='d-flex justify-content-between align-items-center'>
                                                <Grid item xxs={12}>
                                                    <Grid container spacing={3}>
                                                        <Grid item xxs={6}>
                                                            <Formalnosc title='Wkład własny' helpText='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
                                                        </Grid>
                                                        <Grid item xxs={6}>
                                                            <Formalnosc title='Księga wieczysta' helpText='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                                <Grid item xxs={12} className='d-flex justify-content-center align-items-center'>
                                                    <div className='d-flex justify-content-around'
                                                        style={{ width: '60%' }}>
                                                        <img alt='arrow' src={line} />
                                                        <img alt='arrow' src={line} />
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xxs={12} className='text-center'>
                                            <Formalnosc title='Formalności po uzyskaniu hipoteki' helpText='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
                                        </Grid>
                                    </Grid>
                                </DashboardBlock>
                            </Grid>

                            <Grid item xxs={12} md={6} lg={6} xl={6} xxl={6} className='mt--15'>
                                <DashboardBlock title='Twoje rozwiązanie'>
                                    <HelpBlock icon={pko} showBorder={true}>
                                        <Grid container spacing={1} className='d-flex'>
                                            <Grid item xxs={12} xs={2} sm={2} md={5} lg={2} xl={2} xxl={3} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                <span style={{ color: '#639AE0', fontWeight: '600' }}>Rata</span>
                                                <span>1,024.00</span>
                                            </Grid>
                                            <Grid item xxs={12} xs={true} sm={3} md={7} lg={3} xl={3} xxl={3} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                <span style={{ color: '#639AE0', fontWeight: '600' }}>Prowizja</span>
                                                <span>0.00 %</span>
                                            </Grid>
                                            <Grid item xxs={12} xs={true} sm={3} md={5} lg={2} xl={3} xxl={3} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                <span style={{ color: '#639AE0', fontWeight: '600' }}>RRSO</span>
                                                <span>1.21 %</span>
                                            </Grid>
                                            <Grid item xxs={12} xs={5} sm={4} md={7} lg={5} xl={4} xxl={3} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                <span style={{ color: '#639AE0', fontWeight: '600' }}>Oprocentowanie</span>
                                                <span>2.40 %</span>
                                            </Grid>
                                        </Grid>
                                    </HelpBlock>
                                    <HelpBlock icon={pzu} showBorder={true}>
                                        <Grid container spacing={1} sx={{ display: 'flex' }}>
                                            <Grid item xxs={12} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                <span style={{ color: '#639AE0', fontWeight: '600' }}>Ubezpieczenie wkładu własnego</span>
                                            </Grid>
                                            <Grid item xxs={12} sm={6} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                <span>50.24 PLN miesięcznie</span>
                                            </Grid>
                                            <Grid item xxs={12} sm={6} className='d-flex flex-column justify-content-center align-items-center text-center'>
                                                <span>20,000.00 PLN suma ubezpieczenia</span>
                                            </Grid>
                                        </Grid>
                                    </HelpBlock>
                                    <HelpBlock icon={flaga}>
                                        <span style={{ color: '#639AE0', fontWeight: '600', padding: '0px 5px' }}>Kwalifikujesz się na “Mieszkanie bez wkładu własnego”</span>
                                    </HelpBlock>
                                    <div className='mt--15'></div>
                                    <DashboardBlock title='Sprawdź zdolność kredytową'>
                                        <Grid container spacing={1} className='d-flex align-items-center'>
                                            <Grid item xxs={12} sm={8}>
                                                <CustomStepper />
                                            </Grid>
                                            <Grid item xxs={4}>
                                                <Button variant="outlined" size='small'
                                                    sx={{ color: '#314897' }}>sprawdź zdolność kredytową</Button>
                                            </Grid>
                                        </Grid>
                                    </DashboardBlock>
                                </DashboardBlock>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid >
        </div >
    )
}