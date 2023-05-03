import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {  Routes, Route } from 'react-router-dom';
import NoteState from './context/Notes/NoteState';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
import Signup from './components/Signup';
const App = () => {
  // const [authToken, setAuthToken] = useState('');

  // useEffect(() => {
  //   const authTokenCookie = Cookies.get('auth_token');
  //   if (authTokenCookie) {
  //     setAuthToken(authTokenCookie);
  //   }
  // }, []);

  return (
    <NoteState>
      <Navbar />
      <ToastContainer position="top-right" className='my-toast-container'  />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/about' element={<About />} />
      </Routes>

    </NoteState>
  );
};

export default App;