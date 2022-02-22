import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (padrão - Desktop)
  html {
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }
  // REM -> 1rem = font-size
  // 1rem = 16px

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  // Por padrão o input, textarea e button eles não importam a font do body do html,
  // eles tem a sua própria font, dessa forma ele é sobscrito
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-size: 400;
  }

  // Fonts de negrito
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  @media (max-width: 560px){
    .react-modal-content{
    width: 100%;
    margin: 1rem;
    max-width: 360px;
    background: var(--background);
    padding: 1rem;
    position: relative;
    border-radius: 0.25rem;
  }
    }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;
    
    &:hover{
      filter: brightness(0.8);
    }
  }
`;