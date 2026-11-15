import { Link } from "react-router-dom";

function MedicineCard({ medicine }) {
  if (!medicine) return null;

  return (
    <article className="medicine-card">

      <div className="medicine-icon">
        {medicine.icon || "💊"}
      </div>

      <span>
        {medicine.category || "Healthcare"}
      </span>

      <h3>
        {medicine.name}
      </h3>

      <p>
        {medicine.description}
      </p>

      {medicine.price && (
        <strong>
          {medicine.price}
        </strong>
      )}

      {medicine.id && (
        <Link to={`/pharmacy/${medicine.id}`}>
          View Details →
        </Link>
      )}

    </article>
  );
}

export default MedicineCard;