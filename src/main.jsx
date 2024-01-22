import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header.jsx'
import TopProjects from './components/TopProjects.jsx'
import Resume from './components/Resume.jsx'
import App from './components/App.jsx'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path='/Portfolio_React/' element={<App />} />
          <Route path='/TopProjects' element={<TopProjects />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)