export default function NextArrow({ onClick, ariaLabel }) {
  return (
    <button
      type="button"
      className="carousel-control next"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      ›
    </button>
  );
}