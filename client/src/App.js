import Login from "./components/Login";
import { Route,Routes} from 'react-router-dom';
import Registration from "./components/Registration";
import ForgotPassword from "./components/Forgotpassword";
import TermsAndConditions from "./components/Termsandconditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
function App() {
    return(
        <div>
            <Routes>
                <Route path ="/login" element={<Login/>}></Route>
                <Route path="/registration" element={<Registration/>}></Route>
                <Route path="/forgot" element={<ForgotPassword/>}></Route>
                <Route path="/terms and conditions" element={<TermsAndConditions/>}></Route>
                <Route path="privacy policy" element={<PrivacyPolicy/>}></Route>
            </Routes>
        </div>
        
    )
  }
  
  export default App;
  