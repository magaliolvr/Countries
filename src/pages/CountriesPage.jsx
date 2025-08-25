import CountriesList from "../components/CountriesList";
import GlassCard from "../components/GlassCard";
import TopContent from "../components/TopContent";

function CountriesPage() {
  return (
    <div>
      <TopContent className={"main-header"}>
        <GlassCard>
          <h1>Countries page</h1>
        </GlassCard>
      </TopContent>
      <CountriesList />
    </div>
  );
}

export default CountriesPage;
