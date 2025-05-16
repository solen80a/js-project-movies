
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
            <NavLink to="/">English</NavLink>
          </li>
          <li>
            <NavLink to="/es-ES">Spanish</NavLink>
          </li>
          <li>
            <NavLink to="/ru-RU">Russian</NavLink>
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