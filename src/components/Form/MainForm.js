import { Container } from "@mui/material";
import React, { useContext } from "react";
import { EighthStep } from "./formSteps/EighthStep/EighthStep";
import { EleventhStep } from "./formSteps/EleventhStep/EleventhStep";
import { FifteenthStep } from "./formSteps/FifteenthStep/FifteenthStep";
import { FifthStep } from "./formSteps/FifthStep/FifthStep";
import { FirstStep } from "./formSteps/FirstStep/FirstStep";
import { FourteenthStep } from "./formSteps/FourteenthStep/FourteenthStep";
import { FourthStep } from "./formSteps/FourthStep/FourthStep";
import { NinthStep } from "./formSteps/NinthStep/NinthStep";
import { SecondStep } from "./formSteps/SecondStep/SecondStep";
import { SeventeenthStep } from "./formSteps/SeventeenthStep/SeventeenthStep";
import { SeventhStep } from "./formSteps/SeventhStep/SeventhStep";
import { SixteenthStep } from "./formSteps/SixteenthStep/SixteenthStep";
import { SixthStep } from "./formSteps/SixthStep/SixthStep";
import { StartStep } from "./formSteps/StartStep/StartStep";
import { TenthStep } from "./formSteps/TenthStep/TenthStep";
import { ThirdStep } from "./formSteps/ThirdStep/ThirdStep";
import { ThirteenthStep } from "./formSteps/ThirteenthStep/ThirteenthStep";
import { TwelfthStep } from "./formSteps/TwelfthStep/TwelfthStep";
import { Header } from "./Header/Header";
import { StepsContext } from './StepsState';

export const MainForm = () => {

    const { steps } = useContext(StepsContext)

    return (
        <div>
            <Header />
            <Container>
                <StartStep />
                {steps.firstStep && <FirstStep />}
                {steps.secondStep && <SecondStep />}
                {steps.thirdStep && <ThirdStep />}
                {steps.fourthStep && <FourthStep />}
                {steps.fifthStep && <FifthStep />}
                {steps.sixthStep && <SixthStep />}
                {steps.seventhStep && <SeventhStep />}
                {steps.eighthStep && <EighthStep />}
                {steps.ninthStep && <NinthStep />}
                {steps.tenthStep && <TenthStep />}
                {steps.eleventhStep && <EleventhStep />}
                {steps.twelfthStep && <TwelfthStep />}
                {steps.thirteenthStep && <ThirteenthStep />}
                {steps.fourteenthStep && <FourteenthStep />}
                {steps.fifteenthStep && <FifteenthStep />}
                {steps.sixteenthStep && <SixteenthStep />}
                {steps.seventeenthStep && <SeventeenthStep />}
            </Container>
        </div>

    )
}