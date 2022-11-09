import logo from "./logo.svg";
import "./App.css";
import { InstUISettingsProvider, View } from "@instructure/ui";
import clone from "lodash/clone";

function App() {
  const c = clone([1, 2, 3]);
  console.log(c);
  return (
    <InstUISettingsProvider>
      <View>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </View>
    </InstUISettingsProvider>
  );
}

export default App;
