import "./Benefits.css";

import PageBanner from "../../components/PageBanner/PageBanner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import CTA from "../../components/CTA/CTA";

import {
  FaLeaf,
  FaTint,
  FaSeedling,
  FaRecycle,
  FaFire,
  FaArrowRight,
} from "react-icons/fa";

function Benefits() {
  return (
    <>
      <PageBanner
        title="Manfaat Biochar"
        description="Biochar memberikan berbagai manfaat bagi tanah dan lingkungan melalui pemanfaatan limbah jerami secara berkelanjutan."
      />

      {/* BENEFITS */}

      <section className="benefits">

        <div className="container">

          <SectionTitle
            subtitle="Benefits"
            title="Manfaat Biochar bagi Pertanian"
            description="Biochar membantu meningkatkan kualitas tanah sekaligus mendukung pertanian yang lebih ramah lingkungan."
          />

          <div className="benefits__grid">

            <FeatureCard
              icon={<FaSeedling />}
              title="Meningkatkan Kesuburan"
              description="Membantu memperbaiki struktur tanah sehingga tanaman dapat tumbuh lebih optimal."
            />

            <FeatureCard
              icon={<FaTint />}
              title="Menjaga Kelembapan"
              description="Meningkatkan kemampuan tanah dalam menyimpan air lebih lama."
            />

            <FeatureCard
              icon={<FaRecycle />}
              title="Mengurangi Limbah"
              description="Jerami yang sebelumnya dibakar dimanfaatkan kembali menjadi produk yang bermanfaat."
            />

            <FeatureCard
              icon={<FaLeaf />}
              title="Ramah Lingkungan"
              description="Mengurangi emisi karbon dan mendukung pertanian berkelanjutan."
            />

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="process">

        <div className="container">

          <SectionTitle
            subtitle="Process"
            title="Proses Pembuatan Biochar"
            description="Limbah jerami diolah menjadi biochar melalui proses pirolisis sebelum dimanfaatkan kembali pada lahan pertanian."
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

export default Benefits;