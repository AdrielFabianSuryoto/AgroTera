import "./Home.css";

import Hero from "../../components/Hero/Hero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import CTA from "../../components/CTA/CTA";

import biochar from "../../assets/images/biochar.jpeg";

import {
  FaRecycle,
  FaLeaf,
  FaTint,
  FaSeedling,
  FaFire,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <Hero image={biochar} />

      {/* WHY AGROTERRA */}

      <section className="why">

        <div className="container">

          <SectionTitle
            subtitle="Why AgroTerra"
            title="Mengapa Memilih AgroTerra?"
            description="AgroTerra mengubah limbah jerami menjadi biochar yang bermanfaat untuk meningkatkan kualitas tanah dan mendukung pertanian yang lebih berkelanjutan."
          />

          <div className="why__grid">

            <FeatureCard
              icon={<FaRecycle />}
              title="Mengurangi Limbah"
              description="Jerami yang biasanya dibakar diolah kembali menjadi biochar yang memiliki nilai guna."
            />

            <FeatureCard
              icon={<FaLeaf />}
              title="Ramah Lingkungan"
              description="Mengurangi emisi dari pembakaran jerami serta menjaga kualitas lingkungan."
            />

            <FeatureCard
              icon={<FaTint />}
              title="Menjaga Kelembapan"
              description="Biochar membantu tanah menyimpan air lebih lama sehingga tanaman lebih optimal."
            />

            <FeatureCard
              icon={<FaSeedling />}
              title="Meningkatkan Kesuburan"
              description="Membantu memperbaiki struktur tanah sehingga produktivitas lahan meningkat."
            />

          </div>

        </div>

      </section>

      {/* ABOUT BIOCHAR */}

      <section className="biochar">

        <div className="container">

          <div className="biochar__container">

            <div className="biochar__image">

              <img
                src={biochar}
                alt="Biochar"
              />

            </div>

            <div className="biochar__content">

              <SectionTitle
                center={false}
                subtitle="About Biochar"
                title="Apa Itu Biochar?"
              />

              <p>

                Biochar merupakan hasil pembakaran biomassa seperti jerami
                dengan sedikit oksigen (pirolisis). Biochar berfungsi sebagai
                pembenah tanah yang mampu meningkatkan kualitas tanah,
                menjaga kelembapan, serta mendukung pertumbuhan tanaman
                secara berkelanjutan.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="process">

        <div className="container">

          <SectionTitle
            subtitle="How It Works"
            title="Bagaimana AgroTerra Bekerja?"
            description="Jerami yang sebelumnya dianggap limbah diolah menjadi biochar yang siap dimanfaatkan kembali untuk lahan pertanian."
          />

          <div className="process__timeline">

            <div className="process__item">

              <FaSeedling />

              <h3>Jerami</h3>

            </div>

            <FaArrowRight className="process__arrow" />

            <div className="process__item">

              <FaFire />

              <h3>Pirolisis</h3>

            </div>

            <FaArrowRight className="process__arrow" />

            <div className="process__item">

              <FaRecycle />

              <h3>Biochar</h3>

            </div>

            <FaArrowRight className="process__arrow" />

            <div className="process__item">

              <FaLeaf />

              <h3>Tanah Subur</h3>

            </div>

          </div>

        </div>

      </section>

      <CTA />

    </>
  );
}

export default Home;