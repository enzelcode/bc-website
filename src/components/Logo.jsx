export default function Logo({ className = "h-10 w-auto", invert = true }) {
  return (
    <img
      src="/bc.webp"
      alt="BC Gestão Contábil"
      className={`${className} ${invert ? 'brightness-0 invert' : ''}`}
    />
  )
}
