import {useState,useEffect} from 'react' 
import Search from "./components/Search";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from './pages/home/index'
import { Route, Routes } from "react-router-dom";
import Category from './components/Category';
import Product from "./components/Product";
import Like from './components/Like';
import Cart from './components/Cart';
import SearchItem from './components/SearchItems'
import Register from './components/Register'
import Login from './components/Login'

function App() {
   const [likedProducts, setLikedProducts] = useState(() => {
    const storedLikedProducts = localStorage.getItem('likedProducts');
    return storedLikedProducts ? JSON.parse(storedLikedProducts) : [];
  });

  const [addToBuy, setAddToBuy] = useState(() => {
    const storedAddToBuy = localStorage.getItem('addToBuy');
    return storedAddToBuy ? JSON.parse(storedAddToBuy) : [];
  });

  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    localStorage.setItem('addToBuy', JSON.stringify(addToBuy));
  }, [likedProducts, addToBuy]);

  const [registeredEmail, setRegisteredEmail] = useState('');

  const handleRegistration = (name) => {
    setRegisteredEmail(name);
  };

  return (
    <>
      <Navbar  registeredEmail={registeredEmail} />
      <Search />
      <Routes>
        <Route path="/" element={<Home  likedProducts={likedProducts}  setLikedProducts={setLikedProducts}  addToBuy={addToBuy} setAddToBuy={setAddToBuy}  />} />
        <Route path='/category/:id' element={ <Category/>} />
        <Route path='/products/:id' element={ <Product likedProducts={likedProducts}  setLikedProducts={setLikedProducts}  addToBuy={addToBuy} setAddToBuy={setAddToBuy}/>} />  
        <Route path='/like' element={ <Like setLikedProducts={setLikedProducts} likedProducts={likedProducts} />}    />  
        <Route path='/cart' element={ <Cart setAddToBuy={setAddToBuy} addToBuy={addToBuy}/>} /> 
        <Route path='/search/:productName' element={ <SearchItem />} /> 
        <Route path='register' element={ <Register onRegistration={handleRegistration} />} /> 
        <Route path='login' element={ <Login />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
