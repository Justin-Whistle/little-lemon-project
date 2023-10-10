import './App.css';
import { useReducer } from 'react';
import Home from './Home';
import BookingPage from './BookingPage';
import Highlights from './Highlights';
import About from './About';
import Login from './Login';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

function App() {

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) }
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) }
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/ConfirmedBooking")
    }
  }

  return (
    <>
      <nav role="navigation" className='navContainer'>
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
        {/* <Route path='Reservations' element={<BookingPage {...{...state, ...{dispatch: dispatch, submitForm: submitForm}}} />} /> */}
        <Route path='Reservations' element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path='OrderOnline' element={<Highlights />} />
        <Route path='Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
