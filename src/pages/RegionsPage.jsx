import TopContent from "../components/TopContent";
import RegionCard from "../components/RegionCard";
import GlassCard from "../components/GlassCard";
import { Link } from "react-router";

function RegionsPage() {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Antarctic"];

  return (
    <div>
      <TopContent className={"main-header"}>
        <GlassCard>
          <h1>Estou na pagina Regions</h1>
        </GlassCard>
      </TopContent>

      <div className="grid">
        {regions.map((name) => {
          return (
            <Link to={`/region/${name}`}>
              <RegionCard name={name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default RegionsPage;
