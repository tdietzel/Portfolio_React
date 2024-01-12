import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header.jsx'
import TopProjects from './components/TopProjects.jsx'
import Resume from './components/Resume.jsx'
import App from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<TopProjects />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/App' element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)