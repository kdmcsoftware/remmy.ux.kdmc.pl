import React from "react";
import { Box, CircularProgress, circularProgressClasses } from "@mui/material";

export const Progress = (props) => {
    return (
        <div style={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                sx={{ color: 'rgb(49, 72, 151, 0.3)' }}
                size={props.size}
                thickness={4}
                {...props}
                value={100}
            />

            <CircularProgress
                variant="determinate"
                sx={{
                    color: '#314897',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                size={props.size}
                thickness={4}
                {...props}
                value={props.value}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ textAlign: 'center', lineHeight: '15px', color: '#314897' }}>
                    <span style={{ fontWeight: '600', fontSize: '20px' }}>{props.value}%</span><br />
                </div>
            </Box>
        </div>
    );
}