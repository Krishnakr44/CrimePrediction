import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/assets/Home";
import Page404 from "./components/assets/Page404";
import About from "./components/About";
import Contact from "./components/Contact";
import Reports from "./components/Reports";
import Team from "./components/Team";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
