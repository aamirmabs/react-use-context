import "./App.css";
import ContextComponentA from "./components/useContext-components/ContextComponentA";

function App() {
  return (
    <div className="App">
      <h1>React useContext</h1>
      <p>A detailed introduction...</p>
      <h2>Passing `props` with `useContext`</h2>
      <ContextComponentA />
    </div>
  );
}

export default App;
