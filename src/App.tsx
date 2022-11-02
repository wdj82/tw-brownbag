import { Link } from "react-router-dom";

function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"styled/"}>Normal App</Link>
        </li>
        <li>
          <Link to={"tailwind/"}>Tailwind App</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
