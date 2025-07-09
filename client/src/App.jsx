
import { useNavigate } from 'react-router-dom';
import { BrowserRouter , Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import CreateBlogs from './pages/CreateBlogs';
import './App.css'

function App() {
  return (
    <>
       <BrowserRouter basename="/Narrify">
        <MainContent />
    </BrowserRouter> 
    </>
  );
}


function MainContent(){
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-blogs" element={<CreateBlogs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </>
  );
}

function Navbar(){
  const navigate = useNavigate();
  // const handleNavigation  = (path) =>{
  //   navigate(path);
  // };
   return(
    <div className="navbar">
        <h1 style={{fontFamily: "Dancing Script, cursive"}}>Narrify</h1>
        <li><button onClick={()=> navigate('/')}>Home</button></li>
        <li><button onClick={()=> navigate('/create-blogs')}>Create Blog</button></li>
        <li><button onClick={()=> navigate('/blogs')}>Blog</button></li>
        <li><button onClick={()=> navigate('/signup')}>SignUp</button></li>
        <li><button onClick={()=> navigate('/login')}>Login</button></li>
    </div>
   );
}


export default App
