import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Experience from './pages/Experience'
import './App.css';
const App = () => {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/"element={<HomePage/>} />
          <Route path="Experience"element={<Experience/>} />
          <Route path="Projects"element={<Projects/>} />
          <Route path="Contact"element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    
    </div>
  );
}
export default App;
