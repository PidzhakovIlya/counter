import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * ,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0a1434;
    width: 100vw;
    height: 100vh;
  }
`