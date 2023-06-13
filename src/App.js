import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from "./components/form/Login";
import Hero from "./components/Hero/Hero";
import Signup from './components/form/Signup';
import EditProfile from './components/EditProfile/EditProfile'

function App() {
  return (
    <>
     <Router>
      <Navbar />
   
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<EditProfile />} />
      </Routes>
    
     <Footer />
    </Router>
    </>
  );
}

export default App;
