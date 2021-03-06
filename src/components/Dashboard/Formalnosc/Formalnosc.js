import React from 'react';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import './formalnosc.scss'

export const Formalnosc = ({ title, helpText, isActive }) => {
    return (
        <div className='formalnosc' style={{ backgroundColor: `${isActive ? '#5586D3' : 'white'}`, color: `${isActive ? 'white' : ''}` }}>
            <span className='formalnoscTitle'>{title}</span>
            <div className='helpIcon'>
                <div style={{ color: `${isActive ? 'white' : '#639AE0'}` }}>
                    <HelpCenterIcon />
                </div>

                <div className='helpText'>
                    <span>{helpText}</span>
                </div>
            </div>
        </div>
    )
}