import "./FourSteps.css";
import FirstStep from "../../../Assets/ExplorePageImages/step1.png";
import SecondStep from "../../../Assets/ExplorePageImages/step2.png";
import ThirdStep from "../../../Assets/ExplorePageImages/step3.png";
import FourthStep from "../../../Assets/ExplorePageImages/step4.png";

const FourSteps = () => {
  return (
    <div className="FourStepsMain">
      <div className="wrappertitle">
        <div className="title">Sadece 4 küçük adımla yolculuğa başlayalım.</div>
      </div>
      <div className="steps">
        <div className="step-title">1. OLUŞTUR</div>
        <div className="step">
          <div className="step-image">
            <figure>
              <img src={FirstStep} alt="" />
            </figure>
          </div>
          <div className="step-description">
            Bize kendinizden bahsederek yola koyulalım.Günlük kalori
            miktarınızı,beslenme tarzınızı ve öğün sayınızı hesaplayıcımıza
            belirtin.Oluştur butonuna tıklamanızın ardından sizin
            tercihlerinizden yola çıkarak ihtiyaçlarınıza özel öğün planları
            karşınıza çıkacaktır.Ayarladığınız kişisel tercihleri her zaman
            değişebileceğinizi unutmayın. <br /> <br />
            <i>
              *Günlük kalori ihtiyacınızı bilmiyorsanız panik yapmanıza gerek
              yok.Kalori kısmında yer alan ”Emin Değilim” butonu bu konuda size
              yardımcı olmak için tasarlanmıştır.
            </i>
          </div>
        </div>
        <div className="step-title-end ">2. GÖZDEN GEÇİR</div>
        <div className="step reverse">
          <div className="step-description">
            Oluşturduğunuz öğün planına gözatın ve her şeyin istediğiniz gibi
            olup olmadığını kontrol edin.Planınız oluşturulduğunda günlük makro
            ve mikrolarınızı kontrol edebilir,tercih etmediğiniz bir yemek
            gördüğünüzde onu değiştirebilirsiniz.İsterseniz tüm günün öğünlerini
            ”yenile” butonumuz yardımıyla baştan planlayabilirsiniz.
          </div>
          <div className="step-image">
            <figure>
              <img src={SecondStep} alt="" />
            </figure>
          </div>
        </div>
        <div className="step-title">3. PİŞİR VE TÜKET</div>
        <div className="step">
          <div className="step-image">
            <figure>
              <img src={ThirdStep} alt="" />
            </figure>
          </div>
          <div className="step-description">
            Öğün planlamanın stresini yaşamadan nefis yemeklerinizin tadını
            çıkarın.Böylece hem daha sağlıklı yediğinizin farkına varacak,aynı
            zamanda da günlük hayatınıza daha fazla zaman ve enerji
            kazandıracaksınız.
          </div>
        </div>
        <div className="step-title-end ">4. HEDEFE ODAKLAN</div>
        <div className="step reverse">
          <div className="step-description">
            Tercihlerinizi optimize edip yeni öğünler keşfedin ya da favori
            öğünlerinizi tekrarlayın.Makro ve mikrolarınızı gözden
            geçirin.Sağlıklı yaşam ve kilo kontrolü konularında sağlam adımlar
            attığınızı görün.Sonunda hedefinizin mümkün olduğunu anlayacak ve
            ona ulaştığınızı göreceksiniz.
          </div>
          <div className="step-image">
            <figure>
              <img src={FourthStep} alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="information">
        <b>Bilgi Köşesi</b> <br />
        “Yapılan{" "}
        <a href="https://europepmc.org/article/med/8788323" target="_blank">
          bağımsız bir çalışma
        </a>
        , insanların diyet programlarını benimsemelerinde ve bu programlara uzun
        süre bağlı kalmalarında, önceden planlanmış yemek programları ve
        alışveriş listelerinin kritik öneme sahip olduğunu ortaya koymuştur.”
      </div>
    </div>
  );
};

export default FourSteps;
