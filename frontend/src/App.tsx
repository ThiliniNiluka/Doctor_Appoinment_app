import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctor from "./pages/Doctor";
import Login from "./pages/Login";
import MyAppoinment from "./pages/MyAppoinment";
import MyProfile from "./pages/MyProfile";

export default function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appoinment" element={<MyAppoinment />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}
