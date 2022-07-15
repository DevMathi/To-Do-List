import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root{
      --purple: #8284FA;
      --purple-dark: #5E60CE;
      --blue: #4EA8DE;
      --blue-dark:#1E6F9F;
      --gray-700: #0D0D0D;
      --gray-600: #1a1a1a;
      --gray-500:#262626;
      --gray-400: #333333;
      --gray-300: #808080;
      --gray-200: #D9D9D9;
      --gray-100: #F2F2F2;
      --danger: #E25858;
    }
    *{
      text-decoration: none;
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
    }
    html{
      @media (max-width: 1080px){
        font-size: 93.75%;
       }
      @media (max-width:720px){
        font-size: 87.5%;
      }
    }
    body{
      background-color: var(--gray-600);
      font-family:"Inter", sans-serif;
      font-weight:900;
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }
    #root{
      min-height: 100vh;
    }
    input, textarea, label{
      font-family: poppins, sans-serif;
    }
    button{
      background: none;
      border: none;
    }
`;
