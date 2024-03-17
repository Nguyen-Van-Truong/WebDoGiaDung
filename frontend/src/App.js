import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./user/Home";
import Index from "./admin/Index";




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Home />} />

            </Routes>
        </Router>
    );
}

export default App;
