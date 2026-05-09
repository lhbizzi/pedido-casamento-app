import { useState } from "react";

function PrimeiroBeijoPage() {
  const [started, setStarted] = useState(false);
  return (
    <main className="start-page">
      <section className="start-page__card">
        <h1 className="start-page__title">
          Foi aqui, nessa esquina, estranha, escura, com um maldito chiclete e
          dois manés de aparelho, que ocorreu um primeiro beijo, não éramos
          namorados, fomos empurrados, porém, tudo colaborou para muita coisa.
          Inclusive, o João Pedro correndo do pai da ficante dele kkkkk, que nos
          fez tomar um puta susto, esse dia pode não ter sido o melhor beijo que
          já demos, mas foi muito memorável.
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
            E agora? Vamos avançar um pouco mais na nossa história? Onde
            comemoramos nosso primeiro aniversário de namoro?
          </p>
        ) : null}
      </section>
    </main>
  );
}

export default PrimeiroBeijoPage;
