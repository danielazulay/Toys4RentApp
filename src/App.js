
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import FormToys from './pages/FormToy/FormToy'
import AllToys from './pages/Alltoys/AllToys'
import EditToy from './pages/EditToy/EditToy'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Nav from './pages/Nav/Nav'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>

        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/formtoy' element={<FormToys />} />
        <Route path='/' element={<Home />} />
        <Route path='/alltoys' element={<AllToys />} />
        <Route path='/edittoy/:id' element={<EditToy />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
