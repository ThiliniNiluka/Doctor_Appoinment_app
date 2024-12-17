import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctor from "./pages/Doctor";
import Login from "./pages/Login";
import MyAppoinment from "./pages/MyAppoinment";
import MyProfile from "./pages/MyProfile";
import Appoinment from "./pages/Appoinment";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/doctor/:speciality" element={<Doctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-appoinment" element={<MyAppoinment />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/appoinment/:docId" element={<Appoinment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
