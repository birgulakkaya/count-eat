import { Link } from "react-router-dom";
import "./BusinessSection.css";

const BusinessSection = () => {
  return (
    <div className="MainBusiness flex flex-col p-10">
      <div className="ml-4 w-1/2 items-start justify-start flex flex-col pl-10">
        <p className=" text-white text-6xl font-bold leading-snug pt-10">
          Count&Eat İşinizi Kolaylaştırır ve İşletmenizi Güçlendirir.
        </p>
        <p className="text-white text-xl pt-20">
          Count&Eat Pro, sağlık ve fitness alanındaki profesyonellere, hizmet
          yelpazelerini zenginleştirmeleri ve müşterilere daha etkin bir şekilde
          hizmet vermeleri için imkan sağlar.”
        </p>
      </div>
      <div className="w-1/2 ml-12 flex gap-8">
        <Link to={"/login"}>
          <button className="create-accountt">
            COUNT&EAT PRO&lsquo;YA GÖZ ATIN
          </button>
        </Link>
        <Link to={"/register"}>
          <button className="create-accountt">ÜCRETSİZ HESAP OLUŞTUR !</button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessSection;
