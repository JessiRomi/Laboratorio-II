import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "./componentes/navbar/navbar.jsx"
import Principal from './componentes/principal/principal.jsx'
import Aside from './componentes/aside/aside.jsx'
import './index.css'
import Footer from './componentes/footer/footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Principal/>
    <Aside/>
    <Footer/>
  </React.StrictMode>,
)
