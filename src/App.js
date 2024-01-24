import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home  from './components/home/Home';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
