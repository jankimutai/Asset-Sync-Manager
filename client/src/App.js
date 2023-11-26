import Login from "./components/Login";
import { Route,Routes} from 'react-router-dom';
import Registration from "./components/Registration";
function App() {
    return(
        <div>
            <Routes>
                <Route path ="/" element={<Login/>}></Route>
                <Route path="/registration" element={<Registration/>}></Route>
            </Routes>
        </div>
        
    )
  }
  
  export default App;
  