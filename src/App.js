import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HackathonHeader from "./components/hackathon-header/hackathon-header";
import TopDevs from "./components/top-devs/top-devs";
import Hackathons from "./pages/hackathonsPage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <HackathonHeader />
        <Routes>
          <Route path="/" element={<Hackathons />} />
          <Route path="/hackathon/:id" element={<Hackathons />} />
          <Route path="/top" element={<TopDevs />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
