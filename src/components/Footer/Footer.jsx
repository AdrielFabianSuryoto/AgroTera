import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Footer.css";
import logo from "../../assets/images/logo.jpeg";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer__container">

        {/* ================= LEFT ================= */}

        <div className="footer__brand">

          <div className="footer__logo">

            <img src={logo} alt="AgroTera Logo" />

            <h2>AgroTera</h2>

          </div>

          <p>
            AgroTera menghadirkan solusi inovatif dengan mengubah limbah
            jerami menjadi biochar berkualitas untuk meningkatkan
            kesuburan tanah dan mendukung pertanian berkelanjutan.
          </p>

        </div>

        {/* ================= MENU ================= */}

        <div className="footer__links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/product">Product</Link>

          <Link to="/benefits">Benefits</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* ================= CONTACT ================= */}

        <div className="footer__contact">

          <h3>Contact</h3>

          <div>

            <FaEnvelope />

            <span>agrotera@gmail.com</span>

          </div>

          <div>

            <FaWhatsapp />

            <span>+62 812-3456-7890</span>

          </div>

          <div>

            <FaMapMarkerAlt />

            <span>Salatiga, Indonesia</span>

          </div>

        </div>

        {/* ================= SOCIAL ================= */}

        <div className="footer__social">

          <h3>Follow Us</h3>

          <div className="footer__social-icons">

            <a href="#">

              <FaInstagram />

            </a>

            <a href="#">

              <FaWhatsapp />

            </a>

          </div>

        </div>

      </div>

      <div className="footer__bottom">

        <p>
          © {new Date().getFullYear()} AgroTera. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;