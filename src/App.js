import './App.css';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
     <header>
        <img src="./Logo.svg" alt="Little Lemon Logo"></img>
        <nav>
          <ul className='navContainer'>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Menu">Menu</a></li>
            <li><a href="Reservations">Reservations</a></li>
            <li><a href="OrderOnline">Order Online</a></li>
            <li><a href="Login">Login</a></li>
          </ul>
        </nav>
      </header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
