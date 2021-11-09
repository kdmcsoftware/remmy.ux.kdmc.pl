import React from "react";
import {Button} from "@mui/material";

export const MyButton = ({buttonText}) => {
    return (
        <div>
            <Button sx={{mt: '40px'}} variant='contained' size='large' color='primary'>{buttonText}</Button>
        </div>
    )
}