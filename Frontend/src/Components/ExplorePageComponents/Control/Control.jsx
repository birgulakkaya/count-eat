import ControlImg from "../../../Assets/ExplorePageImages/son.png";
import { Link } from "react-router-dom";
import "./Control.css";

const Control = () => {
  return (
    <div className="ControlDiv">
      <div className="Article">
        <p className="control-title">Beslenmenizi Kontrol Altına Alın</p>
        <p className="control-desc">
          Count&Eat’i ücretsiz olarak deneyin ve üye olarak tüm avantajlardan
          faydalanın.
        </p>
        <Link to={"/register"}>
          <button className="create-account">Ücretsiz Hesap Oluştur</button>
        </Link>
      </div>
      <div className="Control-Image">
        <figure>
          <img src={ControlImg} />
        </figure>
      </div>
    </div>
  );
};

export default Control;
