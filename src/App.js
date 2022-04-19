import './App.css';
import NavBar from './components/NavBar';
import DaisyNavBar from './components/DaisyNavBar';

function App() {
  return (
    <div className="App">
      <DaisyNavBar/>
      <NavBar/>
      <h1 className="text-3xl font-mono text-red-300">
        Bienvenidos a Mundo Fibro
      </h1>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
