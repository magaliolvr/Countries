import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import DropdownList from "./DropdownList";
import Button from "./Button";
import { Link } from "react-router";

function CountriesList() {
  // useState é um hook que permite adicionar estado a componentes funcionais
  // useState retorna um array com dois elementos: o estado atual e uma função para atualizá-lo, pode ter um valor inicial, que é passado como argumento, que pode ser um valor primitivo (string, number, boolean) ou um objeto
  // hook é uma função que permite "ligar" o estado e o ciclo de vida do React a componentes funcionais

  const [currency, setCurrency] = useState("eur"); //string
  const [countries, setCountries] = useState([]); //array
  const [codeCurrencies, setCodeCurrencies] = useState([]); //array

  //      DropdownList component
  //   const options = [
  //     { value: "eur", label: "EUR" },
  //     { value: "usd", label: "USD" },
  //     { value: "cop", label: "COP" },
  //   ];

  //   FUNÇAO ASSINCRONA PARA BUSCAR PAISES

  // uma useEffect é um hook que permite executar efeitos colaterais em componentes funcionais, como buscar dados de uma API. Tambem é utilizado para gerenciar o ciclo de vida dos componentes, como montar e desmontar. Basicamente, ela permite que você execute código em resposta a mudanças de estado ou props.

  useEffect(() => {
    console.log("Currency", currency);

    const fetchCountries = async () => {
      const data = await fetch(`https://restcountries.com/v3.1/currency/${currency}`);
      const newCountriesList = await data.json();

      console.log("new Countries List", newCountriesList);

      setCountries(newCountriesList);
    };

    fetchCountries();
  }, [currency]); // Dispara quando `currency` muda

  // FUNÇAO ASSINCRONA PARA BUSCAR MOEDAS

  useEffect(() => {
    console.log("Currency code", codeCurrencies);

    const fetchCurrencies = async () => {
      // Função assíncrona para buscar todos os países
      const res = await fetch("https://restcountries.com/v3.1/all?fields=currencies");
      const data = await res.json();

      // Criar um Set para guardar moedas únicas
      const currencySet = new Set();

      data.forEach((country) => {
        if (country.currencies) {
          Object.keys(country.currencies).forEach((code) => {
            currencySet.add(code.toLowerCase());
          });
        }
      });

      // Converte o Set em um array de objetos com value e label
      const options = Array.from(currencySet).map((code) => ({
        value: code,
        label: code.toUpperCase(), // para exibir com letras maiúsculas
      }));

      setCodeCurrencies(options);
    };

    fetchCurrencies();
  }, []);

  return (
    <div>
      <h1>Contries List</h1>

      <DropdownList options={codeCurrencies} onChange={(e) => setCurrency(e.target.value)} />

      {/* GALLERY CARDS*/}
      <div className="flex-wrap gap-xl justify-center">
        {countries.map((country) => {
          return (
            <Link to={`/country/${country.name.common}`} key={country.cca3}>
              <CountryCard flagSrc={country.flags.png} country={country.name.common} capitalCity={country.capital} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
