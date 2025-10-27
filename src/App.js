// import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
      
      <Footer />

      {
        /* <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
             className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
           >
             Learn React
           </a>
         </header> */
      }
    </div>
  );
}

export default App;
