import { useState } from "react";

function PrimeiraVistaPage() {
  const [started, setStarted] = useState(false);
  return (
    <main className="start-page">
      <section className="start-page__card">
        <h1 className="start-page__title">
          Cá estamos novamente, Poli Esportivo, onde, ainda como apenas amigos,
          nos vimos pessoalmente pela primeira vez, ainda me lembro de você com
          um kit kat branco, pois você já sabia que meu chocolate preferido é
          branco, lembro de você com um Moto G4 Plus (old), lembro de olhar para
          você e pensar "como pode ser tão parecida com a Prof. Lizandra de
          Ciências? kkkk", e mais uma vez, a nossa história foi seguindo, aqui,
          se iniciou mais um caminho, que nem imaginaríamos que seria seguido.
        </h1>
        <button
          className="start-page__button"
          type="button"
          onClick={() => setStarted(true)}
        >
          Continuar
        </button>
        {started ? (
          <p className="start-page__revealed">
            E agora? Vamos avançar um pouco mais na nossa história? Onde demos
            nosso primeiro beijo?
          </p>
        ) : null}
      </section>
    </main>
  );
}

export default PrimeiraVistaPage;
