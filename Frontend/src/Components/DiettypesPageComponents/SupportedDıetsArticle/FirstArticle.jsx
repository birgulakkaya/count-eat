import Giris from "../../../Assets/DietTypesPageImages/giriskarpuz.png";
import { Link } from "react-router-dom";
import "./FirstArticle.css";

const FirstArticle = () => {
  return (
    <>
      <div className="first-maindiv">
        <div className="enterance-titlediv">
          <p className="enterance-title">Desteklediğimiz Diyet Türleri</p>
        </div>
        <div className="content-div">
          <div className="enterance-desc">
            Count&Eat birçok diyet türünü destekler ve sizin hizmetinize
            sunar.Bizim, sağlık ve beslenme alanlarında eğitim almış uzmanların
            aksine size bir “reçete” yazmadığımızı hatırlatmak isteriz. Herhangi
            bir web sitesi veya uygulamanın da bunu yapabileceğini söylemek çok
            gerçekçi olmaz. Bunun yerine, kendi tercihleriniz dahilinde hızlı
            bir şekilde plan oluşturmanıza olanak sağlıyoruz. Basit ve popüler
            olan beslenme tarzlarını seçiminize sunuyor ve bunları dilediğiniz
            şekilde değiştirmenize yardımcı oluyoruz. Beslenme düzeninizi,
            belirlediğiniz hedeflere ulaşacak biçimde sürdürmeniz için odak
            kaybını elimizden geldiğince azaltmak ana fikrimizdir. <br /> <br />
            Aşağıda daha önceden belirlediğimiz diyet türleri ile ilgili temel
            bilgileri paylaşıyoruz ancak bunların sizi kısıtlamasına izin
            vermeyin.
          </div>
          <div className="enterance-image">
            <figure>
              <img src={Giris} />
            </figure>
          </div>
        </div>
      </div>
      <div className="warning-content">
        <p className="warning-desc">
          Sayfalarca yazı okumak istemiyor olabilirsiniz. Hemen işe koyulmak
          için planlama kısmına geri dönün.
        </p>
        <Link to={"/"}>
          <button className="create-account">Planlayıcıya Git</button>
        </Link>
      </div>
      <div className="which-wrapper">
        <div className="whichdietdiv">
          <p className="which-desc">
            <p className="which-sub"> Hangi diyet tarzı bana uygun ?</p>
            <br />
            Başarılı bir diyet, takibini kolayca yapabildiğiniz ve ona sadık
            kaldığınız diyettir. Kabaca bir tanım yapmak gerekirse vücudunuza
            aldığınız kalori yaktığınız kaloriden daha az ise genellikle kilo
            verirsiniz;tam tersini yaptığınızda ise kilo alırsınız. Fakat farklı
            beslenme tarzları sizin için hedeflerinize varan yolu
            kolaylaştırabilir. Örneğin, Keto ve Paleo gibi düşük karbonhidrat
            içeren diyetler, daha uzun süre tokluk sağlayarak kalori alımınızı
            azaltmanıza yardımcı olabilir.Eğer porsiyonlarınızı kontrol etme
            konusunda iyiyseniz, besin seçimleriniz üzerindeki kısıtlamaları
            azaltabilir ve planınıza daha rahat uyum sağlayabilirsiniz. <br />{" "}
            <br />
            Her insanın vücudu farklı şekillerde reaksiyon verir. Bu yüzden
            yapabileceğiniz en iyi şey denemek ve neyin işe yarayıp yaramadığını
            görmektir. ”Count&Eat” bu süreci kolaylaştırmak için tasarlanmış bir
            araçtır.
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstArticle;
