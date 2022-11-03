import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../assets/Fundo.png'

const GlobalStyles = createGlobalStyle`
  body{
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #121214;
  }

  h1{
    font-family: 'Fredoka One', cursive;
    font-size: 54px;
    line-height: 77px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    height: 70px;
  }

  .gradient{
    background: linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 53.94%, #E1D55D 90.57%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin:12px
  }
`;

export default GlobalStyles;
