import AdventureImg from "../../../Assets/HomePageImages/FeaturesImg/adventure.png";
import DisposalImg from "../../../Assets/HomePageImages/FeaturesImg/disposal.png";
import ScheduleImg from "../../../Assets/HomePageImages/FeaturesImg/schedule.png";
import WebDesignImg from "../../../Assets/HomePageImages/FeaturesImg/web-design.png";
import FeaturesItem from "./FeaturesItem";
import { Link } from "react-router-dom";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="features-title">
        <p>Hedeflerinize ulaşmak için bu yolculukta sizin yanınızdayız.</p>
      </div>
      <div className="features-list">
        <div className="features-item">
          <FeaturesItem
            image={AdventureImg}
            title="İstediğin tarzda beslen ya da kendi tarzını yarat."
            description="Kendi ihtiyaçlarınıza göre popüler beslenme tarzlarını seçebilir ve ihtiyaçlarınızı ona göre ayarlayabilirsiniz."
          />
          <FeaturesItem
            image={DisposalImg}
            title="Yemek israfını en aza indir."
            description="Diyetteki öğünlerinizi planlamak elinizdeki besinleri daha optimize şekilde kullanmaya olanak sağlar.Bu şekilde daha az besin israf edilir ve daha ekonomik bir diyet sürdürsünüz."
          />
          <FeaturesItem
            image={ScheduleImg}
            title="Öğün zamanları gelmeden planın hazır olsun."
            description="Zamanın ötesinde plan yapabilir ve kendi takviminizi oluşturabilirsiniz.Bu sayede öğünleriniz aceleye gelmez ve planınıza sadık kalırsınız."
          />

          <FeaturesItem
            image={WebDesignImg}
            title="Bilimsel perspektifte bir bakış açısı edinin."
            description="Blog sayfası, sağlık ve beslenme konularında  özenle seçilmiş birçok makale içermektedir. Burada, sağlıklı yaşam ve doğru beslenme konularında güvenilir bilgiler bulabilir ve anında erişim sağlayabilirsiniz."
          />
        </div>
      </div>
      <div>
        <Link to={"/register"}>
          <button className="create-account">Ücretsiz Hesap Oluştur</button>
        </Link>
      </div>
    </div>
  );
};

export default Features;
