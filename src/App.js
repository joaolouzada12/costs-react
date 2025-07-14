import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import Company from './pages/Company';
import NewProject from './pages/NewProject';
import Nav from './components/layout/Nav';


import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <Nav />
      <Container customClass="content">  {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
