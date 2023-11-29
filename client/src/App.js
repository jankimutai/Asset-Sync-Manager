import { Route,Routes} from 'react-router-dom';
import Signin from "./components/Signin";
import Home from './components/Home';
import Landing from './components/Landing';
import NavBar from './components/Navbar';
import About from './components/About';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ForgotPassword from "./components/Forgotpassword";
import TermsAndConditions from "./components/Termsandconditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
function App() {
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Signin />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/forgot" element={<ForgotPassword/>}></Route>
                <Route path="/terms and conditions" element={<TermsAndConditions/>}></Route>
                <Route path="privacy-policy" element={<PrivacyPolicy/>}></Route>
            </Routes>
            <Footer />
        </div>
        
    )
  }
  
  export default App;
  