import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import foto1 from '../../../assets/2.jpg';
import foto2 from '../../../assets/3.jpg';
import foto3 from '../../../assets/4.jpg';
import foto4 from '../../../assets/5.jpg';
import foto5 from '../../../assets/6.jpg';
import foto6 from '../../../assets/7.jpg';
import foto7 from '../../../assets/8.jpg';
import foto8 from '../../../assets/9.jpg';
import foto9 from '../../../assets/10.jpg';
import foto10 from '../../../assets/11.jpg';
import foto11 from '../../../assets/12.jpg';
import foto12 from '../../../assets/13.jpg';
import foto13 from '../../../assets/14.jpg';
import foto14 from '../../../assets/15.jpg';
import foto15 from '../../../assets/16.jpg';
import foto16 from '../../../assets/17.jpg';
import foto17 from '../../../assets/18.jpg';
import foto18 from '../../../assets/19.jpg';
import foto19 from '../../../assets/20.jpg';
import foto20 from '../../../assets/21.jpg';
import foto22 from '../../../assets/23.jpg';
import foto23 from '../../../assets/24.jpg';

export const title6 = 'Um ano (que ainda não acabou) de momentos';

const imageList: any[] = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto18,
];

const imageList2: any[] = [
    foto7,
    foto8,
    foto9,
    foto10,
    foto19,
    foto20,
    foto22,
    foto23
]

export default (() => {
    return (
        <Box display="flex" flexDirection="column">
            <Typography>
                Tirar fotos contigo sempre é um evento muito bom. Guardar
                recordações para mostrar a nossos futuros filhos "olha moleque,
                olha garota, seus pais quando eram jovens". Além do fato de que
                minha câmera brilha quando clica para você e meus olhos brilham
                ao ver sua imagem na tela.
            </Typography>
            <Typography>
                Essas foram algumas das fotos que eu tenho nossas que quero
                guardar para o sempre. Momentos bons, engraçados, emocionados,
                tem para todo gosto.
            </Typography>
            <ImageList
                sx={{ width: "100%", height: 450, maxWidth: 1000, alignSelf: "center" }}
                variant="woven"
                cols={4}
                rowHeight={121}
            >
                {imageList.map((image: any, index: number) => {
                    return (
                        <ImageListItem>
                            <img src={image} alt={index.toString()} />
                        </ImageListItem>
                    );
                })}
            </ImageList>
            <Typography>
                Aqui também estão algumas fotinhas suas que eu adoro por nenhuma razão aparente :D
            </Typography>
                        <ImageList
                sx={{ width: "100%", height: 450, maxWidth: 1000, alignSelf: "center" }}
                variant="woven"
                cols={4}
                rowHeight={121}
            >
                {imageList2.map((image: any, index: number) => {
                    return (
                        <ImageListItem>
                            <img src={image} alt={index.toString()} />
                        </ImageListItem>
                    );
                })}
            </ImageList>
        </Box>
    );
});
