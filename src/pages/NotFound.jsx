import { Link } from "react-router-dom";
import { PageHero } from "../components/ui";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Error 404" title="We can't find that page" text="The link may be old or mistyped. These pages will get you back on track.">
        <div className="hero-actions">
          <Link to="/" className="btn btn-primary btn-lg">Go to home</Link>
          <Link to="/departments" className="btn btn-glass btn-lg">Departments</Link>
          <Link to="/doctors" className="btn btn-glass btn-lg">Doctors</Link>
        </div>
      </PageHero>
    </>
  );
}
