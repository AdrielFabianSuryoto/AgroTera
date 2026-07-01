import "./CTA.css";
import Button from "../Button/Button";

function CTA({
  title = "Mari Wujudkan Pertanian Berkelanjutan",
  description = "Bersama AgroTerra, ubah limbah jerami menjadi solusi nyata untuk meningkatkan kualitas tanah dan mendukung pertanian yang lebih ramah lingkungan."
}) {
  return (
    <section className="cta">

      <div className="container">

        <div className="cta__box">

          <span className="cta__badge">

            🌱 AgroTerra

          </span>

          <h2>

            {title}

          </h2>

          <p>

            {description}

          </p>

          <div className="cta__buttons">

            <Button
              text="Hubungi Kami"
              link="/contact"
            />

            <Button
              text="Lihat Produk"
              link="/product"
              variant="outline"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;