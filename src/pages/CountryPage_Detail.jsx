import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import Header from "../components/Header";
import { BiBorderAll } from "react-icons/bi";
import CountryBorders from "../components/CountryBorders";
// o useparams serve para acessar os parâmetros da URL, como o nome do país que foi passado na rota. Ele retorna um objeto com os parâmetros da URL, onde cada chave é o nome do parâmetro definido na rota e o valor é o valor correspondente na URL.

// o useEffect serve, de forma simplificada, para executar código quando o componente é montado ou quando determinadas variáveis mudam. Ele é usado para buscar dados, manipular o DOM, ou realizar outras operações que precisam ser feitas após a renderização do componente.

function CountryPage() {
  const params = useParams();
  const countryName = params.name; //ira buscar na rota o .name, se na rota estiver com nome .newCountry, aqui tambem deve ser newCountry

  const [countryInfo, setCountryInfo] = useState({});

  console.log("countryInfo", countryInfo);

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
      const newCountry = await data.json();

      setCountryInfo(newCountry[0]);
    };

    fetchCountry();
  }, []);

  console.log("countryName", countryName);
  const hasData = Object.keys(countryInfo).length;

  // Object.keys(countryInfo).length; é uma maneira de verificar se o objeto countryInfo tem propriedades, ou seja, se ele contém dados. Se o comprimento do array retornado por Object.keys(countryInfo) for maior que 0, significa que countryInfo tem informações dentro dele. Resumidamente, essa linha verifica se countryInfo não está vazio e, portanto, se há dados disponíveis para serem exibidos.

  console.log("hasInformationInsideMyDraw", hasData);

  return (
    <div>
      {!hasData && <h1>Loading...</h1>}
      {hasData > 0 && (
        <div>
          <Header className={"header-center"}>
            <h1>Nome do pais : {countryInfo.name.common}</h1>
            <img src={countryInfo.flags.png} alt={countryInfo.name.common + "'s flag"} width={"50px"} />
          </Header>
          <h1></h1>
          <h1>população : {countryInfo.population}</h1>
          <h1>capital : {countryInfo.capital}</h1>

          <Link to="/regions">Return to Regions Page</Link>

          {countryInfo.borders ? <CountryBorders borderCodes={countryInfo.borders} /> : "SEM DADOS"}

          {/* se  countryInfo.borders existir, entao ele imprime o componente, se nao, como nao tem nadano false nao imprime nada*/}
        </div>
      )}
    </div>
  );
}

export default CountryPage;
