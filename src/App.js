import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Resume from './Pages/Home/Resume';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/resume' element={<Resume></Resume>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
