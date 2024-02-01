import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fetch from './Api/Fetch';
import Axios from './Api/Axios';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Fetch />} />
          <Route path='/axios' element={<Axios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
