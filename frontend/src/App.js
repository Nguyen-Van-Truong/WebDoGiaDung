import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./user/Home";
import SignIn from "./user/Sign-in";
import Register from "./user/Register";
import Products from "./user/Products";
import Product_details from "./user/Product-details";




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/product-detail" element={<Product_details/>}/>
            </Routes>
        </Router>
    );
}

export default App;
