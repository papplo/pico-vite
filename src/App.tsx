import * as React from 'react'
import './index.css'
import './fonts.css'

import { Header, Main, Footer } from './components/'
function App() {
  const [theme, setTheme] = React.useState('')
  function handleThemeSelection(arg: string) {
    window.document.querySelector('html')
    .setAttribute('data-theme', arg)		
  }
 

 return ( 
<React.Fragment>
    <Header selectTheme={handleThemeSelection} />
    <Main />
    <Footer />
  </React.Fragment>
 )
}

export default App
