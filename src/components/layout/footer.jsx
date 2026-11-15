import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="hospital-footer">

      <div className="footer-logo">

        <span>
          ✚
        </span>

        <div>
          <strong>
            MEDICARE
          </strong>

          <small>
            HEALTH & MEDICAL CENTER
          </small>
        </div>

      </div>

      <p>
        © 2026 Medicare Health & Medical Center.
        All rights reserved.
      </p>

      <div className="footer-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/doctors">
          Doctors
        </Link>

        <Link to="/departments">
          Departments
        </Link>

        <a href="/#services">
          Services
        </a>

        <a href="/#contact">
          Contact
        </a>

      </div>

    </footer>
  );
}

export default Footer;