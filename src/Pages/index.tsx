import { Box } from "@mui/material";
import MyStepper from "../commons/components/MyStepper";
import steps from "./Steps";

export default (() => {
    return (
        <Box pt={4}>
            <MyStepper steps={steps} orientation="vertical" />
        </Box>
    );
});
