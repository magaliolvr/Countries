import { useRef } from "react";
// useRef é um hook do React que permite criar referências mutáveis que persistem por todo o ciclo de vida do componente. è usado para acessar diretamente elementos DOM ou armazenar valores mutáveis que não causam re-renderizações quando alterados. Um exemplo simples seria usar useRef para armazenar uma referência a um input e, em seguida, focar nesse input quando um botão é clicado.

function MyComponent() {
  const meuInputRef = useRef(null);
  const meuInputRefButton = useRef(null);
  const meuInputRefAtivarButton = useRef(null);
  const focarInput = () => {
    meuInputRef.current.focus();
    console.log("meuInputRef", meuInputRef);
  };

  const desativarInput = () => {
    meuInputRef.current.disabled = true;
    meuInputRefButton.current.disabled = true;
    meuInputRefButton.current.style.backgroundColor = "blue";
  };
  const ativarInput = () => {
    meuInputRef.current.disabled = false;
    meuInputRefButton.current.disabled = false;
    meuInputRefButton.current.style.backgroundColor = "";

    meuInputRefAtivarButton.current.disabled = false;
  };

  const toogleDisabledInput = () => {
    console.log("como estava:", meuInputRef.current.disabled, "como vai ficar: ", !meuInputRef.current.disabled);

    meuInputRef.current.disabled = !meuInputRef.current.disabled;
    meuInputRef.current.style.backgroundColor = meuInputRef.current.disabled ? "royalblue" : "red";

    meuInputRef.current.className = "card";
  };
  console.log("current", meuInputRef);

  // warm up  ao clicar no desactiva uma Button, preciso que a cor do butão mude para azul e o botaão fique com disabled
  return (
    <>
      <input min={2} max={10} ref={meuInputRef} type="text" />

      <button onClick={focarInput}>Foca +</button>
      <button ref={meuInputRefButton} onClick={desativarInput}>
        DEsativa input +
      </button>
      <button ref={meuInputRefAtivarButton} onClick={ativarInput}>
        Ativa input +
      </button>
      <button onClick={toogleDisabledInput}>TOOGLE</button>
    </>
  );
}

export default MyComponent;
