import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(120px);
  -webkit-backdrop-filter: blur(120px);
}
::-webkit-scrollbar-thumb {
  background-color: #511ca6;
  border-radius: 5px;
}

::selection {
  color: #050505;
  background-color: #9765e9;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #050505;
}

@media (max-width: 768px) {
  
  html{
    font-size: 87.5%;
  }
}
`
