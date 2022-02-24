import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.jsx';
import BlogList from './Components/BlogList.jsx';
function App() {
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/blogs" element={<BlogList/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
