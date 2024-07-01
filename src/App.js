import logo from './logo.svg';
import './App.css';
import Posts from "./components/Posts/Posts";
import Weather from "./components/Weathers/Weather";
import Location from "./components/Locations/Location";
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
               <Route
                  path="/weathers/weather"
                  element={<Weather />}
              />  
              <Route
              path="/locations/location"
              element={<Location />}
              />
          </Routes>
      </Router>
  );
}

export default App;
