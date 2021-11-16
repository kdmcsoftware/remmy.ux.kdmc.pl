import React, { createContext, useState, useRef } from 'react';

export const StepsContext = createContext();

export const StepsState = ({ children }) => {

    const [steps, setSteps] = useState({
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

    const firstStepRef = useRef(null);
    const secondStepRef = useRef(null);
    const thirdStepRef = useRef(null);
    const fourthStepRef = useRef(null);
    const fifthStepRef = useRef(null);
    const sixthStepRef = useRef(null);
    const seventhStepRef = useRef(null);
    const eighthStepRef = useRef(null);
    const ninthStepRef = useRef(null);
    const tenthStepRef = useRef(null);
    const eleventhStepRef = useRef(null);
    const twelfthStepRef = useRef(null);
    const thirteenthStepRef = useRef(null);
    const fourteenthStepRef = useRef(null);
    const fifteenthStepRef = useRef(null);
    const sixteenthStepRef = useRef(null);
    const seventeenthStepRef = useRef(null);

    return (
        <StepsContext.Provider
            value={{
                steps, setSteps, firstStepRef, secondStepRef, thirdStepRef, fourthStepRef, fifthStepRef,
                sixthStepRef, seventhStepRef, eighthStepRef, ninthStepRef, tenthStepRef, eleventhStepRef, twelfthStepRef,
                thirteenthStepRef, fourteenthStepRef, fifteenthStepRef, sixteenthStepRef, seventeenthStepRef
            }}>
            {children}
        </StepsContext.Provider>
    )
}