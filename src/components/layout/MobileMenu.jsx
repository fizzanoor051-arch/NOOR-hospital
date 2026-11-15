import { Link } from "react-router-dom";

function MobileMenu({
  isOpen,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-menu">

      <button
        type="button"
        className="mobile-menu-close"
        onClick={onClose}
      >
        ×
      </button>

      <nav>

        <Link
          to="/"
          onClick={onClose}
        >
          Home
        </Link>

        <a
          href="/#about"
          onClick={onClose}
        >
          About
        </a>

        <Link
          to="/departments"
          onClick={onClose}
        >
          Departments
        </Link>

        <Link
          to="/doctors"
          onClick={onClose}
        >
          Doctors
        </Link>

        <a
          href="/#services"
          onClick={onClose}
        >
          Services
        </a>

        <a
          href="/#contact"
          onClick={onClose}
        >
          Contact
        </a>

      </nav>

    </div>
  );
}

export default MobileMenu;