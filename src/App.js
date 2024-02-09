import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import Home from './Components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
 