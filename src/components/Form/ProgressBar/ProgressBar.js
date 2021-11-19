import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { Box, LinearProgress, Typography, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import './progressBar.scss'
import { StepsContext } from '../StepsState'

export const ProgressBar = ({ progress, resetForm }) => {

    const { steps } = useContext(StepsContext)
    const [progressDetails, setProgressDetails] = useState(false)

    return (
        <>
            <div className='progressBarDesktop'>
                <span className='progressBarTitle'>Twój postęp</span>

                <div className='progressBarProgress'>
                    <LinearProgressWithLabel value={progress} />
                </div>

                <ProgressStep stepName='Kredyt' border completed='true' />
                <ProgressStep stepName='Nieruchomość' border completed={`${steps.eleventhStep ? 'true' : ''}`} />
                <ProgressStep stepName='O Tobie' border completed={`${steps.thirteenthStep ? 'true' : ''}`} />
                <ProgressStep stepName='Dochody' border completed={`${steps.fourteenthStep ? 'true' : ''}`} />
                <ProgressStep stepName='Wydatki' completed={`${steps.sixteenthStep ? 'true' : ''}`} />

                <div className='d-flex justify-content-center'>
                    <Button onClick={resetForm} variant="contained" size='medium' color='inherit'
                        sx={{ color: '#314897', backgroundColor: '#ECEFF8', textTransform: 'uppercase' }}>zacznij od nowa</Button>
                </div>
            </div>
            <div className='progressBarMobile'>
                <div className='w-100 pe--10'>
                    <LinearProgressWithLabel value={progress} />
                </div>

                <div>
                    <Button onClick={() => setProgressDetails(true)} variant="contained" size='medium' color='inherit'
                        sx={{ color: '#314897', backgroundColor: '#ECEFF8' }}>Rozwij</Button>
                </div>

                <div style={{ display: `${progressDetails ? 'block' : 'none'}` }} className='showDetails'>

                    <div className='d-flex justify-content-between'>
                        <span className='progressBarTitle'>Twój postęp</span>

                        <Button onClick={() => setProgressDetails(false)} variant="contained" size='medium' color='inherit'
                            sx={{ color: '#314897', backgroundColor: '#ECEFF8' }}>Zwinąć</Button>
                    </div>

                    <div className='progressBarProgress'>
                        <LinearProgressWithLabel value={progress} />
                    </div>

                    <ProgressStep stepName='Kredyt' border completed='true' />
                    <ProgressStep stepName='Nieruchomość' border completed={`${steps.eleventhStep ? 'true' : ''}`} />
                    <ProgressStep stepName='O Tobie' border completed={`${steps.thirteenthStep ? 'true' : ''}`} />
                    <ProgressStep stepName='Dochody' border completed={`${steps.fourteenthStep ? 'true' : ''}`} />
                    <ProgressStep stepName='Wydatki' completed={`${steps.sixteenthStep ? 'true' : ''}`} />

                    <div className='d-flex justify-content-center'>
                        <Button onClick={resetForm} variant="contained" size='medium' color='inherit'
                            sx={{ color: '#314897', backgroundColor: '#ECEFF8', textTransform: 'uppercase' }}>zacznij od nowa</Button>
                    </div>
                </div>
            </div>
        </>

    )
}

const ProgressStep = ({ stepName, border, completed }) => {
    return (
        <div className='progressStep' style={{ borderBottom: `${border ? '2px solid #E4E4E4' : 'none'}` }}>
            <div className={`${completed === 'true' && 'completed'}`}>
                <RadioButtonUncheckedRoundedIcon fontSize='small' className='radioButton' />
                <span className='progressStepName'>{stepName}</span>
            </div>
        </div>
    )
}

const LinearProgressWithLabel = (props) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}