import { useState } from "react";

function CasaDoSenhorPage() {
  const [started, setStarted] = useState(false);
  return (
    <main className="start-page">
      <section className="start-page__card">
        <h1 className="start-page__title">
          Aqui, onde o Amor se encontra, seu Corpo, Alma e Divindade.
        </h1>
        <button
          className="start-page__button"
          type="button"
          onClick={() => setStarted(true)}
        >
          Continuar
        </button>
        {started ? (
          <p className="start-page__revealed">E agora? Para onde iremos?</p>
        ) : null}
      </section>
    </main>
  );
}

export default CasaDoSenhorPage;
