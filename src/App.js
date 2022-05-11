import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import {Routes,Route,Navigate} from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/service' element={<Service/>}/>
      <Route exact path='contact' element={<Contact/>}/>
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
