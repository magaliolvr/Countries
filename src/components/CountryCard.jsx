import Card from "./Card";

function CountryCard({ flagSrc, country, capitalCity }) {
  return (
    <Card>
      <img src={flagSrc} alt={country} />
      <div>
        <h4>{country}</h4>
        <p>{capitalCity}</p>
      </div>
    </Card>
  );
}

export default CountryCard;
