import React from "react";
import {StartStep} from "./formSteps/StartStep/StartStep";
import {Container} from "@mui/material";
import {FirstStep} from "./formSteps/FirstStep/FirstStep";
import {SecondStep} from "./formSteps/SecondStep/SecondStep";
import {ThirdStep} from "./formSteps/ThirdStep/ThirdStep";
import {FourthStep} from "./formSteps/FourthStep/FourthStep";
import {FifthStep} from "./formSteps/FifthStep/FifthStep";
import {SixthStep} from "./formSteps/SixthStep/SixthStep";
import {SeventhStep} from "./formSteps/SeventhStep/SeventhStep";

export const MainForm = () => {
    return (
        <Container sx={{mt:'100px'}}>
            <StartStep/>
            <FirstStep/>
            <SecondStep/>
            <ThirdStep/>
            <FourthStep/>
            <FifthStep/>
            <SixthStep/>
            <SeventhStep/>
        </Container>
    )
}