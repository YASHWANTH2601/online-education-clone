import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Home />} />
            <Route path="/services" element={<Home />} />
            <Route path="/dashbord" element={<Dashboard />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
