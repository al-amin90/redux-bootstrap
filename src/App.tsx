import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center gap-4">
          <a
            href="https://vite.dev"
            target="_blank"
            className="flex items-center"
          >
            <img src={viteLogo} className="h-8" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="flex items-center"
          >
            <img src={reactLogo} className="h-8" alt="React logo" />
          </a>
        </div>
        <ul className="flex list-none gap-8 m-0">
          <li>
            <Link
              to="/users"
              className="text-white no-underline font-bold hover:underline"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to={"/tasks"}
              className="text-white no-underline font-bold hover:underline"
            >
              Tasks
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-white no-underline font-bold hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <ModeToggle/>
          </li>

        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
