import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  type = "button",
  className = "",
}) {
  if (to) {
    return (
      <Link
        to={to}
        className={`common-button ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`common-button ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;