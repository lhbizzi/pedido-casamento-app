import { useEffect, useRef, useState } from "react";

type CarouselProps = {
  images: string[];
  ariaLabel?: string;
};

export default function Carousel({
  images,
  ariaLabel = "carousel",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const length = images.length;
  const intervalRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (length <= 1) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, 4500);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [length]);

  function prev() {
    setIndex((i) => (i - 1 + length) % length);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  }

  function next() {
    setIndex((i) => (i + 1) % length);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (dx > 50) prev();
    else if (dx < -50) next();
  }

  if (length === 0) return null;

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div
        className="carousel__track"
        style={{ transform: `translateX(${-index * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, i) => (
          <figure className="carousel__slide" key={i} aria-hidden={i !== index}>
            <img src={src} alt={`Slide ${i + 1}`} />
          </figure>
        ))}
      </div>

      {length > 1 && (
        <>
          <button
            className="carousel__nav carousel__nav--prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="carousel__nav carousel__nav--next"
            onClick={next}
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="carousel__dots" role="tablist">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
