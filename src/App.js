import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './features/auth/components/Login';
import SignUp from './features/auth/components/SignUp';
import CartPage from './pages/CartPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
