import { Box, Typography } from "@mui/material";
import foto24 from '../../../assets/25.jpg';

export const title7: string = "Eu te amo";

export default (() => {
    return (
        <Box display="flex" flexDirection="column">
            <Typography>
                Acho que o que eu quero te falar nesse meio mundo de texto é que eu quero te parabenizar pelo seu dia. Pela pessoa especial que você é para mim, o quanto eu te admiro e te adoro. Que esse seja o primeiro de muitos aniversários que eu possa comemorar com você, todos até o fim de nossas vidas.
            </Typography>
            <Typography>
                Meus parabéns, meu amor. Te amo muito. S2
            </Typography>
            <img style={{ alignSelf: "center" }} width="400px" src={foto24} alt="foto" />
        </Box>
    )
});