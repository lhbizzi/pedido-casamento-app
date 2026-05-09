import { useState } from "react";
import Carousel from "../components/Carousel";
import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";
import photo7 from "../assets/photo7.jpeg";
import photo8 from "../assets/photo8.jpeg";
import photo9 from "../assets/photo9.jpeg";
import photo10 from "../assets/photo10.jpeg";
import photo11 from "../assets/photo11.jpeg";
import photo12 from "../assets/photo12.jpeg";
import photo13 from "../assets/photo13.jpeg";
import photo14 from "../assets/photo14.jpeg";

function InicioPage() {
  const [started, setStarted] = useState(false);

  return (
    <main className="start-page" style={{ backgroundColor: "#2765F5" }}>
      <Carousel
        images={[
          photo1,
          photo2,
          photo3,
          photo4,
          photo5,
          photo6,
          photo7,
          photo8,
          photo9,
          photo10,
          photo11,
          photo12,
          photo13,
          photo14,
        ]}
      />
      <section className="start-page__card">
        <h1 className="start-page__title">
          Jogo da Memória - Nossa História de Amor
        </h1>
        <p className="start-page__body">
          Neste dia, vamos relembrar os momentos mais especiais da nossa
          história de amor. Cada etapa, cada sorriso, cada olhar... Tudo isso
          faz parte da nossa jornada juntos. Prepare-se para uma viagem no
          tempo, cheia de emoções e memórias inesquecíveis!
        </p>
        <button
          className="start-page__button"
          type="button"
          onClick={() => setStarted(true)}
        >
          Iniciar
        </button>
        {started ? (
          <p className="start-page__revealed">
            Vamos começar! Primeiro, como nos conhecemos?
          </p>
        ) : null}
      </section>
    </main>
  );
}

export default InicioPage;
