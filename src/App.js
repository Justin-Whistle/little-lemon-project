import './App.css';
import Home from './Home';
import BookingPage from './BookingPage';
import Highlights from './Highlights';
import About from './About';
import Login from './Login';
import { Routes, Route, Link } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';


function App() {
  return (
    <>
      <nav className='navContainer'>
      <img src="./Logo.svg" alt="Little Lemon Logo"></img>
        <ul className='nav'>
          <Link to='/' className='Home'>Home</Link>
          <Link to='About' className='About'>About</Link>
          <Link to='Menu' className='Menu'>Menu</Link>
          <Link to='Reservations' className='Reservations'>Reservations</Link>
          <Link to='OrderOnline' className='OrderOnline'>Order Online</Link>
          <Link to='Login' className='Login'>Login</Link>
        </ul>
      </nav>
      <hr></hr>
      <Routes>
        <Route path='ConfirmedBooking' element={<ConfirmedBooking />} />
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Menu' element={<Highlights />} />
        <Route path='Reservations' element={<BookingPage />} />
        <Route path='OrderOnline' element={<Highlights />} />
        <Route path='Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
