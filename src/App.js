import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home  from './components/home/Home';
import LogIn  from './components/log in/LogIn';
import Footer from './components/footer/Footer';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';




library.add(faScaleBalanced);


function App() {
  return (
    <BrowserRouter  basename="/sars_">
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/log-in" element={<LogIn />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
