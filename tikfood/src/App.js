import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import NotFound from './components/Shared/NotFound';
import Header from './components/Shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
