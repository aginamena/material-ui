import React from 'react'
import Sidebar from './components/Sidebar'
import {ThemeProvider, CssBaseline} from '@mui/material'
import darkTheme from './AppTheme'
import Header from './components/Header'


function App() {

  return (
    <ThemeProvider theme = {darkTheme}>
      <Header />
      <Sidebar />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App