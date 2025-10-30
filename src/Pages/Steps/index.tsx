import Step0, { title0 } from "./Step0";
import Step1, { title1 } from "./Step1";
import Step2, { title2 } from "./Step2";
import { type MyStepProps } from "../../commons/components/MyStepper";
import Step3, { title3 } from "./Step3";
import Step4, { title4 } from "./Step4";
import Step5, { title5 } from "./Step5";
import Step6, { title6 } from "./Step6";
import Step7, { title7 } from "./Step7";

const steps: MyStepProps[] = [
    {
        id: 0,
        title: title0,
        content: <Step0 />
    },
    {
        id: 1,
        title: title1,
        content: <Step1 />
    },
    {
        id: 2,
        title: title2,
        content: <Step2 />
    },
    {
        id: 3,
        title: title3,
        content: <Step3/>
    },
    {
        id: 4,
        title: title4,
        content: <Step4 />
    },
    {
        id: 5,
        title: title5,
        content: <Step5 />
    },
    {
        id: 6,
        title: title6,
        content: <Step6 />
    },
    {
        id: 7,
        title: title7,
        content: <Step7 />
    }
]


export default steps;