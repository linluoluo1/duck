import './App.css';
import Maininfo from './components/Mainpage/Maininfo';
import Navbar from './components//Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Mymap from './components/Mymap/Mymap';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Network from './components/Network/Network';


const App = () => {
  return (
    <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path='/maininfo' element={<Maininfo/>} />
        <Route path='/contacts' element={<Contact/>} />
        <Route path='/mymap' element={<Mymap/>} />
        <Route path='/network' element={<Network/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
