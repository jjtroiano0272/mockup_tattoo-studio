import logo from './logo.svg';
import lha_logo from '../public/cropped-lha-logo-1.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <img src={lha_logo} className='App-logo' alt='logo' />
          <h1 className='lha-title-main'>Light Hand Arts</h1>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57051.58300452991!2d-81.867815!3d26.65732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16d849ce99fa64ec!2sLight%20Hand%20Tattoo%20%26%20Healing%20Arts!5e0!3m2!1sen!2sus!4v1630526691914!5m2!1sen!2sus'
            width='600'
            height='450'
            style='border:0;'
            allowfullscreen=''
            loading='lazy'
          ></iframe>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
