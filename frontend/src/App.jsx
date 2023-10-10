import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import AddPlace from './components/AddPlace';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/place' element={<AddPlace/>}/>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
