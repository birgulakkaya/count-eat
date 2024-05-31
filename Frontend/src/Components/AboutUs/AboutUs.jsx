import "./AboutUs.css";
import Logo from "../../Assets/Logo/logo.png";

const AboutUs = () => {
  return (
    <>
      <div className="support-maindiv">
        <div className="support-titlediv">
          <p className="support-title">Hakkımızda</p>
        </div>
        <div className="content-div">
          <div className="enterance-desc">
            Count&Eat bir sağlıklı beslenme platformu olup çeşitli besinleri, bu
            besinlerin özelliklerini ve diyet türlerine göre özgürce seçim
            yapabilmeyi sizin hizmetinize sunar.Bizim, sağlık ve beslenme
            alanlarında eğitim almış uzmanların aksine size bir “reçete”
            yazmadığımızı hatırlatmak isteriz. Herhangi bir web sitesi veya
            uygulamanın da bunu yapabileceğini söylemek çok gerçekçi olmaz.
            Bunun yerine, kendi tercihleriniz dahilinde hızlı bir şekilde plan
            oluşturmanıza olanak sağlıyoruz. Basit ve popüler olan beslenme
            tarzlarını seçiminize sunuyor ve bunları dilediğiniz şekilde
            değiştirmenize yardımcı oluyoruz. Beslenme düzeninizi,
            belirlediğiniz hedeflere ulaşacak biçimde sürdürmeniz için odak
            kaybını elimizden geldiğince azaltmak ana fikrimizdir.
          </div>
          <div className="support-image">
            <figure>
              <img src={Logo} />
            </figure>
          </div>
        </div>
      </div>
      <div className="second-about">
        4 kişilik ekibi ile 7/24 destek operasyonunu sürdüren ve sürekli Ar-Ge
        politikası ile kendi altyapı yatırımlarını yöneten Count&Eat, 2024
        yılında Türkiye&lsquo;de ilk kez yeni domain uzantıları için ön talep
        sürecini başlatacak ve bu süreçte 1 milyonun üzerinde talep toplayarak
        Avrupada en fazla talep toplayan şirket ünvanını kazanmak için rekabet
        edecektir. Count&Eat aynı zamanda .tr uzantılarının Türkiye’deki yetkili
        operatörlerinden biridir. .tr uzantılı domain kaydediciler arasında en
        fazla işlem hacmine sahip firmadır. Count&Eat tamamen kendi bünyesinde
        bulunan yazılım ekibi ile geliştirdiği Domain Management (Domain
        Yönetimi) otomasyonuna sahiptir. Bu otomasyon sayesinde kullanıcılarına
        dünya standartlarında online domain kaydetme ve tüm domain
        operasyonlarını web tabanlı ara yüzümüzden yönetebilme özgürlüğü
        sunmaktadır. Aynı arayüze entegre çalışan hosting otomasyon sistemi ile
        hosting kullanım kolaylığı ve tek arayüzden çoklu hizmet yönetimi
        sağlama kabiliyetinde olan firma, 2024 yılında tüm barındırma
        altyapısını cloud (bulut) üzerine taşımış ve bu sayede mnimum
        maliyet/maksimum performans ölçeğini tüm müşterilerine
        ulaştırabilmiştir.
      </div>
    </>
  );
};

export default AboutUs;
