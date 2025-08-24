import CountriesList from "../components/CountriesList";
import TopContent from "../components/TopContent";

function CountriesPage() {
  return (
    <div>
      <TopContent className={"header-center"}>
        <h1>Countries page</h1>
      </TopContent>
      <CountriesList />
    </div>
  );
}

export default CountriesPage;
