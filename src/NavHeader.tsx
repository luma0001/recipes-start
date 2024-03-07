import { Link, NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus.tsx";

export default function NavHeader() {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/categories">Categories</a> */}
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          {/* <a href="/recipes">Recipes</a> */}
          <NavLink to="/recipes">Recipes</NavLink>
        </li>

        <li>
          {/* <a href="/add">Add</a> */}
          <NavLink to="/add">Add</NavLink>
        </li>
        <li>
          {/* <a href="/add">Add</a> */}
          <NavLink to="/add-catergory">Add Category</NavLink>
        </li>
        <AuthStatus />
      </ul>
    </nav>
  );
}
