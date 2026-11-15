import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="hospital-header">

      <Link
        to="/"
        className="hospital-logo"
      >

        <span className="logo-icon">
          ✚
        </span>

        <div>

          <h1>
            MEDICARE
          </h1>

          <span>
            HEALTH & MEDICAL CENTER
          </span>

        </div>

      </Link>

      <nav className="hospital-nav">

        <Link to="/">
          Home
        </Link>

        <a href="/#about">
          About
        </a>

        <Link to="/departments">
          Departments
        </Link>

        <Link to="/doctors">
          Doctors
        </Link>

        <a href="/#services">
          Services
        </a>

        <a href="/#contact">
          Contact
        </a>

      </nav>

      <a
        href="/#appointment"
        className="header-appointment"
      >
        Book Appointment
      </a>

    </header>
  );
}

export default Header;