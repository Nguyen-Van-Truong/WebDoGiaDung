import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./user/Home";
import SignIn from "./user/Sign-in";
import Register from "./user/Register";
import Products from "./user/Products";
import Product_details from "./user/Product-details";
import Cart from "./user/Cart";
import Order_History from "./user/Order-history";
import Forget_Password from "./user/Forget-Password";
import Change_Password from "./user/Change-Password";
import Information_Profile from "./user/Information_Profile";
import Checkout_Shopping from "./user/Checkout-Shopping";
import Order_Details from "./user/Order-Details";




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/product-detail" element={<Product_details/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/order-history" element={<Order_History/>}/>
                <Route path="/forget-password" element={<Forget_Password/>}/>
                <Route path="/change-password" element={<Change_Password/>}/>
                <Route path="/account-setting" element={<Information_Profile/>}/>
                <Route path="/order-details" element={<Order_Details/>}/>
                <Route path="/checkout-shopping" element={<Checkout_Shopping/>}/>
            </Routes>
        </Router>
    );
}

export default App;
