import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GllobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  :root {
    --light-color:#fff;
    --dark-color:#000;
    --border-color:#ccc;
    --accent-color:#dc143c;
  }
`

const GlobalStyles.styles = () => {
  return (
    <div>GlobalStyles.styles</div>
  )
}

export default GlobalStyles.styles