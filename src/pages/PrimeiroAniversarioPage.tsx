import { useState } from "react";

function PrimeiroAniversarioPage() {
  const [started, setStarted] = useState(false);
  return (
    <main className="start-page">
      <section className="start-page__card">
        <h1 className="start-page__title">
          Aaah, nosso primeiro aniversário de namoro, que dia! Lembro de você me
          contar que ainda duvidava que tudo estava acontecendo, e eu querendo
          apenas provar que estava disposto à fazer tudo acontecer. Que noite
          especial, tivemos a oportunidade de ficar um pouco mais juntos, e nos
          olhar, ver quanto vivemos em um ano. Juntamente, comemoramos minha
          entrada na faculdade (que sim, foi por sua causa kkkkk), uma conquista
          marcante, que definiu quem eu sou hoje em dia. Que os momentos bons
          que vivemos em nossas comemorações, sempre nos rodeiem. Estar com
          você, eis aí meu verdadeiro desejo meu amor.
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
            Agora, conseguimos vivenciar nossa história um pouco. Dentro deste
            tempo todo, uma coisa, ou melhor, alguém nos sustentou. Onde podemos
            encontar esta pessoa?
          </p>
        ) : null}
      </section>
    </main>
  );
}

export default PrimeiroAniversarioPage;
