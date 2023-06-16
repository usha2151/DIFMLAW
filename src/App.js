import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { FirebaseProvider } from "./firebase";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from "./components/form/Login";
import Hero from "./components/Hero/Hero";
import Signup from './components/form/Signup';
import Lawyers_profile_card from "./components/job_description_page/Lawyers_profile_card/Lawyers_profile_card";
import EditProfile from './components/EditProfile/EditProfile';
import All_Lawyers from "./components/All_Lawyers/All_Lawyers";
import Admin_dashboard from "./components/Admin_dashboard/Admin_dashboard";

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <FirebaseProvider>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<EditProfile />} />
        <Route path="/job/:lawId" element={<Lawyers_profile_card />} />
        <Route path="/alllawyer" element={<All_Lawyers />} />
        <Route path="/admin" element={<Admin_dashboard />} />
      </Routes>
      </FirebaseProvider>
     <Footer />
    </Router>
    </>
  );
}

export default App;
