import "./CountProAdvantages.css";
import PieChart from "../../../Assets/ForProfessionelsImages/PieChart.png";
import Phone from "../../../Assets/ForProfessionelsImages/Smartphone.png";
import Recycle from "../../../Assets/ForProfessionelsImages/Recycle.png";
import EMail from "../../../Assets/ForProfessionelsImages/Mail.png";

const CountProAdvantages = () => {
  return (
    <div className="advantagesmain">
      <div>
        <h1 className="mt-10 mb-10 flex justify-center text-5xl font-extrabold text-green-800">
          Count&Eat Pro&lsquo;nun Avantajları
        </h1>
        <div className="flex flex-wrap gap-8 justify-center items-center mb-12">
          <div className="w-5/12 flex">
            <img className="proimg" src={PieChart} alt="" />
            <div className="flex  flex-col justify-center ml-4">
              <p className="text-green-800 font-extrabold text-2xl mb-4">
                Hedeflere göre öğün planlayın.
              </p>
              <p>
                Çeşitli kalori ve makro hedeflerine,beslenme tercihlere ve
                kısıtlamalara göre özelleştirilebilir planlar tasarlayın.
              </p>
            </div>
          </div>
          <div className="w-5/12 flex">
            <img className="proimg" src={Recycle} alt="" />
            <div className="flex  flex-col justify-center ml-4">
              <p className="text-green-800 font-extrabold text-2xl mb-4">
                Tariflerinizi yeniden yapmak için kaydedin.
              </p>
              <p>Geçmiş seçimlere dayalı öğünler ve tarifler oluşturun.</p>
            </div>
          </div>
          <div className="w-5/12 flex">
            <img className="proimg" src={Phone} alt="" />
            <div className="flex  flex-col justify-center ml-4">
              <p className="text-green-800 font-extrabold text-2xl mb-4">
                Müşterilerinize Uygulama Erişimi Sağlayın.
              </p>
              <p>
                Müşterilerinizin web ve mobil uygulamalarımızda yemek planlarını
                takip etmelerine olanak sağlayın.
              </p>
            </div>
          </div>
          <div className="w-5/12 flex">
            <img className="proimg" src={EMail} alt="" />
            <div className="flex  flex-col justify-center ml-4">
              <p className="text-green-800 font-extrabold text-2xl mb-4">
                Planları Müşterilerinize E-postayla Gönderin.
              </p>
              <p>
                Müşterilerinize en son öğün planlarını ve tariflerini e-posta
                veya PDF yoluyla gönderin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountProAdvantages;
