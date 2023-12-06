import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Profile from './screens/profile';
import Profile from './screens/Profile';
import FileUpload from "./screens/Fileupload"
// import FileUpload from './screens/fileupload';
// import ProtectedRoute from './ProtectedRoute';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './screens/login/login';
import Dashboard from './screens/dashboard/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/file-upload" element={<FileUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
