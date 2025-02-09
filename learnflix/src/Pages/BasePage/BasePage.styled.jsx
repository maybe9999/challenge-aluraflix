import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

//      Header  
export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;

    background-color: ${({theme}) => theme.cabecera.colorFondo};
    border-bottom: 3px solid ${({theme}) => theme.cabecera.colorPrimario};
    box-shadow: 0 5px 29px 0px #2271D1B3;
`

export const H1TitleHeader = styled.h1`
    color: ${({theme}) => theme.cabecera.colorPrimario};
    font-family: ${({theme}) => theme.fuentes.header};
`

export const DivConteinerLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`

export const LinkStyledHeader = styled(Link).withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelect', 
  })`
    aspect-ratio: 10 / 2;
    padding: 20px;

    font-family: ${({theme}) => theme.fuentes.header};
    font-size : ${({theme}) => theme.fuentesTamaño.headerLink};
    font-weight: ${({theme}) => theme.fuentesAncho.black};
    

    color: ${({theme, isSelect}) => isSelect ? theme.cabecera.colorPrimario : theme.cabecera.colorTerciario};
    background-color: ${({theme, isSelect}) => isSelect && theme.cabecera.colorSecundario};

    border: 2px solid white;
    border-radius: 10px;
    text-align: center;
`

//      Footer

export const FooterContaierStyled = styled.footer`
    display:flex;
    background-color: ${({theme}) => theme.cabecera.colorPrimarioOpaco};
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    border-top: 3px solid ${({theme}) => theme.cabecera.colorPrimario};
    box-shadow: 0 5px 29px 0px #2271D1B3;
    margin-top: auto;
`