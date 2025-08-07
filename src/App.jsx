import { useEffect, useState } from "react";
import "./style/App.scss";
import "./style/utils.scss";
import Button from "./components/Button";
import Card from "./components/Card";
import CountryCard from "./components/CountryCard";
import CountriesList from "./components/CountriesList";

function App() {
  // Exemplos de use effect
  // const [currentName, setCurrentname] = useState("N/A");
  // const [age, setAge] = useState(18);

  // useEffect(() => {
  //   console.log("useEffect Magali, executa 1 vez apenas");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect com dependencia. Name:" + currentName + "Age:" + age);
  // }, [currentName, age]);

  // useEffect(() => {
  //   console.log("sem dependencia nenhuma o CHATO!!!");
  // });

  // Fim de exemplos use effect

  // console.log("countries", countries);
  // useEffect(() => {
  //   console.log("dependencias vazias");

  //   //  recolher dados na API
  //   const fetchData = async () => {
  //     const data = await fetch(`https://restcountries.com/v3.1/currency/${currency}`);
  //     const countries = await data.json();

  //     setCountries(countries);
  //   };

  //   fetchData();

  //   // guardar o que vem da a API
  // }, [currency]);

  return (
    <>
      <CountriesList />
      {/* <h1>bye bye {currency}!</h1>
      <Button
        label={"eur"}
        onClick={() => {
          setCurrency("eur");
        }}
      />

      <Button
        label={"usd"}
        onClick={() => {
          setCurrency("usd");
        }}
      />
      <Button
        label={"cop"}
        onClick={() => {
          setCurrency("cop");
        }}
      /> */}

      {/* <div className="grid grid-4">
        {countries.map((pais) => {
          return (
            <Card  key={pais.cca3}>
              <img src={pais.flags?.png} alt="" />
              {pais.name.common}
            </Card>
          );
        })}

       
      </div> */}

      {/* <div>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          onChange={(event) => {
            const newName = event.target.value;
            setCurrentname(newName);
          }}
        />

        <label htmlFor="">Age:</label>
        <input
          type="text"
          onChange={(event) => {
            const newAge = event.target.valueAsNumber;
            setAge(newAge);
          }}
        />
      </div>

      <div>
        <CountryCard flagSrc="https://flagcdn.com/w320/pt.png" capitalCity={"Lisbon"} country={"Portugal"} />
      </div> */}
    </>
  );
}

export default App;
