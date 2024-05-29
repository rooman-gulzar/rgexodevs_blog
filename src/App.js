import logo from './logo.svg';
import './App.css';
import Posts from "./components/Posts/Posts";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Blog App By RG.
          <Posts/>
        </p>
      </header>
    </div>
  );
}

export default App;
