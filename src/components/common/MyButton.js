import React from "react";
import { Button } from "@mui/material";

export const MyButton = ({ buttonText, onClick }) => {
    return (
        <div>
            <Button onClick={onClick} sx={{
                mt: '40px', color: '#FFFFFF', backgroundColor: '#425DBA', mb: '100px'
            }}
                variant='contained' size='large'>
                {buttonText}
            </Button>
        </div>
    )
}