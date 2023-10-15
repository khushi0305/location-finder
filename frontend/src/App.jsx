import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import AddPlace from './components/AddPlace';
import UserAuth from './UserAuth';
import UserManager from './components/UserManager';
import { AppProvider } from './AppContext';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/place' element={<AddPlace/>}/>
        <Route path='/user' element={<UserManager/>}/>
        <Route path="/chat" element={ <UserAuth/> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
