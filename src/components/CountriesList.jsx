import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import DropdownList from "./DropdownList";
import Button from "./Button";

function CountriesList() {
  const [currency, setCurrency] = useState("eur");
  const [countries, setCountries] = useState([]);

  const [codeCurrencies, setCodeCurrencies] = useState([]);

  //      DropdownList component
  //   const options = [
  //     { value: "eur", label: "EUR" },
  //     { value: "usd", label: "USD" },
  //     { value: "cop", label: "COP" },
  //   ];

  //   FUNÇAO ASSINCRONA PARA BUSCAR PAISES

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
            currencySet.add(code.toLowerCase()); // exemplo: "eur"
          });
        }
      });

      // Transformar o Set em array no formato que o DropdownList espera
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

      {/* OPTION WITH BUTTONS */}
      {/* <Button label="EURO" onClick={() => setCurrency("eur")} />
      <Button label="USD" onClick={() => setCurrency("usd")} />
      <Button label="COP" onClick={() => setCurrency("cop")} /> */}

      {/* OPTIONS WITH DROPDOWN LIST */}

      <DropdownList options={codeCurrencies} onChange={(e) => setCurrency(e.target.value)} />

      {/* GALLERY CARDS*/}
      <div className="grid grid-3 ">
        {countries.map((country) => {
          return <CountryCard key={country.cca3} flagSrc={country.flags.png} country={country.name.common} capitalCity={country.capital} />;
        })}
      </div>
    </div>
  );
}

export default CountriesList;
