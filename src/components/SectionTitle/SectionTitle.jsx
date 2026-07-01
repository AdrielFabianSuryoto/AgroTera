import "./SectionTitle.css";

function SectionTitle({
  subtitle,
  title,
  description,
  center = true,
}) {
  return (
    <div
      className={`section-title ${
        center ? "section-title--center" : ""
      }`}
    >
      {subtitle && (
        <span className="section-title__subtitle">
          {subtitle}
        </span>
      )}

      <h2 className="section-title__heading">
        {title}
      </h2>

      {description && (
        <p className="section-title__description">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;