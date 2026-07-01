import "./PageBanner.css";

function PageBanner({
  badge = "AgroTerra",
  title,
  description,
}) {
  return (
    <section className="page-banner">

      <div className="container">

        <div className="page-banner__content">

          <span className="page-banner__badge">

            🌱 {badge}

          </span>

          <h1>

            {title}

          </h1>

          <p>

            {description}

          </p>

        </div>

      </div>

      <div className="page-banner__circle page-banner__circle--one"></div>
      <div className="page-banner__circle page-banner__circle--two"></div>

    </section>
  );
}

export default PageBanner;