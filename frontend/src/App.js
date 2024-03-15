import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./user/Home";
import SignIn from "./user/Sign-in";




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
            </Routes>
        </Router>
    );
}

export default App;
