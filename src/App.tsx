import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderDefault from "@/components/partials/HeaderDefault";
import FooterDefault from "@/components/partials/FooterDefault";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <HeaderDefault />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <FooterDefault />
      </div>
    </Router>
  );
}

export default App;
