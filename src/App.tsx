import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './fonts.css'

// Pages
import SignIn from './pages/Signin'
import Styleguide from './pages/Styleguide'
import Calendar from './pages/Calendar'
import { Header, Footer } from './components/'

function App() {
  const [theme, setTheme] = React.useState('')
  function handleThemeSelection(arg: string) {
    window.document.querySelector('html')
    .setAttribute('data-theme', arg)		
  }
 

 return ( 
<React.Fragment>
<Header selectTheme={handleThemeSelection} />
<BrowserRouter>
  <Routes>
    <Route path="styleguide" element={<Styleguide />} />
    <Route path="/" element={<SignIn />} />
    <Route path="/view-calendar" element={<Calendar />} />
  </Routes>
</BrowserRouter>
<Footer />
</React.Fragment>
)
}

export default App
