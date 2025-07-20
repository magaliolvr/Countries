import { Link } from "react-router";

function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "16px" }}>
      <Link to={"./homepage"}>Homepage</Link>
      <Link to={"./countries"}>Countries</Link>
      <Link to={"./continent"}>Continent</Link>
      <Link to={"./regions"}>Regions</Link>
    </nav>
  );
}

export default NavBar;
