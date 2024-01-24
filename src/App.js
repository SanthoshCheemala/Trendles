import { Route, Routes } from 'react-router-dom';
import Landing from './pages/LandingPage/Landing';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Blog from './pages/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App font-Poppins'>
        <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
