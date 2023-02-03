import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="video">
        <source src="https://res.cloudinary.com/dtnfcxvpg/video/upload/v1640875146/pexels-kelly-lacy-5514362_owb1q9.mp4" type="video/mp4" />
      </video>
      <Home />
    </div>
  );
}

export default App;
