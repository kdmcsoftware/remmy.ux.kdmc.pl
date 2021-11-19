import { Grid } from "@mui/material";
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
import { ProgressBar } from './ProgressBar/ProgressBar';
import { StepsContext } from './StepsState';

export const MainForm = () => {

    const { steps, setSteps } = useContext(StepsContext)
    const [progress, setProgress] = React.useState(0);

    const countProgress = (step) => {
        const actualProgress = (step / 17) * 100
        setProgress(actualProgress)
    }

    const resetForm = () => {
        setProgress(0)
        setSteps({
            firstStep: false,
            secondStep: false,
            thirdStep: false,
            fourthStep: false,
            fifthStep: false,
            sixthStep: false,
            seventhStep: false,
            eighthStep: false,
            ninthStep: false,
            tenthStep: false,
            eleventhStep: false,
            twelfthStep: false,
            thirteenthStep: false,
            fourteenthStep: false,
            fifteenthStep: false,
            sixteenthStep: false,
            seventeenthStep: false
        })
    }

    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <Grid container>
                <Grid item xxs={12} md={9} xl={10} sx={{ pl: '30px' }}>
                    <StartStep />
                    {steps.firstStep && <FirstStep countProgress={countProgress} />}
                    {steps.secondStep && <SecondStep countProgress={countProgress} />}
                    {steps.thirdStep && <ThirdStep countProgress={countProgress} />}
                    {steps.fourthStep && <FourthStep countProgress={countProgress} />}
                    {steps.fifthStep && <FifthStep countProgress={countProgress} />}
                    {steps.sixthStep && <SixthStep countProgress={countProgress} />}
                    {steps.seventhStep && <SeventhStep countProgress={countProgress} />}
                    {steps.eighthStep && <EighthStep countProgress={countProgress} />}
                    {steps.ninthStep && <NinthStep countProgress={countProgress} />}
                    {steps.tenthStep && <TenthStep countProgress={countProgress} />}
                    {steps.eleventhStep && <EleventhStep countProgress={countProgress} />}
                    {steps.twelfthStep && <TwelfthStep countProgress={countProgress} />}
                    {steps.thirteenthStep && <ThirteenthStep countProgress={countProgress} />}
                    {steps.fourteenthStep && <FourteenthStep countProgress={countProgress} />}
                    {steps.fifteenthStep && <FifteenthStep countProgress={countProgress} />}
                    {steps.sixteenthStep && <SixteenthStep countProgress={countProgress} />}
                    {steps.seventeenthStep && <SeventeenthStep countProgress={countProgress} />}
                </Grid>
                <Grid item xxs={12} md={3} xl={2}>
                    <ProgressBar progress={progress} resetForm={resetForm} />
                </Grid>
            </Grid>
        </div>

    )
}