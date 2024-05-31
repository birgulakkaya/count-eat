import { Link } from "react-router-dom";
import Karpuz from "./image.png";
import Havuc from "./image3.png";
import "./Notfound.css";

const Notfound = () => {
  return (
    <>
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>404</h1>
          <p>Aradığınız sayfa bulunamadı.</p>
          <p>Belki biraz su içmek iyi gelebilir! 💧</p>
          <Link to={"/"}>
            <button className="create-account">Anasayfaya Dön</button>
          </Link>
          <img className="karpuz" src={Karpuz} alt="" />
        </div>
        <img className="havuc" src={Havuc} alt="" />
      </div>
    </>
  );
};

export default Notfound;
