import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import Company from './pages/Company';
import NewProject from './pages/NewProject';
import Nav from './components/layout/Nav';
import Projects from './pages/Projects';
import Project from './pages/Project'

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div  className="app-container">
        <Nav />
          <Container customClass="minHeight">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
            </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;