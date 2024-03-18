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
import Index from "./admin/Index";
import ProductList from "./admin/ProductList";
import ProductGrid from "./admin/ProductGrid";
import ProductEdit from "./admin/ProductEdit";
import ProductAdd from "./admin/Product-Add";
import OrderList from "./admin/OrderList";
import OrderInvoices from "./admin/OrderInvoices";
import OrderDetails from "./admin/OrderDetails";
import Customers from "./admin/Customers";
import CustomerDetail from "./admin/CustomerDetail";
import CouponsList from "./admin/CouponsList";
import CouponAdd from "./admin/CouponAdd";
import Chat from "./admin/Chat";
import AdminProfile from "./admin/AdminProfile";




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
                <Route path="/index-admin" element={<Index />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/product-grid" element={<ProductGrid />} />
                <Route path="/product-edit" element={<ProductEdit />} />
                <Route path="/product-add" element={<ProductAdd />} />
                <Route path="/order-list" element={<OrderList />} />
                <Route path="/order-invoices" element={<OrderInvoices />} />
                <Route path="/order-details" element={<OrderDetails />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/customer-detail" element={<CustomerDetail />} />
                <Route path="/coupons-list" element={<CouponsList />} />
                <Route path="/coupon-add" element={<CouponAdd />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/admin-profile" element={<AdminProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
