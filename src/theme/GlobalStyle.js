import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *,*::after,*::before{
    box-sizing:border-box;
  }

  /* variables */
  :root
  {
    --blue:#8ecae6;
    --yellow:#fcbf49;
    --yellowL:#fdcf5a;
  }

  body{
    color:black;
    background-color:var(--blue);
  }

  h1, h2{
    font-family: 'Open Sans Condensed', sans-serif;
    color:black;
  }

  a{
    color:inherit;
    text-decoration:none;
  }

  button{
    cursor:pointer;
    outline:none;
    border:none;
    font-family:inherit;
    padding:0;
    background-color:inherit;
    color:black;
  }

  input{
    border:none;
    outline:none;
    color:white;
    font-family:inherit;
  }

  input[type="date"]{
    color:white;
  }

  select{
    outline:none;
    border:none;
    color:white;
    font-family:inherit;
  }
`;

export default GlobalStyle;
