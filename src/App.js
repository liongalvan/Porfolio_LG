import Layout from './components/Layout';
import Home from './components/Home'
import Contact from './components/contact'
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import About from './components/about';

function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          </Route>
      </Routes>
    </Router>
    </>
    
)
}

export default App;
