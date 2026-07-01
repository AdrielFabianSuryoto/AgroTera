import "./Contact.css";

import PageBanner from "../../components/PageBanner/PageBanner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <PageBanner
        title="Hubungi Kami"
        description="Kami siap membantu Anda mendapatkan informasi lebih lanjut mengenai produk biochar AgroTerra."
      />

      <section className="contact">

        <div className="container">

          <SectionTitle
            subtitle="Contact"
            title="Mari Terhubung Dengan Kami"
            description="Silakan hubungi kami melalui informasi kontak berikut atau kirimkan pesan melalui formulir di samping."
          />

          <div className="contact__wrapper">

            {/* LEFT */}

            <div className="contact__info">

              <div className="contact__item">

                <FaEnvelope />

                <div>

                  <h3>Email</h3>

                  <p>agroterra@gmail.com</p>

                </div>

              </div>

              <div className="contact__item">

                <FaWhatsapp />

                <div>

                  <h3>WhatsApp</h3>

                  <p>+62 882 3356 8725</p>

                </div>

              </div>

              <div className="contact__item">

                <FaMapMarkerAlt />

                <div>

                  <h3>Alamat</h3>

                  <p>Salatiga, Jawa Tengah, Indonesia</p>

                </div>

              </div>

              <div className="contact__item">

                <FaClock />

                <div>

                  <h3>Jam Operasional</h3>

                  <p>Senin - Jumat | 08.00 - 16.00 WIB</p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <form className="contact__form">

              <input
                type="text"
                placeholder="Nama"
              />

              <input
                type="email"
                placeholder="Email"
              />

              <textarea
                rows="6"
                placeholder="Pesan"
              ></textarea>

              <button type="submit">

                Kirim Pesan

              </button>

            </form>

          </div>

        </div>

      </section>

    </>
  );
}

export default Contact;