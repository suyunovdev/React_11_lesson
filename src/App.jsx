import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { lazy } from 'react'
const Header = lazy(()=>import("./components/header/Header"));
const Footer = lazy(()=>import("./components/footer/Footer"));
const Home = lazy(()=>import("./pages/home/Home"));
const About = lazy(()=>import("./pages/about/About"));
const Shop = lazy(()=>import("./pages/shop/Shop"));
const Contact = lazy(()=>import("./pages/contact/Contact"));


import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/shop' element={Shop} />
          <Route path='/about' element={About} />
          <Route path='/contact' element={Contact} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  )
}

export default App
