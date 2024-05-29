import logo from './logo.svg';
import './App.css';
import Posts from "./components/Posts/Posts";
import Sidebar from "./components/Sidebar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
      <Router>
          <Sidebar />
          <Routes>
              <Route
                  path="/Posts/Post"
                  element={<Posts />}
              />
          </Routes>
      </Router>
  );
}

export default App;
