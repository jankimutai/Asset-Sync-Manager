import Login from "./components/Login";
import { Route,Routes} from 'react-router-dom';
import Signup from "./components/Signup";
function App() {
    return(
        <div>
            <Routes>
                <Route path ="/" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
            </Routes>
        </div>
        
    )
  }
  
  export default App;
  