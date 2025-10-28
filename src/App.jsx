import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import PrevArrow from "./components/PrevArrow";
import NextArrow from "./components/NextArrow";

const slides = [
  { id: 1, title: "City Skyline", desc: "Skyscrapers at dusk with lights."  },  
  { id: 3, title: "Forest Path", desc: "A quiet path through a green forest." },
  { id: 5, title: "Deep dive", desc: "A visit to the deep dive of ocean." },
];

function App() {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    // Update polite live region when slide changes
    const slide = slides[current];
    setLiveMessage(`Slide ${current + 1} of ${slides.length}: ${slide.title}`);
  }, [current]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    accessibility: false, // we'll manage aria ourselves to match W3C example
    nextArrow: <NextArrow ariaLabel="Next slide" />,
    prevArrow: <PrevArrow ariaLabel="Previous slide" />,
    afterChange: (index) => setCurrent(index),
  };

  // Keyboard controls at carousel level to mirror W3C example
  function handleKeyDown(e) {
    // Left / Right to navigate
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      sliderRef.current.slickPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      sliderRef.current.slickNext();
    } else if (e.key === "Home") {
      e.preventDefault();
      sliderRef.current.slickGoTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      sliderRef.current.slickGoTo(slides.length - 1);
    } else if (e.key === " ") {
      // Space toggles play/pause when focus is on play/pause button, so we don't override globally
    }
  }

  function togglePlayPause() {
    const next = !isPlaying;
    setIsPlaying(next);
    if (next) {
      sliderRef.current.slickPlay && sliderRef.current.slickPlay();
    } else {
      sliderRef.current.slickPause && sliderRef.current.slickPause();
    }
    // Announce change in live region
    setLiveMessage(next ? "Autoplay enabled" : "Autoplay disabled");
  }

  return (
    <div
      className="carousel-wrapper"
      role="region"
      aria-label="Image Carousel"
      onKeyDown={handleKeyDown}
    >
      <h2 id="carousel-heading" className="visually-hidden">
        Featured images carousel
      </h2>

      <div className="carousel-controls">
        <button
          type="button"
          className="nav-btn"
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Previous slide"
        >
          Previous
        </button>

        <button
          type="button"
          className="nav-btn"
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Next slide"
        >
          Next
        </button>

        <button
          type="button"
          className="nav-btn"
          onClick={togglePlayPause}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((s, i) => (
          <div
            key={s.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${slides.length}`}
            tabIndex={-1} // allow programmatic focus
            className={`carousel-slide ${i === current ? "active" : ""}`}
          >
            <figure>
              <img
                src={`https://picsum.photos/seed/${s.id}/800/400`}
                alt={s.title}
                style={{ width: "100%", height: "auto" }}
              />
              <figcaption>{s.desc}</figcaption>
            </figure>
          </div>
        ))}
      </Slider>

      {/* Polite live region for NVDA to announce slide changes */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="visually-hidden"
        id="carousel-live"
      >
        {liveMessage}
      </div>

      {/* Dots: replicate visible dots but ensure they are buttons with aria-controls */}
      <div className="carousel-dots" role="tablist" aria-label="Slide selection">
        {slides.map((s, i) => (
          <button
            className="nav-btn"
            key={s.id}
            onClick={() => sliderRef.current.slickGoTo(i)}
            aria-selected={i === current}
            aria-controls={`slide-${i + 1}`}
            role="tab"
            tabIndex={i === current ? 0 : -1}
          >
            {`Go to slide ${i + 1}`}
          </button>
        ))}
      </div> 
    </div>
  );
}

export default App;