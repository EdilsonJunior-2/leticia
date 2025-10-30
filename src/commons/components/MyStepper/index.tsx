import {
    Box,
    Button,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    type StepperProps,
} from '@mui/material';
import { Fragment, useState, type ReactNode } from 'react';

export interface MyStepProps {
    id: any;
    title: string;
    content: ReactNode;
}

export interface MyStepperProps extends StepperProps {
    steps: MyStepProps[];
}

export default ((props: MyStepperProps) => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const handleStep = (step: number) => setActiveStep((prev) => prev + step);
    const handleReset = () => setActiveStep(0);

    return (
        <Box>
            <Stepper
                activeStep={activeStep}
                alternativeLabel={props.alternativeLabel}
                orientation={props.orientation}
            >
                {props.steps.map((step: MyStepProps) => (
                    <Step key={step.id}>
                        <StepLabel>{step.title}</StepLabel>
                        <StepContent>
                            {step.content}
                            <Box display="flex" pt={2}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={() => handleStep(-1)}
                                    sx={{ mr: 1 }}
                                >
                                    Voltar
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button
                                    onClick={() =>
                                        activeStep === props.steps.length - 1
                                            ? handleReset()
                                            : handleStep(1)
                                    }
                                >
                                    {activeStep === props.steps.length - 1
                                        ? 'Reiniciar'
                                        : 'Próximo'}
                                </Button>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
});
