
import { Media } from "../components/Media";
import { Link, NavLink } from "react-router-dom";


//#endregion

export const DesktopNav = () => {
  return (
    <>
      <h1>
        <Link to="/">CineVault</Link>
      </h1>
      <div>
        <ul>
          <li>
            <NavLink to="/Popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/Upcoming">Upcoming</NavLink>
          </li>
          <li>
            <NavLink to="/Now">Now Playing</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};