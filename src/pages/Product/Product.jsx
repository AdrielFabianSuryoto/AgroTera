import "./Product.css";

import PageBanner from "../../components/PageBanner/PageBanner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import CTA from "../../components/CTA/CTA";

import biochar from "../../assets/images/biochar.jpeg";

import {
  FaLeaf,
  FaTint,
  FaSeedling,
  FaRecycle,
} from "react-icons/fa";

function Product() {
  return (
    <>
      <PageBanner
        title="Produk Biochar"
        description="Biochar AgroTerra merupakan hasil pemanfaatan limbah jerami yang berfungsi sebagai pembenah tanah untuk mendukung pertanian yang lebih produktif dan berkelanjutan."
      />

      {/* Product */}

      <section className="product">

        <div className="container">

          <div className="product__content">

            <div className="product__image">

              <img
                src={biochar}
                alt="Biochar AgroTerra"
              />

            </div>

            <div className="product__text">

              <SectionTitle
                center={false}
                subtitle="Our Product"
                title="Biochar dari Limbah Jerami"
              />

              <p>
                Biochar AgroTerra dihasilkan melalui proses pirolisis jerami
                sehingga menghasilkan material kaya karbon yang bermanfaat
                untuk meningkatkan kualitas tanah. Produk ini cocok digunakan
                pada berbagai jenis lahan pertanian sebagai solusi alami
                yang ramah lingkungan.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Advantages */}

      <section className="advantages">

        <div className="container">

          <SectionTitle
            subtitle="Advantages"
            title="Keunggulan Biochar AgroTerra"
            description="Menghadirkan manfaat nyata bagi tanah dan lingkungan melalui pemanfaatan limbah jerami."
          />

          <div className="advantages__grid">

            <FeatureCard
              icon={<FaLeaf />}
              title="Ramah Lingkungan"
              description="Mengurangi pembakaran limbah jerami sehingga membantu menjaga kualitas udara."
            />

            <FeatureCard
              icon={<FaTint />}
              title="Menjaga Kelembapan"
              description="Membantu tanah menyimpan air lebih lama sehingga tanaman tumbuh lebih optimal."
            />

            <FeatureCard
              icon={<FaSeedling />}
              title="Meningkatkan Kesuburan"
              description="Mendukung pertumbuhan tanaman melalui perbaikan struktur tanah."
            />

            <FeatureCard
              icon={<FaRecycle />}
              title="Memanfaatkan Limbah"
              description="Mengubah limbah pertanian menjadi produk yang bernilai dan bermanfaat."
            />

          </div>

        </div>

      </section>

      <CTA />

    </>
  );
}

export default Product;