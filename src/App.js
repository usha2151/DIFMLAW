import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from "./components/form/Login";
import Hero from "./components/Hero/Hero";
import Signup from './components/form/Signup';
import EditProfile from './components/EditProfile/EditProfile';
import All_Lawyers from "./components/All_Lawyers/All_Lawyers";
import Admin_dashboard from "./components/Admin_dashboard/Admin_dashboard";

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
        <Route path="/alllawyer" element={<All_Lawyers />} />
        <Route path="/admin" element={<Admin_dashboard />} />
      </Routes>
    
     <Footer />
    </Router>
    </>
  );
}

export default App;
