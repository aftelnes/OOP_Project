import './styles/App.css'
import Header from "./components/HTML/header";
import Preface from './components/HTML/preface';
import Map from './components/Map/Map'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Preface></Preface>
      <div style={{ width: '100%', height: 600 }}>
            <Map />
        </div>
      </div>
  );
}

export default App;
