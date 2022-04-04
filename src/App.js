import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Deshboard from './components/Deshboard/Deshboard';
import Blogs from './components/Bglogs/Blogs';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/deshboard' element={<Deshboard></Deshboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
