import { useState } from "react";

function ComoNosConhecemosPage() {
  const [started, setStarted] = useState(false);
  return (
    <main className="start-page">
      <section className="start-page__card">
        <h1 className="start-page__title">
          Pois é, tudo começou com um simples Free Fire kkkkk, apesar de você
          achar que eu me envergonho, não é bem assim, apesar de ser Free Fire,
          Deus me apresentou, através de amigos e um simples jogo eletrônico, a
          mulher que viria a ser o amor da minha vida! Bendito seja este jogo,
          pois foi assim que uma linda história se iniciou. Com pequenos passos,
          fomos nos aproximando, nos conhecendo, e seguindo uma simples e
          honesta amizade.
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
            Agora, fica a dúvida, onde nos vimos pessoalmente pela primeira vez?
            Você lembra?
          </p>
        ) : null}
      </section>
    </main>
  );
}

export default ComoNosConhecemosPage;
