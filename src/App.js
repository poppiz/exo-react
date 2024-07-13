import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Mentions from "./pages/Mentions";
import Profile from "./pages/Profile/Profile";
import Realisations from "./pages/Realisations";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Realisations" element={<Realisations />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mentions" element={<Mentions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
