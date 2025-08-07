import { Link } from "react-router";
import Button from "./Button";
import { Search } from "lucide-react";
import { useContext } from "react";
import Card from "./Card";
import { UserContext } from "./UserContext";
import { CardUser } from "./CardUser";

function NavBar() {
  const { user, userImage, currency, country } = useContext(UserContext);

  return (
    <nav style={{ display: "flex", gap: "16px" }}>
      <Link to={"./homepage"}>
        <Button variant="tertiary" iconLeft={<Search size={16} />}>
          Homepage
        </Button>
      </Link>
      <Link to={"./countries"}>
        <Button variant="tertiary" iconLeft={<Search size={16} />}>
          Countries
        </Button>
      </Link>
      <Link to={"./continent"}>
        <Button variant="tertiary" iconLeft={<Search size={16} />}>
          Continent
        </Button>
      </Link>
      <Link to={"./regions"}>
        <Button variant="tertiary" iconLeft={<Search size={16} />}>
          Regions
        </Button>
      </Link>
      <CardUser>
        <img src={userImage} />
        <span>{user}</span>
        <div className="card_User__details margin-left-s ">
          <span>
            {country} ({currency})
          </span>
        </div>
      </CardUser>
    </nav>
  );
}

export default NavBar;
