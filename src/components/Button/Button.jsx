import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  text,
  link = "/",
  variant = "primary",
  type = "link",
  onClick,
}) {
  if (type === "button") {
    return (
      <button
        className={`btn btn--${variant}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  return (
    <Link
      to={link}
      className={`btn btn--${variant}`}
    >
      {text}
    </Link>
  );
}

export default Button;