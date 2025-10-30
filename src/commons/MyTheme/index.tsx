import { createTheme, ThemeProvider } from "@mui/material/styles";
import palette from "./pallete";
import typography from "./typography";
import Pages from "../../Pages";

const theme = createTheme({
    palette: palette,
    typography: typography
})

export default (() => {
    return (
        <ThemeProvider theme={theme}>
            <Pages />
        </ThemeProvider>
    )
})