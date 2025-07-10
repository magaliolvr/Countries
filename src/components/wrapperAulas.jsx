import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [contador, setContador] = useState(1);

  const [currentName, setCurrtentName] = useState("Ana");
  return (
    <Card>
      <Button
        label={`ver mais ${contador} `}
        // onClick={() => setContador(contador + 1)}
        onClick={() => {
          setContador((prev) => {
            return prev + 1;
          });
        }}
      />
      <div style={{ padding: "20px", display: "flex", gap: "16px" }}>
        <Button
          label={"reset"}
          onClick={() => {
            setContador(0);
          }}
        />

        <Button
          label={"incrementa + 3"}
          onClick={() => {
            setContador((prev) => prev + 3);
          }}
        />
        <Button
          label={"decrementa - 3"}
          onClick={() => {
            setContador((prev) => {
              if (prev - 3 >= 0) {
                return prev - 3;
              }
              return 0;
            });
          }}
        />
      </div>

      <Card>
        §{" "}
        <h1>
          My name is = <strong style={{ color: "violet" }}>{currentName}</strong>{" "}
        </h1>
        <Button
          label={"Francisco"}
          onClick={() => {
            setCurrtentName("Francisco");
          }}
        />
        <Button
          label={"Ana"}
          onClick={() => {
            setCurrtentName("Ana");
          }}
        />
        <Button
          label={"Maria"}
          onClick={() => {
            setCurrtentName("Maria");
          }}
        />
        <Button
          label={"João"}
          onClick={() => {
            setCurrtentName("João");
          }}
        />
      </Card>

      <Card>
        <h4>Enunciado:</h4>
        <ul className="trolha">
          <li>utilizar o botão para no onclick ele incrementar o valor de mais 1</li>
          <li>Segundo Botão que diga reset e que mude o contador para 1</li>
          <li>Acrescentar dois botões em que um incrementa +3 o outro decrementa -3</li>
          <li>Nota o decremento não pode ser inferior a 0</li>
          <li>4 novos botoes com nomes de colegas, estes botoes no on click devem passar pro H1 o nome o qual foi clicado</li>
        </ul>
      </Card>
    </Card>
  );
}

export default App;
