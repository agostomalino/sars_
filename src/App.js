import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home  from './components/mainPage/home/Home';
import LogIn  from './components/log in/LogIn';
import Footer from './components/footer/Footer';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Formulario from './components/form/Formulario';

library.add(faScaleBalanced);

function App() {

  return (
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<LogIn />}/>
      <Route path='/listado' element={<ItemListContainer/>}/>
      <Route path='/formulario' element={<Formulario/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
