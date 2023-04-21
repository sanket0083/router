import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Book from './pages/Book';
import List from './pages/List';
import Layout from './pages/Layout';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Private from './utils/Private';
import LoginRouter from './utils/LoginRouter';
import Register from './pages/Register';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>}/>
      <Route path='/book' element={<Private><Layout><Book /></Layout></Private>}/>
      <Route path='/list' element={<Layout><List /></Layout>}/>
      <Route path='/edit' element={<Layout><Edit /></Layout>}/>
      <Route path='/login' element={<LoginRouter><Login /></LoginRouter>}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    </>
  );
}

export default App;
