import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/Responsive.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import LabQues from './pages/LabQues';
import Code from './pages/Code';


const App = () => {

  return (

    <BrowserRouter>

      <>

        <Navbar />

        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<LabQues />} path='/:labname' />
          <Route element={<Code />} path='/:labname/:code' />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </>

    </BrowserRouter>
  )
}

export default App