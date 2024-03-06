import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home  from './components/home/Home';
import LogIn  from './components/log in/LogIn';
import Footer from './components/footer/Footer';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




library.add(faScaleBalanced);


function App() {
  const user = { 
    name:'Juan Cruz Masjoan',
    id: 1234,
    mail: "juan@gmail.com"
  }
  return (
    <BrowserRouter  basename="/sars_">
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/log-in" element={<LogIn />}/>
      <Route path='/listado' element={<ItemListContainer username={user.name}/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
