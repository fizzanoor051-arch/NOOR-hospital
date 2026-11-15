function MedicineDetails({ medicine }) {
  if (!medicine) {
    return (
      <div className="medicine-details">
        <p>Medicine information not available.</p>
      </div>
    );
  }

  return (
    <section className="medicine-details">

      <div className="medicine-details-icon">
        {medicine.icon || "💊"}
      </div>

      <div>

        <span>
          {medicine.category || "Healthcare"}
        </span>

        <h1>
          {medicine.name}
        </h1>

        <p>
          {medicine.description}
        </p>

        {medicine.price && (
          <h3>
            Price: {medicine.price}
          </h3>
        )}

        {medicine.uses && (
          <div>
            <strong>Uses</strong>
            <p>{medicine.uses}</p>
          </div>
        )}

        {medicine.warning && (
          <div>
            <strong>Important</strong>
            <p>{medicine.warning}</p>
          </div>
        )}

      </div>

    </section>
  );
}

export default MedicineDetails;