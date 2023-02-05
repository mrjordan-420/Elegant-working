import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import GetStarted from './components/GetStarted';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="video">
        <source src="https://res.cloudinary.com/dtnfcxvpg/video/upload/v1640875146/pexels-kelly-lacy-5514362_owb1q9.mp4" type="video/mp4" />
      </video>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/get-started' element={<GetStarted />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
