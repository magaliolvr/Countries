import CountriesList from "../components/CountriesList";
import Header from "../components/Header";

function CountriesPage() {
  return (
    <Header className={"header-center"}>
      <h1>Countries page</h1>
      <CountriesList />
    </Header>
  );
}

export default CountriesPage;
