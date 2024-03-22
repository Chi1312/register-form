import Register from "./components/Register";
import Login from "./components/Login"
import ForgotPass from "./components/ForgotPass"
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-pass" element={<ForgotPass />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
