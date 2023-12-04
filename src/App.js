import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Inputs from "./components/UI/Inputs";
import Header from "./components/UI/Header";
import Preface from "./components/UI/Preface";
import Map from "./components/UI/Map/Map";
import classes from "./styles/App.module.css";

function App() {
  return (
    <div>
      <MantineProvider>
        <Header></Header>
        <Preface></Preface>
        <Inputs></Inputs>
        <div className={classes.map}>
          <Map />
        </div>
      </MantineProvider>
    </div>
  );
}

export default App;
