import React from "react";
import { StartStep } from "./formSteps/StartStep/StartStep";
import { Container } from "@mui/material";
import { FirstStep } from "./formSteps/FirstStep/FirstStep";
import { SecondStep } from "./formSteps/SecondStep/SecondStep";
import { ThirdStep } from "./formSteps/ThirdStep/ThirdStep";
import { FourthStep } from "./formSteps/FourthStep/FourthStep";
import { FifthStep } from "./formSteps/FifthStep/FifthStep";
import { SixthStep } from "./formSteps/SixthStep/SixthStep";
import { SeventhStep } from "./formSteps/SeventhStep/SeventhStep";
import { EighthStep } from "./formSteps/EighthStep/EighthStep";
import { NinthStep } from "./formSteps/NinthStep/NinthStep";
import { TenthStep } from "./formSteps/TenthStep/TenthStep";
import { EleventhStep } from "./formSteps/EleventhStep/EleventhStep";
import { TwelfthStep } from "./formSteps/TwelfthStep/TwelfthStep";
import { ThirteenthStep } from "./formSteps/ThirteenthStep/ThirteenthStep";
import { FourteenthStep } from "./formSteps/FourteenthStep/FourteenthStep";
import { FifteenthStep } from "./formSteps/FifteenthStep/FifteenthStep";
import { SixteenthStep } from "./formSteps/SixteenthStep/SixteenthStep";
import { SeventeenthStep } from "./formSteps/SeventeenthStep/SeventeenthStep";
import { Header } from "../Header/Header";

export const MainForm = () => {
    return (
        <div>
            <Header />
            <Container sx={{ mt: '100px' }}>
                <StartStep />
                <FirstStep />
                <SecondStep />
                <ThirdStep />
                <FourthStep />
                <FifthStep />
                <SixthStep />
                <SeventhStep />
                <EighthStep />
                <NinthStep />
                <TenthStep />
                <EleventhStep />
                <TwelfthStep />
                <ThirteenthStep />
                <FourteenthStep />
                <FifteenthStep />
                <SixteenthStep />
                <SeventeenthStep />
            </Container>
        </div>

    )
}