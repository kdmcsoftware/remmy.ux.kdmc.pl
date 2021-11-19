import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { Box, LinearProgress, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import './progressBar.scss'
import { StepsContext } from '../StepsState'

export const ProgressBar = ({ progress, resetForm }) => {

    const { steps } = useContext(StepsContext)

    return (
        <div className='progressBar'>
            <span className='progressBarTitle'>Twój postęp</span>

            <div className='progressBarProgress'>
                <LinearProgressWithLabel value={progress} />
            </div>

            <ProgressStep stepName='Kredyt' border completed={`${steps.eleventhStep ? 'true' : ''}`} />
            <ProgressStep stepName='Nieruchomość' border completed={`${steps.thirteenthStep ? 'true' : ''}`} />
            <ProgressStep stepName='O Tobie' border completed={`${steps.fourteenthStep ? 'true' : ''}`} />
            <ProgressStep stepName='Dochody' border completed={`${steps.sixteenthStep ? 'true' : ''}`} />
            <ProgressStep stepName='Wydatki' completed={`${steps.seventeenthStep ? 'true' : ''}`} />

            <div>
                <Button onClick={resetForm} variant="contained" size='medium' color='inherit'
                    sx={{ color: '#314897', backgroundColor: '#ECEFF8', textTransform: 'uppercase' }}>zacznij od nowa</Button>
            </div>
        </div>
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