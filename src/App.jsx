import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Examples</h2>
      <div>
        <ul>
          <Link to={"/input-example"}>
            <li>Input Example</li>
          </Link>
          <Link to={"/localstorage"}>
            <li>LocalStorage</li>
          </Link>
          <Link to={"/redux-counter"}>
            <li>Redux Example</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default App;
