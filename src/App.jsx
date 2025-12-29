import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="app">      
      <Router>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
