import { Step, StepButton, StepContent, Stepper } from "@mui/material"
import React from "react"


export const CustomStepper = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const steps = [
        {
            label: 'Potwierdziłeś swoją tożsamość',
            description: `Step 1`,
        },
        {
            label: 'Potwierdź swoje dochody',
            description: 'Step 2',
        },
        {
            label: 'Potwierdź że posiadasz wkład własny',
            description: `Step 3`,
        },
    ];

    return (
        <>
            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepButton onClick={handleStep(index)}>
                            {step.label}
                        </StepButton>
                        <StepContent>
                            {step.description}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </>
    )
}