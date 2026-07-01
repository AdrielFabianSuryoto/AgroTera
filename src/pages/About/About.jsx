import "./About.css";

import PageBanner from "../../components/PageBanner/PageBanner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import biochar from "../../assets/images/biochar.jpeg";

function About() {
  return (
    <>
      <PageBanner
        title="Tentang AgroTerra"
        description="AgroTerra hadir sebagai solusi inovatif dalam memanfaatkan limbah jerami menjadi biochar untuk mendukung pertanian yang lebih produktif dan berkelanjutan."
      />

      <section className="about">

        <div className="container">

          <div className="about__content">

            <div className="about__image">

              <img
                src={biochar}
                alt="Biochar AgroTerra"
              />

            </div>

            <div className="about__text">

              <SectionTitle
                center={false}
                subtitle="About Us"
                title="Inovasi untuk Pertanian Berkelanjutan"
              />

              <p>
                AgroTerra merupakan inovasi yang memanfaatkan limbah jerami
                menjadi biochar sebagai solusi ramah lingkungan untuk
                meningkatkan kualitas tanah. Dengan mengolah limbah yang
                sebelumnya sering dibakar, AgroTerra membantu menciptakan
                pertanian yang lebih efisien, produktif, dan berkelanjutan.
              </p>

              <div className="about__vision">

                <div>

                  <h3>Visi</h3>

                  <p>
                    Menjadi solusi pertanian berkelanjutan melalui
                    pemanfaatan limbah biomassa menjadi produk yang
                    bernilai bagi lingkungan dan masyarakat.
                  </p>

                </div>

                <div>

                  <h3>Misi</h3>

                  <ul>

                    <li>Mengurangi limbah jerami melalui pemanfaatan biochar.</li>

                    <li>Mendukung peningkatan kualitas tanah pertanian.</li>

                    <li>Mendorong praktik pertanian yang ramah lingkungan.</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default About;