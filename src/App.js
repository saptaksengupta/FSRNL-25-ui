import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/login/LoginPage";
import PostEditorPage from "./Pages/PostEditor/PostEditorPage";
import ProfilePage from "./Pages/Profile/Profile";
import SignupPage from "./Pages/signup/SignupPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} /> 
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post-add" element={<PostEditorPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
