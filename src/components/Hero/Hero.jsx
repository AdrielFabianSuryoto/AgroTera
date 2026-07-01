import Button from "../Button/Button";
import "./Hero.css";

function Hero({ image }) {
  return (
    <section className="hero">

      <div className="container hero__container">

        {/* ================= LEFT ================= */}

        <div className="hero__content">

          <span className="hero__badge">
            🌱 Solusi Pertanian Berkelanjutan
          </span>

          <h1 className="hero__title">

            <span className="hero__brand">
              AGROTERRA
            </span>

            Ubah Jerami Menjadi
            <br />

            <span className="hero__highlight">
              Solusi,
            </span>

            Pulihkan Kesuburan Tanah

          </h1>

          <p className="hero__description">

            Membantu petani meningkatkan produktivitas sawah melalui biochar
            dari limbah jerami yang ramah lingkungan, hemat biaya,
            dan berkelanjutan.

          </p>

          <div className="hero__buttons">

            <Button
              text="Lihat Produk"
              link="/product"
            />

            <Button
              text="Tentang Kami"
              variant="outline"
              link="/about"
            />

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="hero__image">

          <div className="hero__blob"></div>

          <img
            src={image}
            alt="Biochar AgroTerra"
          />

          <div className="hero__card hero__card--top">

            🌱 Eco Friendly

          </div>

          <div className="hero__card hero__card--middle">

            ♻️ Zero Waste

          </div>

          <div className="hero__card hero__card--bottom">

            🌾 Sustainable Farming

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;