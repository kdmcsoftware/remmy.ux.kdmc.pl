import React from "react"
import './dashboardBlock.scss'

export const DashboardBlock = ({ title, children }) => {
    return (
        <div className='dashboardBlock'>
            <div className='blockTitle'>{title}</div>
            <div className='blockContent'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}