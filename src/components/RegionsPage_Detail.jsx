import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CountryCard from "./CountryCard";

// o useparams serve para acessar os parâmetros da URL, como o nome do país que foi passado na rota. Ele retorna um objeto com os parâmetros da URL, onde cada chave é o nome do parâmetro definido na rota e o valor é o valor correspondente na URL.

// o useEffect serve, de forma simplificada, para executar código quando o componente é montado ou quando determinadas variáveis mudam. Ele é usado para buscar dados, manipular o DOM, ou realizar outras operações que precisam ser feitas após a renderização do componente.

function RegionPage_Detail() {
  const params = useParams();
  const regionName = params.name;

  const [countriesList, setCountriesList] = useState([]);

  console.log(countriesList);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch(`https://restcountries.com/v3.1/region/${regionName}`);
      const newCountries = await data.json();

      console.log("Lista de paises: ", newCountries);

      setCountriesList(newCountries);
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <div>
        <h1>Regions of {regionName}</h1>
        <hr></hr>
      </div>
      <div className="grid grid-3">
        {countriesList.map((countryName) => {
          return (
            <Link to={`/country/${countryName.name.common}`}>
              <CountryCard flagSrc={countryName.flags.png} country={countryName.name.common} capitalCity={countryName.capital} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default RegionPage_Detail;
