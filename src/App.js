import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Delivery from "./components/Delivery"
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Pagenotfound from "./components/Pagenotfound";

function App() {
  console.log("reygfe")
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
