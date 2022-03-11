import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import AllComp from "./Components/AllComp.jsx";
import BlogList from "./Components/BlogList.jsx";
import BlogDetails from "./Components/BlogDetails.jsx";
import Faq from "./Components/Faq.jsx";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<AllComp />} />
          <Route
            path={`${process.env.PUBLIC_URL}/blogs`}
            element={<BlogList />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/blogDetails`}
            element={<BlogDetails />}
          />
          <Route path={`${process.env.PUBLIC_URL}/Faq`} element={<Faq />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
