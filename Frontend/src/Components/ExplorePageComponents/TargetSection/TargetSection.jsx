import TargetImage from "../../../Assets/ExplorePageImages/ilk.png";
import { Link } from "react-router-dom";
import "./TargetSection.css";

const TargetSection = () => {
  return (
    <>
      <div className="target-container">
        <div className="wrapper">
          <div className="articles">
            <p className="section-title">
              Hedeflerinize Ulaşan Yolu Birlikte Keşfedelim.
            </p>
            <p className="subtitle">
              Count&Eat, sağlıklı beslenme ve kilo kontrolü alanında en önemli
              iki konuda size yardımcı olur:
            </p>
            <p className="props">
              1.Öğün planlamalarınızı zahmetsiz bir işe dönüştürür ve size
              tonlarca zaman kazandırır.
            </p>
            <p className="props">
              2.Besin ve tarif çeşitliliği sayesinde diyetlerin monoton
              gidişatını engeller.
            </p>
          </div>
          <div className="target-image">
            <div className="image-wrapper">
              <figure>
                <img src={TargetImage} />
              </figure>
              <span className="image-span">
                Diyetiniz tamamen sizin elinizde!
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lets">
        <span className="lets-article">
          Hadi ! Count&Eat’in size bu konuda sunduklarına göz atalım !
        </span>
        <Link to={"/register"}>
          <button className="create-account">Ücretsiz Hesap Oluştur</button>
        </Link>
      </div>
    </>
  );
};

export default TargetSection;
