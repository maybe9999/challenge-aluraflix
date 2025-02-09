import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Aca estilos globales */
  *{
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
  }

  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: ${({theme}) => theme.cabecera.colorFondo};
  }

  #root {
    display: flex;
    //justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
`

export default GlobalStyle