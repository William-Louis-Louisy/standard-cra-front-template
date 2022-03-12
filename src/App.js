import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
