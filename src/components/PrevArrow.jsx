export default function PrevArrow({ onClick, ariaLabel }) {
  return (
    <button
      type="button"
      className="carousel-control prev"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      ‹
    </button>
  );
}
