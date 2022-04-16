import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CheckOut from './Pages/CheckOut/CheckOut';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/signup' element={<SignUp></SignUp>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
    </div>
  );
}

export default App;
