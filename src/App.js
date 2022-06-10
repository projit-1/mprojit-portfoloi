import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Blogs from './Pages/Home/Blogs';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Resume from './Pages/Home/Resume';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import Carhat from './Portfolio/Carhat';
import Manufacture from './Portfolio/Manufacture';
import Warehouse from './Portfolio/Warehouse';

function App() {
  return (
    <div className="bg bg-slate-300">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/blogs' element={<Blogs />}> </Route>
        <Route path='/resume' element={<Resume />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>
        <Route path='/manufacture' element={<Manufacture />}> </Route>
        <Route path='/warhouse' element={<Warehouse />}> </Route>
        <Route path='/carhat' element={<Carhat />}> </Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
