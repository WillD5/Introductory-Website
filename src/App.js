import "./App.css";
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import Pro from "./Pages/Pro.tsx";
import Main from "./Pages/Main.tsx";
import Unexistant from "./Pages/404.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Pro />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<Unexistant />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
