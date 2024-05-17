import { Routes, BrowserRouter, Route } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/login'
import Footer from "./components/Footer/Footer";
import TimeTable from "./components/TimeTable/TimeTable";
import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import Quiz from "./components/Quiz/Quiz";
import Resource from "./components/Resource/Resource";



function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/register' element={<Register/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/explore' element={<Explore/>}/>
    <Route exact path='/quiz' element={<Quiz/>}/>
    <Route exact path='/resource' element={<Resource/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
