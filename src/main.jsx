import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Header from './components/Header.jsx'
import './index.css'
import TopProjects from './components/TopProjects.jsx'
import Resume from './components/Resume.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <TopProjects />
    <Resume />
    <App />
  </React.StrictMode>,
)