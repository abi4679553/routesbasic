import { Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  console.log("reygfe")
  return (
    <div className="App">
<h1>fytyt</h1>
      <Header />
      <Routes>
        <Route path="/Home"  element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
