import "./App.css";
import LocalStorageExample from "./components/LocalStorageExample";
import AddToCart from "./components/AddToCart";

function App() {
  return (
    <div className="App">
      <div>
        <h2>LocalStorage Example</h2>
        <p>
          When you type something in the input field, it will save it to
          localStorage on change and it will fill it with on load if any value
          is available on the localStorage with the specific key.
        </p>
        <LocalStorageExample />
      </div>
      <br />
      <div>
        <AddToCart />
      </div>
    </div>
  );
}

export default App;
