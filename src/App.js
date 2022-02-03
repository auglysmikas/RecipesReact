import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import mainContext from "./context/mainContext";
import Toolbar from "./components/Toolbar";
import ShoppingCart from "./pages/ShoppingCart";
import CreateProducts from "./pages/CreateProducts";
import SingleProduct from "./pages/SingleProduct";
import MainPage from "./pages/MainPage";



function App() {

    const [getProd, setProd] = useState([])
    const [getCart, setCart] = useState([])


    return (
        <div className="App">



            <mainContext.Provider value={{getProd, setProd, getCart, setCart}}>

                <BrowserRouter>

                    <Toolbar/>

                    <Routes>

                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/allProducts/:title' element={<SingleProduct/>}/>
                        <Route path='/createProducts' element={<CreateProducts/>}/>
                        <Route path='/shoppingCart' element={<ShoppingCart/>}/>

                    </Routes>


                </BrowserRouter>


            </mainContext.Provider>


        </div>
    );
}

export default App;

