import { styled } from 'styled-components';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const SectionBannerStyled = styled.section.withConfig({
    shouldForwardProp: (prop) => prop !== 'urlImg',
})`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    background-image: url(${({ urlImg }) => urlImg});
    background-blend-mode: darken, luminosity;
    background-color: rgba(0, 0, 0, 0.432); /* Fondo negro con opacidad */
    background-repeat: no-repeat;  // Evita que la imagen se repita
    background-size: cover;
    background-position: center;

    z-index: 0;

    padding: 30px;
    width: 100%;
    height: 300px;
`

export const DivConteinerInfoBanner = styled.div`
    display:flex;
    flex-direction: column;
    width: 40%;
`

export const H1TitleBanner = styled.h1`
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    background-color: ${({ theme, category }) => theme.colorSection.find((obj) => obj.titulo == category).colorPrimario};
`

export const PDescriptionBanner = styled.p`
    background-color: ${({ theme, category }) => theme.colorSection.find((obj) => obj.titulo == category).colorPrimario};
    color: black;
    padding: 5px;
    border-radius: 10px;
    filter: brightness(95%);
`

export const DivConteinerVideoStyled = styled.div`
    position: relative;
    width: 50%;
    border: 4px solid black;
`


export const LiteYouTubeEmbedStyled = styled(LiteYouTubeEmbed)`
    .yt-lite {
        z-index: 1;
        width: 100%;
        height: 100px;
        background-color: violet;
  };
`

