// Footer.jsx
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogo } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="social-media">
          <ul className="social-media-icons">
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <PiInstagramLogo
                  style={{
                    width: "105px",
                    height: "75px",
                    marginBottom: "20px",
                  }}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <FaXTwitter
                  style={{
                    width: "105px",
                    height: "75px",
                    marginBottom: "20px",
                  }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <AiOutlineYoutube
                  style={{
                    width: "105px",
                    height: "75px",
                    marginBottom: "20px",
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="category">
          <ul className="category-item-list">
            <li className="li-header">Kategoriler</li>
            <hr />
            <Link to={"/explore"}>
              <li>Keşfet</li>
            </Link>
            <Link to={"/explore"}>
              <li>Besinler</li>
            </Link>
            <Link to={"/diettypes"}>
              <li>Diyet Türleri</li>
            </Link>
            <Link to={"/forproffesionals"}>
              <li>Profesyoneller İçin</li>
            </Link>
            <Link to={"/blogs"}>
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="institutional">
          <ul className="institutional-item-list">
            <li className="li-header">Kurumsal</li>
            <hr />
            <Link to={"/aboutus"}>
              <li>Hakkımızda</li>
            </Link>
            <Link to={"/terms"}>
              <li>Kullanım Koşulları</li>
            </Link>
            <Link to={"/policy"}>
              <li>Gizlilik Politikası</li>
            </Link>
            <Link to={"/support"}>
              <li>Destek</li>
            </Link>
            <Link to={"/dmca"}>
              <li>DMCA</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer-down">
        <p>
          <span>© 2024 </span>
          <span>Count&Eat. Tüm hakları saklıdır.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
