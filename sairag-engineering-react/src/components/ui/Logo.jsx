import logoSrc from "../../assest/logo1.png";

export function Logo({ className = "w-96 h-96", dark = true }) {
  return (
    <img
      src={logoSrc}
      alt="SaiRag Logo"
      className={`${className} object-contain`}
    />
  );
}
