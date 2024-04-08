import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/mainPage/home/Home';
import LogIn from './components/log in/LogIn';
import Footer from './components/footer/Footer';
import ClaimsListContainer from './components/claimsListContainer/claimsListContainer';
import Formulario from './components/form/Formulario';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path='/reclamos' element={<ClaimsListContainer />} />
        <Route path='/reclamos/nuevo' element={<Formulario />} />
        <Route path='/reclamos/:claimId' element={<Formulario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
