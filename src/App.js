import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import ProjectsDetOne from './Pages/ProjectsDetailes/ProjectsDetOne';
import ProjectsDetTwo from './Pages/ProjectsDetailes/ProjectsDetTwo';
import ProjectsDetThree from './Pages/ProjectsDetailes/ProjectsDetThree';
import Blog from './Pages/Blog/Blog';
import AboutMe from './Pages/AboutMe/AboutMe';
import ContactMe from './Pages/ContactMe/ContactMe';

function App() {
  return (
    <div className='px-0.5 bg-slate-900'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projectsDetOne' element={<ProjectsDetOne></ProjectsDetOne>}></Route>
        <Route path='/projectsDetTwo' element={<ProjectsDetTwo></ProjectsDetTwo>}></Route>
        <Route path='/projectsDetThree' element={<ProjectsDetThree></ProjectsDetThree>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/contactme' element={<ContactMe></ContactMe>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
