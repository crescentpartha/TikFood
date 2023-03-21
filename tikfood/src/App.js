import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import NotFound from './components/Shared/NotFound';
import Header from './components/Shared/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Reservation from './components/Reservation/Reservation';
import Gallery from './components/Gallery/Gallery';
import About from './components/AboutUS/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/reservation' element={<Reservation></Reservation>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;