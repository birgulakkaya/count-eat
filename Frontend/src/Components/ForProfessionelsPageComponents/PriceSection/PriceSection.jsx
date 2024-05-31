import { Link } from "react-router-dom";
import "./PriceSection.css";

const PriceSection = () => {
  return (
    <>
      <div className="MainPrice flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-5xl ">
          <div className="flex flex-col ">
            <h1 className="text-green-800 text-5xl font-extrabold pl-12">
              Size En Uygun Planı Seçin.
            </h1>
            <p className="text-green-700 text-base font-semibold mb-4 mt-8">
              <b className="text-xl"> Kontrol :</b> Öğün planı PDF&lsquo;leri
              oluşturmayı ve bunları müşterilerinize göndermeyi tercih
              ediyorsanız.
            </p>
            <p className="text-green-700 text-base font-semibold">
              <b className="text-xl">İşbirliği :</b> Müşterilerinizi daha fazla
              dahil etmeyi tercih ediyorsanız.
            </p>
          </div>
        </div>
      </div>
      <div className="PriceDiv w-full mt-12 flex ">
        <div className="Pricess w-1/3  flex flex-col items-center border-r-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-extrabold underline mb-2 pt-8">
              Kontrol
            </h1>
            <p className="text-4xl font-extrabold">59₺</p>
            <p className="italic font-extralight ">Aylık faturalandırılır.</p>
          </div>
          <div className="mb-2 mt-4 border-b-4 border-t-4 w-full py-8 flex justify-center items-center">
            Müşterilerinizin öğün planlarını PDF şeklinde gönderin.
          </div>
          <div className="mb-2  border-b-4 w-full py-8 flex justify-center items-center pl-10  ">
            Her müşteri için makrolarından besin kısıtlamalarına kadar tüm
            ayarları düzenleyin ve kişiye özgü planlar oluşturun.
          </div>
          <div className="mb-2  border-b-4 w-full py-8 flex justify-center items-center">
            Yeni tarifler ekleyin ve belirli öğünler için onları kaydedin.
          </div>
          <div>
            <Link to={"/login"}>
              <button className="create-account">HEMEN BAŞLAYIN!</button>
            </Link>
          </div>
        </div>
        <div className="Pricess w-1/3 flex flex-col items-center border-r-4">
          <div className="w-72">
            <div className="bg-green-800 rounded-2xl -mt-12 mb-4 flex flex-col items-center">
              <h1 className="text-4xl font-extrabold underline mb-2">
                İşbirliği
              </h1>
              <p className="text-4xl font-extrabold">99₺</p>
              <p className="italic font-extralight">Aylık faturalandırılır.</p>
            </div>
          </div>
          <div className="mb-2 border-b-4 w-full">
            <p className=" flex justify-center items-center pb-4">
              Her şey sizin kontrolünüzde.
            </p>
          </div>
          <div className="border-b-4 w-full flex justify-center items-center py-8">
            Müşterilerinize websitesi veya uygulama erişimi verebilirsiniz.
          </div>
          <div className="border-b-4 w-full flex justify-center items-center py-8">
            Tüm kullanıcılar için özel erişim izinleri.
          </div>
          <div className="border-b-4 w-full flex justify-center items-center py-8">
            Müşterilerinizin programlarını izleyebilir, onlara feedback
            verebilirsiniz.
          </div>
          <div className="py-8">
            <Link to={"/login"}>
              <button className="create-account">HEMEN BAŞLAYIN!</button>
            </Link>
          </div>
        </div>
        <div className="Pricess w-1/3  flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-extrabold underline mb-2 pt-8">
              Kulüp
            </h1>
            <p className="text-4xl font-extrabold">Özel</p>
            <p className="italic font-extralight">Aylık faturalandırılır.</p>
          </div>
          <div className="mb-2 mt-4 border-b-4 border-t-4 w-full py-16 flex justify-center items-center">
            100&lsquo;den fazla müşteriniz mi var ?
          </div>
          <div className="mb-2  border-b-4 w-full py-16 flex justify-center items-center">
            Özel bir program için bizimle iletişime geçin.
          </div>
          <div>
            <Link to={"/support"}>
              <button className="create-account">BİZE ULAŞIN</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-20 mt-10">
        <div className="border-green-800 border-l-8 descprice flex justify-center p-10  mb-10 text-xl">
          Kontrol planıyla müşterilerinizin C&E uygulamasına veya web sitesine
          giriş yapma seçeneği yoktur. Yemek planlarını e-posta veya PDF yoluyla
          onlarla paylaşabilirsiniz ve onlara uygulama erişimi vermek
          istiyorsanız istediğiniz zaman İşbirliği planına yükseltebilirsiniz.
        </div>
      </div>
      <div className="px-20 text-xl text-green-800 mb-8">
        &quot;Sonuçlar söz konusu olduğunda beslenme takibinin önemini anlayan
        profesyonel bir eğitmen olarak müşterilerim için beslenme ve yemek
        planlama yazılımlarını çok aradım.Sonunda Count&Eat ile karşılaştım ve
        kullanım kolaylığı karşısında şoka uğradım. Kişiselleştirme potansiyeli
        ve maliyet etkinliği konularında türünün en iyisi..&quot;
        <p className="flex justify-end">- John Doe, Fitness Eğitmeni</p>
      </div>
    </>
  );
};

export default PriceSection;
