import { Box, Typography } from '@mui/material';
import foto from "../../../assets/1.jpg";
export const title4  = 'O dia 1';

export default (() => {
    return (
        <Box display="flex" flexDirection='column'>
            <Typography>Acho que eu nunca tremi tanto quanto no dia em que te pedi em namoro kkkkkkkk. Eu estava extremamente nervoso. E se estivesse indo rápido demais? Vai que você me achasse desesperado.</Typography>
            <img style={{alignSelf: "center"}} src={foto} width={400} alt='foto 1' />
            <Typography>Mesmo assim, tinha que ser aquele dia. A garrafa de champagne atrapalhou um pouco a minha estratégia mas talvez te pedir depois em casa tenha realmente sido uma ideia melhor. E depois daquele dia (e dessa foto), começou a minha felicidade.</Typography>
        </Box>
    );
});
