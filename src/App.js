import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {  Routes, Route } from 'react-router-dom';
import NoteState from './context/Notes/NoteState';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
const App = () => {
  return (
    <NoteState>
      <Navbar />
      <ToastContainer position="top-right" className='my-toast-container'  />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/about' element={<About />} />
      </Routes>

    </NoteState>
  );
};

export default App;