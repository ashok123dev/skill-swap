import { useState } from "react";
import Home from "./home";
import Navbar from "./navbar";
import Regeister from "./regeister";
import Login from "./login";
import Findskills from "./find";
import Matches from "./match";
import "./App.css";
import Requests from "./Requests";
import Dashboard from "./Dashboard";
import Findprojects from "./project";
import Findresume from "./resume";


function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "register" && <Regeister setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} />}
      {page === "find" && <Findskills />}
      {page === "findprojects" && <Findprojects />}
      {page === "resume" && <Findresume />}
      {page === "match" && <Matches />}
      {page === "requests" && <Requests />}
      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;