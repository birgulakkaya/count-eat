import "./JaneDoeSection.css";
import JaneDoe from "../../../Assets/ForProfessionelsImages/janedoe.png";
import ArrowDown from "../../../Assets/ForProfessionelsImages/arrowdown.png";

const JaneDoeSection = () => {
  return (
    <div className="MainJaneDoe">
      <div className="flex gap-8">
        <div className="w-1/3 ml-10 ">
          <div className="janeimg flex  z-0">
            <img src={JaneDoe} alt="" />
          </div>
          <div className="text-green-700 text-lg -mt-16 bg-slate-50  border-4 rounded-xl p-8 border-green-800 w-96 flex flex-col absolute z-50">
            <p className="text-5xl">“</p>Count&Eat, hayat değiştiren ve
            inanılmaz kolaylık sağlayan bir site. Öğün planlama hizmeti sunduğum
            müşteri sayısı üzerinde büyük bir etkisi var.İşimin genel olarak
            büyümesinde ve başarılı olmasında önemli bir faktör oldu. <br />
            <p className="flex justify-end mt-4">Jane Doe, Diyetisyen</p>
          </div>
        </div>
        <div className="w-2/3">
          <div>
            <p className="text-green-800 text-6xl font-extrabold leading-tight">
              Öğün planlama hizmetlerinizi kolaylaştırıyoruz...
            </p>
            <p className="text-green-700 text-2xl mt-8">
              Beslenme uzmanları ve fitness antrenörlerinin tümü, konu
              müşterilerinin ve sağlık hedeflerine ulaşması olduğunda diyetin
              önemini anlıyor.
            </p>
            <p className="text-green-700 text-2xl mt-8 mb-14">
              Count&Eat ile dakikalar içinde besleyici yemek planları
              oluşturabilirsiniz. Artık yiyecekleri tek tek seçmeye veya
              karmaşık hesaplara gerek yok.
            </p>
            <p className="text-green-800 text-6xl font-extrabold mb-10">
              ... ve çeşitlendiriyoruz.
            </p>
            <p className="text-green-700 text-2xl mt-8 mb-14">
              Her planı müşterilerinizin bireysel ihtiyaçlarına göre
              özelleştirme olanağına sahipsiniz. Yiyecekleri seçmeleri, beslenme
              bilgilerini görmeleri ve ilerleyişlerini farketmeleri için onlara
              doğrudan erişim izni verebilirsiniz.
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JaneDoeSection;
