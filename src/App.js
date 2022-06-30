// import { Route } from 'react-router-dom';
import './App.css';
import Maininfo from './components/Mainpage/Maininfo';
import Navbar from './components//Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Mymap from './components/Mymap/Mymap';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='Contact' element={Contact} />
        <Route path='Mymap' element={Mymap} />
        <Route path='Society' element={Society} />
      </Routes>
      <Maininfo />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
