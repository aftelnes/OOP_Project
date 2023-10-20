import Header from './components/UI/Header';
import Preface from './components/UI/Preface';
import Map from './components/UI/Map/Map'
import classes from './styles/App.module.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Preface></Preface>
      <div className={classes.map}>
        <Map />
      </div>
    </div>
  );
}

export default App;
