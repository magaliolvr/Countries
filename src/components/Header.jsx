import { Link } from "react-router";
import logo from "../assets/dig_atlas_Black.svg";
import Button from "./Button";
import "./Header.scss";
import { Search } from "lucide-react";
import { useState, useContext } from "react";
import Card from "./Card";
import { UserContext } from "./UserContext";
import useMediaQuery from "../hooks/useMediaQuery";
import { CardUser } from "./CardUser";

function Header() {
  const { user, userImage, currency, country } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header>
      <img src={logo} alt="logo" className="navbar_logo" width="100px" />

      <nav>
        {isMobile && (
          <button className={`menu-hamburguer ${isMenuOpen ? "is-active" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <span></span>
          </button>
        )}
        <ul className={`menu-list ${isMenuOpen ? "is-open" : ""}`}>
          <Link to={"./homepage"}>
            <Button variant="tertiary">Homepage</Button>
          </Link>
          <Link to={"./countries"}>
            <Button variant="tertiary">Countries</Button>
          </Link>
          <Link to={"./continent"}>
            <Button variant="tertiary">Continent</Button>
          </Link>
          <Link to={"./regions"}>
            <Button variant="tertiary">Regions</Button>
          </Link>

          {isMobile && (
            <li>
              <div className="card_User__details ">
                <span>{user}</span>
                <span>
                  {country} ({currency})
                </span>
              </div>
            </li>
          )}
        </ul>
      </nav>

      <CardUser>
        <img src={userImage} />

        {!isMobile && (
          <div className="card_User__details ">
            <span>{user}</span>
            <span>
              {country} ({currency})
            </span>
          </div>
        )}
      </CardUser>
    </header>
  );
}

export default Header;
