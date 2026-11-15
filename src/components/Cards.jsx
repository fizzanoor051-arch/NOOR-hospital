import { Link } from "react-router-dom";
import { Avatar, Stars, Tilt } from "./ui";

export function DepartmentCard({ dept, count }) {
  return (
    <Tilt className="card dept-card" as="article">
      <Link to={`/departments/${dept.slug}`} className="card-link" aria-label={`${dept.name} department`}>
        <span className="dept-ico" aria-hidden="true">{dept.icon}</span>
        <h3>{dept.name}</h3>
        <p className="dept-tag">{dept.tagline}</p>
        <p className="dept-text">{dept.about}</p>
        <span className="card-foot">
          <span>{count} {count === 1 ? "doctor" : "doctors"}</span>
          <span className="go">Open</span>
        </span>
      </Link>
    </Tilt>
  );
}

export function DoctorCard({ doc }) {
  return (
    <Tilt className="card doc-card" as="article">
      <div className="doc-top">
        <Avatar name={doc.name} gender={doc.gender} size={68} />
        <div>
          <h3><Link to={`/doctors/${doc.id}`}>{doc.name}</Link></h3>
          <p className="doc-des">{doc.designation}</p>
        </div>
      </div>
      <dl className="doc-meta">
        <div><dt>Department</dt><dd>{doc.department}</dd></div>
        <div><dt>Experience</dt><dd>{doc.experience} years</dd></div>
        <div><dt>Visits</dt><dd>{doc.days.join(", ")}</dd></div>
        <div><dt>Fee</dt><dd>{doc.fee ? `PKR ${doc.fee.toLocaleString()}` : "By referral"}</dd></div>
      </dl>
      <div className="doc-actions">
        <Stars value={doc.rating} />
        <Link className="btn btn-ghost btn-sm" to={`/doctors/${doc.id}`}>Profile</Link>
        <Link className="btn btn-primary btn-sm" to={`/appointment?doctor=${doc.id}`}>Book</Link>
      </div>
    </Tilt>
  );
}
