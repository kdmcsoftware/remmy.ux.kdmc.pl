import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import { Button, Checkbox, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import './dashboard.scss';
import { DashboardBlock } from "./DashboardBlock/DashboardBlock";
import { DashboardMenu } from "./DashboardMenu/DashboardMenu";
import { Header } from './Header/Header';
import bankPekao from './img/bankPekao.png';
import bnp from './img/bnp.png';
import ing from './img/ing.png';
import mBank from './img/mBank.png';
import pko from './img/pko.png';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';

export const DashboardNext = () => {

    const [bestOffer, setBestOffer] = useState(0)
    const [checked1, setChecked1] = useState(true)
    const [checked2, setChecked2] = useState(true)
    const [checked3, setChecked3] = useState(false)
    const [showTable, setShowTable] = useState(true)

    useEffect(() => {
        findBestOffer()
    })

    const handleChange1 = (event) => { setChecked1(event.target.checked) }
    const handleChange2 = (event) => { setChecked2(event.target.checked) }
    const handleChange3 = (event) => { setChecked3(event.target.checked) }

    const showTableToggle = () => {
        if (showTable === true) {
            setShowTable(false)
        } else {
            setShowTable(true)
        }
    }

    const banks = [
        { img: ing, installment: '1,135.00 PLN', commission: '0.10 %', rrso: '1.23 %', interestRate: '2.50 %', loanChance: '70 %' },
        { img: pko, installment: '1,024.00 PLN', commission: '0.00 %', rrso: '1.21 %', interestRate: '2.40 %', loanChance: '90 %' },
        { img: bnp, installment: '1,135.00 PLN', commission: '0.10 %', rrso: '1.23 %', interestRate: '2.50 %', loanChance: '70 %' },
        { img: mBank, installment: '1,246.00 PLN', commission: '0.20 %', rrso: '1.25 %', interestRate: '2.70 %', loanChance: '60 %' },
        { img: bankPekao, installment: '1,246.00 PLN', commission: '0.20 %', rrso: '1.25 %', interestRate: '2.70 %', loanChance: '60 %' }
    ]

    const findBestOffer = () => {
        const helpArray = []
        banks.forEach((item) => {
            helpArray.push(item.loanChance.slice(0, -2))
        })
        const max = Math.max(...helpArray)
        setBestOffer(max)
    }

    return (
        <div className='dashboard'>
            <Grid container>
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

                            <Grid item xxs={12} className='mt--15'>
                                <DashboardBlock title='Twoje rozwiązanie'>
                                    <ArrowDropDownCircleRoundedIcon onClick={showTableToggle} fontSize='large' sx={{ color: '#639AE0', position: 'absolute', top: '0', right: '10px' }} />
                                    <div style={{ display: `${showTable ? 'block' : 'none'}` }}>
                                        <TableContainer component={Paper} sx={{ boxShadow: '0' }}>
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow >
                                                        <TableCell className='tableHeadBorder' align="center">Bank</TableCell>
                                                        <TableCell className='tableHeadBorder' align="center">Rata</TableCell>
                                                        <TableCell className='tableHeadBorder' align="center">Prowizja</TableCell>
                                                        <TableCell className='tableHeadBorder' align="center">RRSO</TableCell>
                                                        <TableCell className='tableHeadBorder' align="center">Oprocentowanie</TableCell>
                                                        <TableCell className='tableHeadBorder' align="center">Szansa na kredyt</TableCell>
                                                        <TableCell align="center"></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    {banks.map((item, index) => (
                                                        <TableRow key={item.installment + index + Date.now}>
                                                            <TableCell sx={{ p: '5px', borderLeft: 0, borderRight: '1px solid #E4E4E4', borderBottom: '1px solid #E4E4E4' }} align="center">
                                                                <img alt='icon' style={{ maxHeight: '50px' }} src={item.img} />
                                                            </TableCell>
                                                            <TableCell className='tableBodyBorder' align="center">{item.installment}</TableCell>
                                                            <TableCell className='tableBodyBorder' align="center">{item.commission}</TableCell>
                                                            <TableCell className='tableBodyBorder' align="center">{item.rrso}</TableCell>
                                                            <TableCell className='tableBodyBorder' align="center">{item.interestRate}</TableCell>
                                                            <TableCell className='tableBodyBorder' align="center">
                                                                {bestOffer === +item.loanChance.slice(0, -2) &&
                                                                    <div style={{ marginBottom: '10px', backgroundColor: '#AB1D1D', color: '#FFFFFF', padding: '5px', width: '100%', textTransform: 'uppercase' }}>Najlepsza oferta</div>
                                                                }
                                                                {item.loanChance}
                                                            </TableCell>
                                                            <TableCell sx={{ p: '5px', borderRight: 0 }} align="center">
                                                                <Button variant="contained" size='small'
                                                                    sx={{ color: '#FFFFFF', backgroundColor: '#314897', textTransform: 'uppercase' }}>wybierz</Button>
                                                                <InfoRoundedIcon sx={{ color: '#639AE0', ml: '20px' }} />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        <div className='d-flex justify-content-center pt--5'>
                                            <Button variant="text" size='small'
                                                sx={{ color: '#314897', fontWeight: '600' }}
                                            >
                                                pokaż więcej
                                            </Button>
                                        </div>
                                    </div>
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
                                                        <span style={{ wordBreak: 'break-all', color: '#314897' }}>500,000.00 <p className='m--0 d-flex justify-content-end'>PLN</p></span>
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
                                                        <span style={{ color: '#314897' }}>8,000.00 PLN</span>
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
                                                        <span style={{ color: '#314897' }}>50,000.00 PLN</span>
                                                    </Grid>
                                                </div>

                                            </Grid>

                                            <Grid item xxs={12} lg={6} className='showTopBorder' sx={{ p: '0px 0px 0px 20px' }}>
                                                <div className='showLeftBorder'></div>
                                                <div className='d-flex align-items-center' style={{ padding: '15px 0px' }}>
                                                    <Grid item xxs={11} sx={{ pr: '10px' }}>
                                                        <span>Kwalifikujesz się na “Mieszkanie bez wkładu własnego”</span>
                                                    </Grid>
                                                    <Grid item xxs={1}>
                                                        <Checkbox
                                                            sx={{
                                                                color: '#989898',
                                                                '&.Mui-checked': {
                                                                    color: '#314897',
                                                                },
                                                            }}
                                                            checked={checked1}
                                                            onChange={handleChange1}
                                                            inputProps={{ 'aria-label': 'one' }}
                                                        />
                                                    </Grid>
                                                </div>
                                                <div className='d-flex align-items-center' style={{ padding: '15px 0px' }}>
                                                    <Grid item xxs={11} sx={{ pr: '10px' }}>
                                                        <span>Kwalifikacja na fundusz gwarancyjny</span>
                                                    </Grid>
                                                    <Grid item xxs={1}>
                                                        <Checkbox
                                                            sx={{
                                                                color: '#989898',
                                                                '&.Mui-checked': {
                                                                    color: '#314897',
                                                                },
                                                            }}
                                                            checked={checked2}
                                                            onChange={handleChange2}
                                                            inputProps={{ 'aria-label': 'two' }}
                                                        />
                                                    </Grid>
                                                </div>
                                                <div className='d-flex align-items-center' style={{ padding: '15px 0px 0px 0px' }}>
                                                    <Grid item xxs={11} sx={{ pr: '10px' }}>
                                                        <span>Ubezpieczenie wkładu własnego: </span>
                                                    </Grid>
                                                    <Grid item xxs={1}>
                                                        <Checkbox
                                                            sx={{
                                                                color: '#989898',
                                                                '&.Mui-checked': {
                                                                    color: '#314897',
                                                                },
                                                            }}
                                                            checked={checked3}
                                                            onChange={handleChange3}
                                                            inputProps={{ 'aria-label': 'three' }}
                                                        />
                                                    </Grid>
                                                </div>
                                                <div style={{ padding: '0px 0px' }}>
                                                    <Grid item xxs={12} >
                                                        <span style={{ color: '#989898' }}>59.21 PLN</span>
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
                                            <span style={{ fontSize: '18px', color: '#314897', fontWeight: '600' }}>3,458.00 PLN</span>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} className='d-flex justify-content-center' sx={{ pt: '15px' }}>
                                        <Grid item xxs={12} xl={7} className='text-center'>
                                            <span style={{ fontSize: '18px', color: '#639AE0', fontWeight: '500' }}>Miesięczne koszty</span>
                                        </Grid>
                                        <Grid item xxs={12} xl={5} className='text-center'>
                                            <span style={{ fontSize: '18px', color: '#314897', fontWeight: '600' }}>1,258.00 PLN</span>
                                        </Grid>
                                    </Grid>
                                </DashboardBlock>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid >
        </div >
    )
}