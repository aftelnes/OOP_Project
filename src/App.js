import './styles/App.css'
import Header from "./components/HTML/header";
import Preface from './components/HTML/preface';
import Map from './components/HTML/map'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Preface></Preface>
      {/* <Map></Map> */}
    </div>
  );
}

export default App;
