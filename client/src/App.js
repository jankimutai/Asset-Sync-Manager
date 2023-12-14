import { Route,Routes} from 'react-router-dom';
import Signin from "./components/Signin";
import Home from './components/Home';
import Landing from './components/UserView';
import NavBar from './components/Navbar';
import About from './components/About';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ForgotPassword from "./components/Forgotpassword";
import TermsAndConditions from "./components/Termsandconditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AssetItem from './components/AssetItem';
import ManagerLogin from './AdminViews/ManagerLogin';
import AdminDashboard from './containers/Admin';
import RequestForm from './components/RequestForm';
import RequestList from './components/RequestList';
import ProcurementDashboard from './containers/ProcurementView';
import UserProfileCard from './components/UserProfile';
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
                <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
                <Route path="/asset/:id" element={<AssetItem />} />
                <Route path = "/admin/login" element={<ManagerLogin />}/>
                <Route path = "/admin/dashboard" element={<AdminDashboard />}/>
                <Route path="/requestform" element={<RequestForm/>}></Route>
                <Route path="/requests" element={<RequestList/>}></Route>
                <Route path='/procurement/dashboard' element={<ProcurementDashboard />} />

                <Route path="/profile" element={<UserProfileCard />}/>
            </Routes>
            <Footer />
        </div>
        
    )
  }
  
  export default App;
  