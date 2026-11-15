function SectionTitle({
  label,
  title,
  highlight,
  description,
}) {
  return (
    <div className="section-heading">

      {label && (
        <span className="section-label">
          {label}
        </span>
      )}

      <h2>
        {title}

        {highlight && (
          <>
            <br />

            <strong>
              {highlight}
            </strong>
          </>
        )}
      </h2>

      {description && (
        <p>
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;