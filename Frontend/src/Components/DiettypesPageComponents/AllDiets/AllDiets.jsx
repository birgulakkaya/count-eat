import Keto from "../../../Assets/DietTypesPageImages/ketoresim.png";
import Makro from "../../../Assets/DietTypesPageImages/makroresim.png";
import Vejeteryan from "../../../Assets/DietTypesPageImages/vegetarianresim.png";
import Vegan from "../../../Assets/DietTypesPageImages/vegan.png";
import Paleo from "../../../Assets/DietTypesPageImages/paleo.png";
import Akdeniz from "../../../Assets/DietTypesPageImages/akdeniz.png";
import Lowkarb from "../../../Assets/DietTypesPageImages/dusukkarb.png";
import Lowfat from "../../../Assets/DietTypesPageImages/dusukyag.png";
import HighPro from "../../../Assets/DietTypesPageImages/yuksekpro.png";
import { useState } from "react";
import "./AllDiets.css";

const AllDiets = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const handleSubMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="main-alldiets">
      <div className="AllDiets-Container">
        <div className="category-diet">
          <div className="category-list">
            <ul>
              <li onClick={() => toggleDropdown("keto")}>
                Ketojenik Diyet
                {openDropdown === "keto" && (
                  <ul className="sub-menu" onClick={handleSubMenuClick}>
                    <li>
                      <a href="#keto-ozet">Nedir</a>
                    </li>
                    <li>
                      <a href="#keto-artilar"> Artıları & Eksileri</a>
                    </li>
                    <li>
                      <a href="#keto-planlama">Besinler ve Planlama</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => toggleDropdown("vegetarien")}>
                Vejetaryen Diyeti
                {openDropdown === "vegetarien" && (
                  <ul className="sub-menu" onClick={handleSubMenuClick}>
                    <li>
                      <a href="#vegetarian-ozet">Nedir</a>
                    </li>
                    <li>
                      <a href="#vegetarian-artilar"> Artıları & Eksileri</a>
                    </li>
                    <li>
                      <a href="#vegetarian-planlama">Besinler ve Planlama</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => toggleDropdown("vegan")}>
                Vegan Diyeti
                {openDropdown === "vegan" && (
                  <ul className="sub-menu" onClick={handleSubMenuClick}>
                    <li>
                      <a href="#vegan-ozet">Nedir</a>
                    </li>
                    <li>
                      <a href="#vegan-artilar"> Artıları & Eksileri</a>
                    </li>
                    <li>
                      <a href="#vegan-planlama">Besinler ve Planlama</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => toggleDropdown("paleo")}>
                Paleo Diyeti
                {openDropdown === "paleo" && (
                  <ul className="sub-menu" onClick={handleSubMenuClick}>
                    <li>
                      <a href="#paleo-ozet">Nedir</a>
                    </li>
                    <li>
                      <a href="#paleo-artilar"> Artıları & Eksileri</a>
                    </li>
                    <li>
                      <a href="#paleo-planlama">Besinler ve Planlama</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => toggleDropdown("akdeniz")}>
                Akdeniz Diyeti
                {openDropdown === "akdeniz" && (
                  <ul className="sub-menu" onClick={handleSubMenuClick}>
                    <li>
                      <a href="#akdeniz-ozet">Nedir</a>
                    </li>
                    <li>
                      <a href="#akdeniz-artilar"> Artıları & Eksileri</a>
                    </li>
                    <li>
                      <a href="#akdeniz-planlama">Besinler ve Planlama</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => toggleDropdown("lowkarb")}>
                Düşük Karb Diyeti
                {openDropdown === "lowkarb" && (
                  <ul className="sub-menu" onClick={handleSubMenuClick}>
                    <li>
                      <a href="#lowkarb-ozet">Nedir</a>
                    </li>
                    <li>
                      <a href="#lowkarb-artilar"> Artıları & Eksileri</a>
                    </li>
                    <li>
                      <a href="#lowkarb-planlama">Besinler ve Planlama</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => toggleDropdown("lowfat")}>
                Düşük Yağ Diyeti
                {openDropdown === "lowfat" && (
                  <ul className="sub-menu" onClick={handleSubMenuClick}>
                    <li>
                      <a href="#lowfat-ozet">Nedir</a>
                    </li>
                    <li>
                      <a href="#lowfat-artilar"> Artıları & Eksileri</a>
                    </li>
                    <li>
                      <a href="#lowfat-planlama">Besinler ve Planlama</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => toggleDropdown("highpro")}>
                Yüksek Protein Diyeti
                {openDropdown === "highpro" && (
                  <ul className="sub-menu" onClick={handleSubMenuClick}>
                    <li>
                      <a href="#highpro-ozet">Nedir</a>
                    </li>
                    <li>
                      <a href="#highpro-artilar"> Artıları & Eksileri</a>
                    </li>
                    <li>
                      <a href="#highpro-planlama">Besinler ve Planlama</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#diger">Diğer Diyet Türleri</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="diet-articles-maindiv">
          <p className="diet-title" id="keto-ozet">
            Ketojenik Diyet nedir, neden denemek isteyebilirsin ?
          </p>
          <div className="ArticleandImage">
            <p className="diet-article">
              1920’li yıllardan itibaren temelde epilepsi hastalarının nöbetleri
              için kullanılan ketojenik diyet, kilo kaybı ve Tip 2 diyabete de
              yardımı sayesinde son yıllarda popülerlik kazanmıştır.Keto
              diyeti,vücudunuzu “ketozis” adı verilen metabolik bir duruma
              sokmayı amaçlayan ve düşük karbonhidratlı, yüksek yağlı besinleri
              baz alan bir diyettir. Vücut normalde enerji için karbonhidratları
              kullanırken, ketojenik beslenmede düşük karbonhidrat alımından
              dolayı bu kez enerji için karbonhidrat yerine yağları yakar ve
              keton adı verilen moleküllerin üremesi sağlanır. Kilo kaybetmek
              için temel amaç yağ yakmaktır. Ketozis durumu vücudun gereken
              enerji için yağ yakma eğilimini arttırır.
            </p>
            <figure>
              <img src={Keto} />
            </figure>
          </div>
          <p className="diet-article">
            Keto diyeti, Atkins diyetine veya diğer düşük karbonhidratlı diyet
            planlarına benzese de onu diğerlerinden ayıran özellik vücudu
            ketozise zorlama eylemidir. Bunu sağlayacak birden fazla keto diyet
            planı mevcuttur:
          </p>
          <ul>
            <li>
              <b>Standard ketojenik diyet :</b> Bu diyet planı genellikle %70
              yağ, %20 protein ve %10 karbonhidrattan oluşur.
            </li>
            <li>
              <b>Döngüsel ketojenik diyet : </b>Bu diyet planı döngülerle
              ilerler. Örneğin beş gün keto, iki gün ara gibi keto ve diğer
              diyet planları arasında geçiş yapmayı içeren süreçlerdir.
            </li>
            <li>
              <b>Aralıklı oruç ketojenik diyeti :</b> Bu plan, kilo kaybını ve
              ketozisi hızlandırmak amacıyla keto diyet planını aralıklı orucun
              sistemindeki kalori kısıtlama dönemleriyle birleştirir.
            </li>
            <li>
              <b>Yüksek proteinli ketojenik diyet :</b> Standart keto diyet
              planına benzeyen bu plan, ondan farklı olarak kalorilerinin
              yaklaşık %60&lsquo;ını yağlardan, %35&lsquo;ini proteinlerden ve
              %5&lsquo;ini karbonhidratlardan alır.
            </li>
          </ul>
          <p className="diet-article">
            Keto diyeti yapmayan bir birey için önerilen günlük karbonhidrat
            miktarı 200 ila 300 gram arasında veya bireyin günlük makro alımının
            %45 ila %65&lsquo;i olarak düşünülebilir. Ketojenik diyette amaç
            karbonhidrat alımını sınırlandırmak ve düşük seviyelerde tutmaktır.
            Kesin miktar kişiye göre değişmekle birlikte, günde yaklaşık 20 ila
            50 gram net karbonhidrat tüketiminde ketoz meydana gelir.
          </p>
          <p className="diet-title" id="keto-artilar">
            Ketojenik Diyetin Avantajları
          </p>
          <ul>
            <li>
              Ketojenik beslenmenin pek çok artısı vardır. Fakat belki de en iyi
              avantajı, kilo verirken lezzetli, yüksek yağlı yiyecekler
              yemekleri kısıtlamamasıdır. Pastırma, kırmızı et, yumurta ve
              peynir gibi yüksek yağ içeren doyurucu yiyeceklere sırtınızı
              dönmenize gerek kalmaz.
            </li>
            <li>
              Ketojenik diyet planları kendinizi tok hissetmenizi sağlar ve
              iştahınızı bastırır. Araştırmalar bu diyet tarzının açlığı
              tetikleyen hormonları azaltarak iştahı bastırdığını gösteriyor.
              Karbonhidrat alımı kısıtlandığından daha uzun süre tok hisseder ve
              daha dengeli bir kan şekerine sahip olursunuz.Bu da zamanla daha
              az kalori almanıza yol açar.
            </li>
            <li>
              Ketojenik diyet planının bildirilen diğer faydaları arasında
              sivilcelerde azalma, bazı kanser türlerinin risklerinde azalma,
              kalp sağlığında iyileşmeler, beyin fonksiyonlarında artış,
              epileptik nöbetlerin önlenmesi ve polikistik over sendromunun
              belirtilerini azaltması yer almaktadır.
            </li>
          </ul>
          <p className="diet-title">Ketojenik Diyetin Dezavantajları</p>
          <ul>
            <li>
              Keto diyet planının ilk aşamaları keto gribi (ketoflu) olarak
              bilinen duruma neden olabilir. Bu durum birkaç günden birkaç
              haftaya kadar sürebilir ve yorgunluk,mide bulantısı,baş
              ağrısı,kabızlık,kusma,uykusuzluk ve baş dönmesi gibi yan etkilerle
              kendini belli eder.
            </li>
            <li>
              Keto diyet planının diğer yan etkileri arasında kas krampları,
              ağız kokusu, bağırsak alışkanlıklarında değişiklikler ve uyuşukluk
              gibi belirtiler gösterilebilir.
            </li>
            <li>
              Keto beslenme tarzında sağlığınızı izlemek çok önemlidir. Su
              içmeye özen göstermek de diyetin diğer bir önemli parçasıdır.
              Genellikle son derece etkili olan ketojenik diyet, sadece porsiyon
              kontrolüne odaklanan bir diyet planından biraz daha radikaldir.
            </li>
            <li>
              Ketojenik beslenme herkese uygun değildir.İnsüline bağımlı şeker
              hastaları,bulumia,anoreksiya veya diğer yeme bozukluklarından
              muzdarip hastalar,hamile veya emziren kadınlar,böbrek veya
              pankreasında sorun olanların keto diyetinden uzak durması tavsiye
              edilmektedir.
            </li>
            <li>
              Keto diyet planını sürdürmek zor olabilir. Karbonhidratlardan
              kaçınma işi, yemekten sıkılma hissine yol açabilir. Çevrenizdeki
              insanların yediklerini yiyememek zor olabilir. Ayrıca, keto diyeti
              planı uygulayanlar, düzenli olarak yediğimiz birçok yiyeceğin
              içine gizlenmiş fazlaca karbonhidratın bulunduğunu görecektir.
              Fakat düşük karbonhidratlı diyet planlarının popülaritesi arttıkça
              ortaya çıkan besinler de arttığından marketlerde kolaylıkla keto
              dostu tortillalar, hazır yemekler bulunabilir.
            </li>
            <li>
              Ketojenik diyet, bir uzman kontrolünde olmadan doğru uygulanmadığı
              durumlarda böbrek taşına, vücutta vitamin ve mineral eksikliğine
              ve karaciğer yağlanmasına neden olabilir. Bu nedenle ketojenik
              diyet uygulamadan önce mutlaka uzman doktordan ya da diyetisyenden
              görüş alınız.
            </li>
          </ul>
          <div className="diet-information">
            Ketojenik diyet planı, çoğu öğünün genellikle en ucuz kısmını hariç
            tutar. Ekmek,pirinç ve baklagiller gibi besinler oldukça bütçe
            dostudur ancak keto dostu değildir. Kısa vadede bile keto, pahalı
            bir diyet seçeneği olabilir. Ancak daha sağlıklı bir yaşam sürmek
            için diyetin ekonomisini göz ardı edilebilir.
          </div>
          <p className="diet-title" id="keto-planlama">
            Ketojenik Diyet Dostu Besinler
          </p>
          <ul>
            <li>Kuzu, koyun, dana, tavuk ve hindi gibi et ürünleri,</li>
            <li>Somon, ton balığı, alabalık ve uskumru gibi yağlı balıklar,</li>
            <li>Mozzarella, cheddar, kaşar gibi peynir çeşitleri,</li>
            <li>Yumurta ve krema,tereyağı,süt,yoğurt gibi süt ürünleri</li>
            <li>
              Yeşil yapraklı ve soğan, biber ve domates gibi düşük karbonhidrat
              oranına sahip sebzeler,
            </li>
            <li>Yaban mersini, böğürtlen, çilek gibi kırmızı meyveler,</li>
            <li>Zeytinyağı, hindistan cevizi yağı gibi sağlıklı yağlar,</li>
            <li>
              Kabak çekirdeği, keten tohumu, ceviz, badem gibi kuruyemişler
              tüketilebilir.
            </li>
          </ul>
          <p className="diet-title">Ketojenik Diyet Düşmanı Besinler</p>
          <ul>
            <li>
              Pirinç, makarna, ekmek, bira, kraker, tahıl ve tortilla (lavaş)
              gibi besinler,
            </li>
            <li>
              Patates, mısır, tatlı patates, muz, armut, mango, kuru üzüm, hurma
              gibi nişastalı sebzeler ve yüksek şekerli meyveler,
            </li>
            <li>Mercimek, fasulye, bezelye gibi baklagiller,</li>
            <li>
              Yüksek oranda şeker içeren içecekler, çikolata ve pasta gibi
              gıdalar,
            </li>
            <li>
              İşlem görmüş ürünler ve sağlıksız yağlar uzak durulması gereken
              besinlerin başında gelir.
            </li>
          </ul>
          <p className="diet-title">Ketojenik Diyette Planlama</p>
          <p className="diet-article">
            Günlük olarak ihtiyaç duyulan kalori miktarı kişiye, aktivite
            düzeyine ve kilo verme veya kilo alma hedeflerine göre değişir. 1.75
            cm boyunda ve 90 kilogram olan biri için önerilen günlük kalori
            miktarı, 1.75 cm boyunda ve 150 kilogram olan birine göre tamamıyla
            farklı olacaktır. Kaloriler önemli olsa da, asıl amaç beslenme
            makrolarınıza ulaşmaktır.
          </p>
          <p className="diet-article">
            Aşağıda, %20 kalori açığıyla öğün tüketmek isteyen, hareketsiz bir
            yaşam tarzına sahip, 1,83 boyunda, yaklaşık 130 kilo ağırlığında, 30
            yaşında bir erkek için örnek bir makro hesaplama verilmiştir:
          </p>
          <ul>
            <li>2076 toplam kalori,</li>
            <li>145 gram protein,</li>
            <li>152 gram yağ,</li>
            <li>32 gram karbonhidrat.</li>
          </ul>
          <p className="diet-article">
            Keto diyet planlarındaki kalori alımı ihtiyaçları, başlangıç
            ağırlığına ve aktivite düzeyine bağlı olarak büyük ölçüde
            değişecektir. Count&Eat, keto diyet planı takipçileri için öğün
            başına veya günlük olarak herhangi bir miktarda diyet planı
            hesaplayabilir; bu ister 500 kalori, ister 5000 kalori veya aradaki
            herhangi bir miktar olsun.
          </p>
          <p className="diet-article">
            Genel bir kural, karbonhidratı günlük 20 ila 30 gramda tutmaktır.
            Çok fazla karbonhidrat tüketmek vücudunuzu ketozdan
            çıkarabilir.Karbonhidratları kısıtladığınız için keto diyet planında
            tükettiğiniz enerjinin çoğu yağ formunda olacaktır. Kilo kaybında
            hedefin vücudun kendi yağını yakmasını sağlamak olduğunu,
            dolayısıyla alınan-harcanan kalori hesabının hala geçerli olduğunu
            unutmayın. Protein makronuz ulaşılması gereken minimum hedef olarak
            düşünülmeli, karbonhidrat ve yağ makronuz ise üst sınır olarak
            düşünülmelidir; onları aşmamak önemlidir fakat hedefinizden düşük
            kalması da çok büyük bir problem yaratmaz.
          </p>
          <p className="diet-title">Makrolar Nelerdir ?</p>
          <div className="ArticleandImage">
            <p className="diet-article">
              Üç adet makro besin vardır. Karbonhidrat, protein ve yağ. <br />
              <b>Karbonhidratlar</b> vücudun ana enerji kaynağıdır. Meyve,
              sebze, süt ürünleri ve tahıl besin gruplarının tümü karbonhidrat
              içerir. Şeker, bal ve şurup gibi tatlandırıcılar ve şeker,
              meşrubat ve kurabiye gibi ilave şeker içeren yiyecekler de
              karbonhidrat içerir. Karbonhidratlarınızın çoğunu ilave şeker veya
              rafine tahıllar yerine meyvelerden, sebzelerden, yağsız ve az
              yağlı süt ürünlerinden ve tam tahıllardan almaya çalışın.
              Karbonhidrat içeren birçok gıda aynı zamanda lif de sağlar. Lif,
              vücudunuzun sindiremediği bir karbonhidrat türüdür. Meyveler,
              sebzeler, kuruyemişler, tohumlar, fasulye ve tam tahıllar dahil
              olmak üzere bitkilerden elde edilen birçok gıdada bulunur ve
              sindirim sisteminize yardım eder.
            </p>
            <figure>
              <img src={Makro} />
            </figure>
          </div>
          <p className="diet-article">
            <b>Proteinlere</b> genellikle vücudun yapı taşları denir. Doku
            oluşturmak ve onarmak için kullanılırlar. Enfeksiyonla savaşmaya
            yardımcı olurlar.İnsan vücudu enerji için ekstra protein kullanır.
            Proteinli gıdalar grubu deniz ürünleri, yağsız et ve kümes
            hayvanları, yumurta, fasulye ve bezelye, soya ürünleri ve tuzsuz
            fındık ve tohumları içerir. Protein aynı zamanda süt grubunda da
            bulunur. Bitki kaynaklarından elde edilen protein, doymuş yağ
            bakımından daha düşük olma eğilimindedir, kolesterol içermez ve lif
            ve diğer sağlığı teşvik eden besinleri sağlar.
          </p>
          <p className="diet-article">
            <b>Yağlar</b> size enerji verir ve vücudun belirli vitaminleri
            emmesine yardımcı olur. Esansiyel yağ asitleri vücudun çalışmasına
            yardımcı olur ancak vücudunuz tarafından üretilmezler; onları
            dışarıdan almanız gerekir. Süt ürünleri de dahil olmak üzere pek çok
            gıda doğal olarak yağ içerir; etler, kümes hayvanları, deniz
            ürünleri ve yumurtalar; ve tohumlar, fındıklar, avokadolar ve
            hindistan cevizi vb.
          </p>
          <p className="diet-title" id="vegetarian-ozet">
            Vejetaryen Diyeti nedir,neden denemek isteyebilirsin?
          </p>
          <div className="ArticleandImage">
            <p className="diet-article">
              Vejetaryen tipi beslenme, sebze, tahıl, meyve, baklagiller gibi
              ürünler hariç diğer tüm hayvansal ürünlerin tamamen dışlandığı
              beslenme şeklidir. Tüm et ürünlerinin dışarıda tutulduğu
              vejetaryen beslenme şeklinde birçok süt ve süt ürünleri yer
              alabilir. Bunun yanında vejetaryenler gibi et ürünleri tüketmeyip
              deniz ürünleri tüketen kişiler pesketaryen beslenme şeklini
              benimsemiş olur. Vejetaryen beslenmenin birçok farklı türü vardır.
              İyi planlanan bir vejetaryen diyet, yaşamın her aşamasında
              beslenme ihtiyaçlarını karşılar.
            </p>
            <figure>
              <img src={Vejeteryan} />
            </figure>
          </div>
          <p className="diet-article">
            Vejetaryenler et ürünleri tüketmezken veganlar hayvanlardan elde
            edilen hiçbir ürünü tüketmezler. (peynir, yoğurt, süt, yumurta, bal
            gibi).Gün içerisinde beslenmeye dahil edilen ürünlere bağlı olarak
            vejetaryen türleri bulunur. Bitkisel ürün temelli olan vejetaryen
            beslenmede sağlık, etik ya da ekonomik nedenlere göre farklılık
            gösterir. Başlıca vejetaryen türleri şöyle sıralanır:
          </p>
          <ul>
            <li>
              <b>Lakto-ovo-vejetaryen :</b> Herhangi bir et ve deniz ürünü
              tüketmeyen ancak süt ürünleri yumurta ve bitkisel gıdaları içeren
              besinlerden yararlanan beslenme düzenidir.
            </li>
            <li>
              <b>Lakto-vejetaryen :</b> Et, deniz ürünleri ve yumurta yemeyen
              ancak süt ürünleri ve bitkisel gıdaları tüketen kişilerin
              benimsediği vejetaryen beslenme türüdür.
            </li>
            <li>
              <b>Ovo-vejetaryen :</b> Et, deniz ürünleri ve süt ürünleri
              tüketmeyen, yumurta ve bitkisel gıdaları tüketen kişilere
              ovo-vejetaryen beslenme şeklini benimseyen kişilerdir.
            </li>
            <li>
              <b>Vegan :</b> Tüm hayvansal gıdalardan kaçınan ve yalnızca
              bitkisel gıdaları tüketen kişilerdir.
            </li>
            <li>
              <b>Pesketaryen diyet :</b> Et ve kümes hayvanlarını, süt
              ürünlerini ve yumurtayı hariç tutarak balık ürünleri tüketilen
              beslenme şeklidir.
            </li>
          </ul>
          <p className="diet-title" id="vegetarian-artilar">
            Vejetaryen Diyetin Avantajları
          </p>
          <ul>
            <li>
              Vejetaryen beslenenler, et grubu tüketenlere göre daha sağlıklı
              bir düzene sahip olup E vitamini, lif açısından zengin besinler,
              bolca C vitamini içeren besinleri daha fazla tüketirler. Bu da
              kişide sağlıklı kilo kaybını sağlar ve kalp sağlığının
              iyileşmesine katkıda bulunur.
            </li>
            <li>
              Lif açısından zengin gıdalar tüketimde yer aldığından sindirim
              sistemi sağlıklı çalışır.
            </li>
            <li>
              Et tüketilmemesinden kaynaklı olarak kolesterol alımı azaldığı
              için kalp sağlığını korunur.
            </li>
            <li>Kilo vermeyi destekler.</li>
            <li>
              Böbrek ve safra taşı oluşma riskini azalmasına yardımcı olur.
            </li>
            <li>
              Çeşitli çalışmalar, vejetaryen diyetlerin sağlıklı kan şekeri
              seviyelerinin korunmasına yardımcı olabileceğini göstermektedir.
              Vejetaryen diyetleri ayrıca uzun vadede kan şekeri seviyelerini
              stabilize ederek diyabeti önleyebilir.
            </li>
            <li>
              Flavonoid içeriği sayesinde antioksidan alımını artırır. Bazı
              araştırmalar vejetaryen beslenmenin meme, kolon ve rektum
              kanserleri de dahil olmak üzere daha düşük kanser riskiyle
              bağlantılı olabileceğini öne sürüyor.
            </li>
          </ul>
          <div className="diet-information">
            12 çalışmanın incelendiği bir analizde vejetaryenlerin, vejetaryen
            olmayanlara göre 18 hafta boyunca ortalama 2 kilogram daha fazla
            kilo kaybı yaşadığı belirtilmiştir. Benzer şekilde, tip 2 diyabetli
            74 kişide yapılan 6 aylık bir çalışma, vejetaryen diyetlerin vücut
            ağırlığını azaltmada düşük kalorili diyetlere göre neredeyse iki kat
            daha etkili olduğunu göstermiştir.
          </div>
          <p className="diet-title">Vejetaryen Diyetin Dezavantajları</p>
          <ul>
            <li>
              Vejetaryen beslenme türlerinden biri olarak bilinen veganlarda,
              yetersiz vitamin ve mineral alımından kaynaklı olarak vitamin
              eksikliği görülebilir.
            </li>
            <li>
              Vejetaryen beslenme programı gelişim çağındaki çocuklara tavsiye
              edilmemektedir. Kalsiyum kaynağı olan süt ve süt miktarı yeterli
              miktarda tüketilemediğinden kemik sağlığında sorun yaşayabilirler.
            </li>
            <li>
              Hayvansal gıdalarda yer alan B12 ve demir yeterli oranda
              alınmadığında anemiye, hafıza sorunları gibi hastalıklara neden
              olabilir. Kümes hayvanları ve balık, iyi miktarda protein ve
              omega-3 yağ asitlerinin yanı sıra çinko, selenyum, demir ve B12
              vitamini gibi mikro besinleri sağlar. Bu gıdaların da
              tüketilmemesi diyet takipçisinin mikro besin oranlarını sekteye
              uğratabilir. Bu temel mikro besinlerdeki beslenme eksikliği,
              yorgunluk, halsizlik, anemi, kemik kaybı ve tiroit sorunları gibi
              semptomlara yol açabilir. Diyetinizden et veya diğer hayvansal
              ürünleri çıkarırken, bu temel besinleri başka kaynaklardan
              aldığınızdan emin olmak önemlidir.
            </li>
            <li>
              Multivitaminler ve takviyeler, mikro besin eksiklerini hızla
              artırmak ve gelecek dönemlerde oluşacak potansiyel eksiklikleri
              telafi etmek için başka bir seçenektir.
            </li>
            <li>
              Et, deniz ürünleri ve diğer hayvansal ürünleri içeren geleneksel
              bir diyet tüketmeye alışkınsanız, vejetaryen beslenmenin ilk başta
              sınırlayıcı olduğunu görebilirsiniz. Kahvaltıda sucuk, pastırma,
              öğle yemeğinde şarküteri etleri ve akşam yemeğinde dana eti veya
              tavuk etrafında yemek oluşturmaya alışkınsanız, yeme tarzına
              alışmanız elbette zaman alır.
            </li>
            <li>
              Market alışverişi yaparken, dışarıda yemek yerken ve sosyal
              ortamlarda yemek yerken vejetaryen beslenmek zor olabilir. Zamanla
              bu daha kolay hale gelir, ancak biraz çalışma gerektirir. Ürünler
              üzerindeki etiketleri okumak ve kazein, peynir altı suyu ve
              jelatin gibi hayvanlardan elde edilen yaygın içeriklere aşina
              olmak ve bu ürünlerin içeriklerde olmamasına dikkat etmek gerekir.
              Restoranlarda yemeklerin, süt ürünleri, dana eti veya tavuk suyu
              gibi diğer hayvansal ürünlerle hazırlanabileceğini unutmayın; bu
              nedenle sizin için doğru olan seçimi yapmak için sorular sorun.
            </li>
            <li>
              Meyve veya rafine tahıllar gibi karbonhidrat açısından zengin bazı
              gıdalar daha çabuk sindirilir ve bir öğün veya atıştırmalıktan
              hemen sonra kendinizi aç hissetmenize neden olabilir. Hayvansal
              proteinler de sınırladığı için sonuç olarak vejetaryen beslenmeye
              geçtiğinizde kendinizi daha az tok hissedebilir ve daha sık aç
              hissedebilirsiniz. Ancak dikkatli yiyecek seçimleri tokluğu
              artırmaya yardımcı olabilir. Doyurucu fasulye ve tam tahıllar lif
              açısından zengindir ve kendinizi tok hissetmenize yardımcı olur.
              Fındık veya tohum içeren atıştırmalıklar da protein ve yağ
              sağlayarak yemekten sonra tatmin duygusunu artırır.
            </li>
            <li>
              Sağlık camiasında, bitki bazlı bir diyet tüketenlerin herbisit ve
              pestisitlere maruz kalma riskinin arttığı konusunda bazı endişeler
              bulunmaktadır. Aslında bazı araştırmalar, meyve, sebze ve
              tahılların çoğunlukla bu kimyasallar kullanılarak yetiştirilmesi
              nedeniyle, vejetaryenlerin belirli beslenme alışkanlıkları
              nedeniyle pestisit kalıntılarına genel nüfustan daha fazla maruz
              kalabileceğini göstermiştir. Bununla birlikte, pestisitlere
              maruziyet daha yüksek olsa da, diğer araştırmacılar bunun hala
              güvenli yönergelere uyma ihtimalinin yüksek olduğunu bulmuşlardır.
              Ek olarak, sınırlı maruz kalmanın, bazen hayvansal gıdalarda
              bulunan hormonlara veya antibiyotiklere maruz kalmaktan daha fazla
              zarar verme potansiyeline sahip olup olmadığı veya potansiyel
              maruz kalmanın, bitki bazlı bir diyet tüketerek elde edilen
              faydaları azaltıp azaltmadığı da açık değildir.
            </li>
            <li>
              Bu kaygının basit bir çözümü organik gıdalar satın almaktır. Ancak
              bu ürünler genellikle pahalıdır ve her bölgede bulunmayabilir.
              Organik ürünler sizin için bir seçenek değilse sağlık uzmanları,
              maruziyeti sınırlamak için meyve ve sebzeleri dikkatli bir şekilde
              yıkamanızı tavsiye ediyor.
            </li>
          </ul>
          <p className="diet-title" id="vegetarian-planlama">
            Vejetaryen Diyet Dostu Besinler
          </p>
          <p className="diet-article">
            Vejetaryen diyeti meyve, sebze, tahıl, sağlıklı yağ ve proteinlerden
            oluşan çeşitli bir karışım içermelidir.
          </p>
          <ul>
            <li>
              Süt ve süt ürünlerinde bulunan kalsiyumun vücuda alınmadığı
              durumda koyu yeşil koyu sebzeler tüketilebilir. Bunun yanında
              lahana, brokoli, şalgam ve kara lahana içerisinde de kalsiyum
              bulunur.
            </li>
            <li>
              D vitamini de kemik sağlığından önemli bir rolü olan vitaminler
              arasında yer alır. Soya, pirinç sütü ve bazı tahıl ürünlerinde de
              D vitamini bulunur.
            </li>
            <li>
              B12 vitamini, kırmızı kan hücrelerinin üretimi açısından önemli
              bir vitamindir. B12 vitamini neredeyse yalnızca hayvansal
              ürünlerde bulunur, bu sebeple vegan beslenme şeklinde yeterli
              miktarda B12 almak zor olabilir. Veganların bu noktada vitamin
              takviyesi, vitaminle zenginleştirilmiş tahılları ve
              zenginleştirilmiş soya ürünlerini vücuda alması önemlidir.
            </li>
            <li>
              Protein, cilt, kemik, kaslar ve organların sağlıklı kalmasına
              yardımcı olur.Gün boyunca çeşitli bitki bazlı besinler tüketmek de
              yeterli protein sağlar. Bitki bazlı kaynaklar arasında soya
              ürünleri, baklagiller, mercimek, kabuklu yemişler, tohumlar ve tam
              tahıllar bulunur.
            </li>
            <li>
              Balık yemeyen veya beslenmelerine omega-3 yağ asitleri
              kaynaklarını dahil etmeyen vejetaryenler, diyetlerine omega-3
              açısından zenginleştirilmiş ürünler eklemesi gerekir. Omega-3 yağ
              asitleri, kanola yağında, soya yağında, cevizde, öğütülmüş keten
              tohumunda ve soya fasulyesinde bulunur.
            </li>
            <li>
              Kırmızı kan hücreleri açısından önemli olan demir, kuru fasulye ve
              bezelye, mercimek, zenginleştirilmiş tahıllar, tam tahıl ürünleri,
              koyu yeşil yapraklı sebzeler ve kurutulmuş meyveler içerisinde yer
              alır. Vücudun bitkilerden gelen demiri emmesine yardımcı olmak
              için, demir içeren yiyecekler yerken aynı zamanda C vitamini
              açısından zengin besinler de tüketmesi gerekir. C vitamini
              açısından zengin besinler arasında çilek, turunçgiller, domates,
              lahana ve brokoli bulunur.
            </li>
            <li>
              Tiroit hormonu açısından önemli olan iyot vücuda alınmadığında
              bağışıklık sisteminin etkilenmesine neden olur. İyotlu tuz
              kullanılarak gıdalara kolaylıkla iyot eklenebilir.
            </li>
            <li>
              Lakto-ovo-vejetaryen diyetini uygularsanız yumurta ve süt ürünleri
              de protein alımınızı artırabilir.
            </li>
          </ul>
          <p className="diet-title">Vejetaryen Diyet Düşmanı Besinler</p>
          <p className="diet-article">
            Her biri farklı kısıtlamalara sahip birçok vejetaryenlik çeşidi
            vardır. İhtiyaçlarınıza ve tercihlerinize bağlı olarak vejetaryen
            diyetinde aşağıdaki yiyeceklerden kaçınmanız gerekebilir:
          </p>
          <ul>
            <li>
              Vejetaryen beslenmenin en yaygın türü olan lakto-ovo
              vejetaryenlik, tüm et, kümes hayvanları ve balıkların ortadan
              kaldırılmasını içerir. Dolayısıyla bu besinlerden uzak
              durulmalıdır. Diğer vejetaryen türleri de yumurta ve süt ürünleri
              gibi yiyeceklerden kaçınabilir.
            </li>
            <li>
              Vegan beslenme vejetaryenliğin en kısıtlayıcı şeklidir çünkü et,
              kümes hayvanları, balık, yumurta, süt ürünleri ve diğer hayvansal
              ürünleri yasaklar. Aynı zamanda Veganlar bal, balmumu ve polenden
              uzak durmayı seçebilirler.
            </li>
            <li>
              Jelatin, domuz yağı, karmin, isinglass, oleik asit ve süet gibi et
              bazlı bileşenler de dikkat edilmesi gerek ürünler arasındadır.
            </li>
            <li>
              Kümes hayvanlarının yumurtalarının kısıtlanması veganlar ve
              lakto-vejetaryenler için geçerlidir. Süt, yoğurt ve peynirle
              ilgili bu kısıtlama veganlar ve ovo-vejetaryenler için geçerlidir.
            </li>
            <li>
              Yüksek oranda şeker içeren kola, pasta ve meyve suyu gibi gıdalar
              ve işlem görmüş ürünler, sağlıksız yağlar her beslenmede olduğu
              gibi bu besleme tarzında da yer almamalıdır.
            </li>
          </ul>
          <p className="diet-title">Vejetaryen Diyette Planlama</p>
          <p className="diet-article">
            Karbonhidratların birincil enerji kaynağı olduğu bir gerçektir ve bu
            da onları çok önemli kılar. Vejetaryen diyetinde diyetinizin %45 ila
            %65&lsquo;i karbonhidratlardan oluşmalıdır. Proteinler ayrıca kas ve
            güç oluşturmak, yıpranmış dokuları onarmak vb. için de önemlidir.
            Vejetaryen diyetinde, diyetinizin %25 ila %35&lsquo;i proteinlerden
            oluşmalıdır. Yağlar ayrıca aşırı durumlarda enerji sağlamaya
            yardımcı oldukları, bazı besinlerin emilimine yardımcı oldukları ve
            benzeri nedenlerden dolayı da oldukça önemlidir. Vejetaryen
            diyetinde diyetinizin %20 ila %35&lsquo;i yağlardan oluşmalıdır.
          </p>
          <p className="diet-article">
            Özellikle kuvvet antrenmanı yapıyorsanız önerilen miktarlarda
            protein almak, bitki bazlı beslenmenin en zor kısımlarından biridir,
            Daha fazla protein tüketmek, kas kütlesi ekleme oranınızı artırır.
            Bunun için bitkisel tabanlı protein tozlarına göz atabilirsiniz.
          </p>
          <p className="diet-article">
            Pek çok profesyonel sporcu vejetaryen veya vegandır ve bunu onların
            fiziklerine bakarak asla anlayamazsınız.
          </p>
          <p className="diet-title" id="vegan-ozet">
            Vegan Diyeti nedir , neden denemek isteyebilirsin ?
          </p>
          <div className="ArticleandImage">
            <p className="diet-article">
              Vegan beslenme tarzının temel prensibi hayvansal kaynaklı tüm
              ürünlerden kaçınmaktır. Buna yalnızca dana eti, kümes hayvanları,
              balıklar değil aynı zamanda yumurta ve süt ürünleri de dahildir.
              Vegan yaşam tarzı aynı zamanda deri veya kürk gibi hayvanlardan
              yapılmış hiçbir ürünün kullanılmamasını da içerir. <br />
              Pek çok kişi, sağlık nedenleriyle daha sağlıklı besinler yemeyi
              amaçlayan bir vegan diyetini takip etmektedir. Diğer takipçileri
              ise hayvan sömürüsü konusundaki endişeler gibi etik nedenlerden
              dolayı vegan diyetini uygulamaktadır. Vegan beslenme tarzını seçme
              nedeniniz her ne olursa olsun Count&Eat, bu konuda takip etmeniz
              gereken günlük diyet planını karşınıza sunacaktır.
            </p>
            <figure>
              <img src={Vegan} />
            </figure>
          </div>
          <p className="diet-title" id="vegan-artilar">
            Vegan Diyetin Avantajları
          </p>
          <p className="diet-article">
            Gün geçtikte bu konuda artan bilimsel araştırmalar, tamamıyla
            bitkisel beslenmenin bazı konularda hayvansal ürünler içeren
            beslenmeye kıyasla belirgin avantajlar sunduğunu gösteriyor.
          </p>
          <ul>
            <li>
              Vegan beslenmenin faydaları, vücuda daha düşük doymuş yağ,
              kolesterol ve hayvansal protein alımının etkisiyle ortaya çıkar.
              Bunun yanı sıra karmaşık karbonhidratlar, diyet lifi, magnezyum,
              folik asit, C ve E vitamini ve diğer besinlerin vücuda daha yüksek
              miktarlarda alınmasıyla etki büyür.
            </li>
            <li>
              Aynı zamanda vegan beslenme, kardiyovasküler hastalıklar,
              hipertansiyon, diyabet, kanser, osteoporoz (kemik erimesi), böbrek
              hastalıkları ve demansın yanı sıra bağırsak hastalıkları, safra
              taşları ve romatoid artritin önlenmesinde ve tedavisinde
              faydalıdır.
            </li>
            <li>
              Vegan diyeti esasında bir yaşam tarzıdır. Fakat birçok kişi kilo
              vermek için de vegan beslenme düzenine başvurmaktadır. Vegan
              diyetini takip eden kişilerin genellikle diğer beslenme tarzlarını
              takip eden kişilere göre daha zayıf olduğu doğrudur. Bitki tabanlı
              diyetler, çok sayıda deneyde sürekli olarak vücut ağırlığının
              azalmasıyla ilişkilendirilmiştir.
            </li>
            <li>
              Dengeli bir vegan diyeti, vücudun gelişmesi için ihtiyaç duyduğu
              tüm besinleri sağlayabilir. Vegan diyet planlarındaki beslenme
              eksiklikleri genellikle kötü planlamadan kaynaklanır. Count&Eat
              ’in öğün planlama becerisi, bir vegan planı hazırlarken
              varsayımları ortadan kaldırarak besin açısından eksiksiz bir öğün
              hazırlamanıza yardımcı olur.
            </li>
          </ul>
          <p className="diet-title">Vegan Diyetin Dezavantajları </p>
          <ul>
            <li>
              Vegan beslenme modelinde dikkat edilmesi gereken bazı noktalar
              vardır. Yeterli protein, demir, kalsiyum,omega-3 ve B12 alımı
              konusunda güçlü bir beslenme modeli olmayan vegan beslenme, vegan
              kişilerde demir, kalsiyum,omega-3 ve B12 eksikliği ortaya
              çıkarabilir.
            </li>
            <li>
              Bunlara dikkat etmek ve yeterli takviyeyi sağlamak ise zor
              değildir. B12 için bolca tahıl tüketebilir, soya sütü ve portakal
              suyu içebilirsiniz. Protein için bolca baklagil, mercimek, yulaf
              ezmesi ve kabuklu yemişler yiyebilir, fasulye, ıspanak, soya
              fıstığı, soya peyniri tüketerek de demir ihtiyacını
              karşılayabilirsiniz.Omega-3 genelde et, kümes hayvanları ve balık
              çeşitleri gibi besinlerde çokça bulunduğundan vegan beslenmede zor
              temin edildiği düşünülebilir. Fakat onların yerine de keten
              tohumu, chia tohumu ve ceviz gibi kuruyemişler ve tohumlar tercih
              edebilirsiniz. Badem, badem ezmesi, soya sütü, pirinç sütü, yeşil
              yapraklı yiyecekler, susam, soya fasulyesi de iyi birer kalsiyum
              kaynaklarıdır. Kalsiyum,demir,omega-3 ve B12 alımı için gerekirse
              takviye besin hapı da kullanabilirsiniz.
            </li>
            <li>
              Sürekli vegan öğünlerle beslenmek zor olabilir. Vegan seçeneklerin
              sınırlı olduğu veya doyurucu olmadığı bir restorana, partiye ya da
              mangala davet edilebilirsiniz. Bu beslenme tarzı, besin ayırt
              edilmeyen diğer tarzlara göre daha fazla planlama ve irade
              gerektirebilir.
            </li>
            <li>
              Vegan beslenmeye başlamadan önce kesinlikle bir doktora danışmalı
              ve demir, B12 ve kalsiyum ölçümlerinizi yaptırmalısınız. Uzman
              desteği almak, olası risklerin önüne geçme konusunda size yardımcı
              olacaktır.
            </li>
            <li>
              Et ürünleri gibi temel besin gruplarının beslenmeden aniden
              çıkarılması vücut için gerekli tüm besin maddelerinin alınmasını
              zorlaştırabilir. İster 2000 kalorilik bir diyet planına ister 2500
              kalorilik bir diyet planına ihtiyacınız olsun, Count&Eat
              vücudunuzun tüm ihtiyaçlarını karşılayan, besin açısından zengin,
              lezzetli yemekler planlamanıza yardımcı olacaktır.
            </li>
            <li>
              Sadece vegan diyet tarzıyla kilo vermeniz garanti değildir. Alınan
              kaloriler, harcanan kaloriler matematiği hala geçerlidir. Vegan
              bir diyet de şeker ve yağlardan gelen aşırı kalorilerle
              doldurulabilir. Count&Eat yemek planlayıcımız günlük kalori alım
              düzeyini seçmenize yardımcı olacak ve ardından belirlediğiniz
              kalori limitinin altında otomatik olarak planlarınızı
              oluşturacaktır.
            </li>
          </ul>
          <p className="diet-title" id="vegan-planlama">
            Vegan Diyet Dostu Besinler
          </p>
          <p className="diet-article">
            Günümüzde vegan beslenmenin oldukça popüler hale gelmesinden dolayı
            bu beslenme planına uygun yiyecekler her yerde karşınıza çıkabilir.
            Evde vegan yemekler hazırlayan kullanıcılar genellikle bu temel
            yiyecekleri ellerinin altında bulundurur:
          </p>
          <ul>
            <li>
              Yeşil mercimek: Ucuz, protein ve diğer besinlerle dolu olan yeşil
              mercimek, dolaplarınızda uzun süre dayanır. Bu bütçe dostu temel
              malzeme çorbalarda ve salatalarda harikadır.
            </li>
            <li>
              Esmer pirinç ve kinoa: Tam tahıllı pirinç ve protein açısından
              zengin kinoa rakipsiz bir ikilidir.
            </li>
            <li>
              Avokado: Sağlıklı yağlarla doludur ve yemeklerinize ayrı bir
              lezzet katar.
            </li>
            <li>
              Fasulye:Kuru fasulye en iyisidir, ancak konserve fasulyeler
              salatalara, çorbalara veya diğer öğünlere kolayca atılabilen temel
              bir ürün olduğundan vegan diyet planının en iyi arkadaşıdır.
            </li>
            <li>
              Domates: Birçok yemeğin temel malzemesi olan oldukça besleyici ve
              kolay erişilebilir bir besin.
            </li>
            <li>
              Hindistan cevizi sütü: Çorbalar ve sosların yanı sıra kahvaltı
              smoothieleri hazırlamak için çok faydalıdır.
            </li>
            <li>
              Tofu: Soya fasulyesi ya da soya peyniri de olarak bilinen ve bir
              et ikamesi olan tofu, yemeğin lezzetini korur ve tatmin edici
              miktarda protein içerir. Tofu, dürüm, tavada kızartma yemekleri ve
              daha fazlası gibi birçok yemekte etin yerini alabilir.
            </li>
            <li>
              Sebzeler: Sebzeler olmadan vegan beslenme tarzından söz edilmez.
              Sebzeler lezzetli ve sağlıklıdır. Bu nedenle lahana, ıspanak,
              brokoli, karnabahar, havuç, brüksel lahanası, dolmalık biber,
              kabak ve daha fazlası gibi yapraklı yeşillikleri tüketmeye özen
              gösterin.
            </li>
          </ul>
          <p className="diet-title">Vegan Diyet Düşmanı Besinler</p>
          <ul>
            <li>
              Hayvansal kaynaklı tüm gıdalar kaçınmanız gereken temel
              besinlerdir. Bu kaçınma, vejetaryen diyet planında olduğu gibi
              sadece et, kümes hayvanlarını değil aynı zamanda balık, yumurta ve
              süt ürünlerini de içerir. Bal bile çoğu vegan tarafından yasak
              kabul edilmektedir. Ancak bunun yerine kullanılabilecek akçaağaç
              şurubu veya pekmez gibi vegan tatlandırıcılar da mevcuttur.
            </li>
            <li>
              Vegan bir diyet planına sahipseniz, ekmeklerde veya başkaları
              tarafından hazırlanan yiyeceklerde bu tür içeriklerin
              gizlenebileceğini unutmayın ve tüketmemeye dikkat edin. Count&Eat
              ‘in planlayıcısında bir vegan diyet planı seçebilir ve ardından
              belirli yiyecekleri dahil ederek veya hariç tutarak diyet
              planınızı daha da özelleştirebilirsiniz. Vegan diyet planlayıcımız
              varsayılan olarak tüm hayvan bazlı ürünleri hariç tutar.
            </li>
          </ul>
          <p className="diet-title">Vegan Diyette Planlama</p>
          <p className="diet-article">
            Kilo vermek, korumak veya kilo almak için diyet yapmanın ilk adımı,
            mevcut kilonuza ve egzersiz seviyenize göre TDEE&lsquo;nizi (toplam
            günlük enerji harcaması) hesaplamaktır. Vücudunuz günde 2000 kalori
            yakarsa, sürekli olarak bundan daha az kalori tüketmek kilo
            vermenize yardımcı olur, daha fazla kalori almak ise kilo almanıza
            neden olur.
          </p>
          <p className="diet-article">
            Besinlerin, her biri kalori içeren üç ana makro besinden
            oluştuğundan yukarıda bahsetmiştik: Protein, karbonhidratlar ve
            yağlar. Her diyet planının bu üç makro besin öğesinin her birinden
            uygun miktarda bulunması gerekir. Vegan Diyet Planı için gerçekçi
            bir makro oran %25-30 protein, %40-45 karbonhidrat ve %30 yağdır.
            Protein hedeflerinizde zorlanıyorsanız bitkisel protein tozlarını
            araştırmak isteyebilirsiniz.
          </p>
          <p className="diet-title" id="paleo-ozet">
            Paleo Diyeti nedir , neden denemek isteyebilirsin ?
          </p>
          <div className="ArticleandImage">
            <p className="diet-article">
              Paleo (Paleolitik&lsquo;in kısaltması) beslenme planı, insanların
              tarih öncesi insanların diyetlerine çok benzeyen yiyecekler yemesi
              gerektiği fikrine dayanmaktadır. İlk insanlar, günümüz tarımı
              olarak tanıyacağımız şeyin icadından çok önce, avcı-toplayıcı
              olarak evrimleşmişlerdir. Bu beslenme planı, insanların 2,5
              milyondan 10.000 yıl öncesine kadar yediklerini taklit etmeye
              çalışmakta ve tarım devrimi sonrası insanların ortaya çıkardığı
              besinleri öğünlerden kaldırmayı amaçlamaktadır. <br />
              Paleo diyet tarzının savunucuları, insanların et, meyve ve
              toplanmış sebzeler gibi geleneksel temel gıda maddelerini daha
              fazla yemesinin ve yaklaşık 10.000 yıl önce tarımın ortaya
              çıkışından sonra önem kazanan gıdalardan daha az yemesinin daha
              sağlıklı olacağına inanmaktadır.
            </p>
            <figure>
              <img src={Paleo} />
            </figure>
          </div>
          <p className="diet-article">
            Temel hedef daha az tahıl, işlenmiş gıdalar, baklagiller ve
            benzerlerini tüketmektir. Bu diyet türünün gerekçesi, tarımın ortaya
            çıkışından bu yana insan metabolik süreçlerinin gelişmesi için çok
            az zaman geçmiş olmasıdır; bu nedenle tarihte daha eskilere gidip
            mağara adamlarının beslenmesini taklit etmek buna bir çözüm olarak
            sunulabilir.
          </p>
          <p className="diet-article">
            Paleo diyeti işlenmiş ve şeker ilavesi olan gıdaları yok sayar.
            Yüksek protein, yüksek yağ ve düşük karbonhidrat tüketimini ilke
            edinir. Kilo kaybı için protein en önemli besindir. Protein çeşitli
            hormonları kontrol eder, metabolizmayı hızlandırır ve iştahı
            azaltır.
          </p>
          <p className="diet-article">
            Tahmin edebileceğiniz gibi, tarih öncesi çağlarda, hatta yazılı dil
            kavramı bile ortaya çıkmadan önce, dünyanın dört bir yanındaki
            insanların günlük olarak ne yediğini tam olarak bilmek oldukça
            zordur. Bununla birlikte, teknoloji seviyeleri ve arkeolojik
            kayıtlar hakkında bildiklerimize dayanarak, bunun muhtemelen çok
            sayıda doğal, minimum düzeyde işlenmiş gıdalarla dolu bir diyet
            olduğuna dair bazı bilinçli tahminlerde bulunabiliriz.
          </p>
          <p className="diet-title" id="paleo-artilar">
            Paleo Diyetin Avantajları{" "}
          </p>
          <ul>
            <li>
              Sağlık uzmanları, paleo diyet planının yüksek derecede işlenmiş
              gıdaları ve rafine şekerleri azaltmasını ve lif, potasyum ve
              antioksidanların açısından zengin besinlerin günlük tüketimde
              yüksek olmasını beğenmektedir.
            </li>
            <li>
              Bazı çalışmalarda paleo diyetinin Tip 2 diyabeti olan veya önlemek
              isteyenler için faydalı olduğu bulunmuştur.
            </li>
            <li>
              Aynı zamanda diyabet için önerilen geleneksel veya Akdeniz tipi
              beslenme tarzlarına kıyasla kan şekeri düzeylerini ve risk
              faktörlerini daha fazla iyileştirdiğini bulunmuştur.
            </li>
            <li>
              Araştırmalar, paleo diyetinin GLP-1, PYY ve GIP gibi yemekten
              sonra tokluk sağlayan hormonları üretmeye yardımcı olabileceğini
              göstermiştir.
            </li>
            <li>
              Sağlıklı yağlar, yağsız proteinler ve taze meyve ve sebzelerin
              tercih edilmesi iç organların genç kalmasını destekler.
            </li>
            <li>
              genç kalmasını destekler. Trigliserit seviyesini düşürür. Bir dizi
              araştırma, paleo diyeti uygulamanın kandaki toplam trigliserit
              seviyelerini %44&lsquo;e kadar azaltabileceğini göstermiştir.
              Ayrıca kolesterol ve tansiyon için de olumlu etkileri
              bulunmaktadır.
            </li>
            <li>
              Paleo tipi beslenmenin diğer diyet türlerinden daha doyurucu
              olduğunu yukarıda da ifade etmiştik. İnsanların daha tok
              hissetmesi ve tekrar acıkmalarının daha uzun sürmesi genel olarak
              bu diyet türü süresince onları daha az kalori tüketmeye iter. Bu
              fayda, kalori sayma ve porsiyon boyutlarına dikkat etme ihtiyacını
              azaltır. Paleo diyet planını takip edenlerin bazıları, her hafta
              birkaç gün <b>“cheat day”</b> yapabilmektedirler.
            </li>
          </ul>
          <p className="diet-information">
            <b>Cheat day</b>, diyet yapanların haftanın belirli gün ya da
            günlerinde istediklerini yedikleri mola zamanına verilen isimdir.
          </p>
          <p className="diet-title">Paleo Diyetin Dezavantajları </p>
          <ul>
            <li>
              Beslenme ve sağlık uzmanları genellikle diyetinizden tüm besin
              gruplarını bir anda çıkarmamanızı tavsiye eder ve paleo diyet
              planının süt ürünlerini tamamen hariç tutmasının, kişiyi kalsiyum
              ve D vitamini eksikliği riskiyle karşı karşıya bırakabileceğini
              belirtirler. Bu da kişinin kemik sağlığı açısından risk
              oluşturabilir.
            </li>
            <li>
              Vücuda ve beyne enerji sağlayan tam tahılların bu beslenme tipinde
              devreden çıkması bu besinlerin içerdiği bazı önemli besin
              maddelerinden mahrum kalmanıza neden olabilir. Çünkü, tam
              tahılların; kan şekerini kontrol etmeye, kilo yönetimine ve kalp
              sağlığına iyi gelebileceği bilimsel araştırmalarla kanıtlanmıştır.
            </li>
            <li>
              Paleo diyeti uygulayan bazı insanlar, yüksek doymuş yağ
              tüketebilir, bu da kalp hastalığı riskini artırabilir.
            </li>
            <li>
              Paleo diyeti yüksek protein içerikli beslenmeye dayandığından
              böbrek hastalığı dahil olmak üzere bazı sağlık sorunları olan
              kişiler için yüksek protein tüketimi tavsiye edilmez. Kalp,
              karaciğer veya pankreas hastalığı olan kişilerin tıbbi gözetim
              altında paleo diyeti planını takip etmeleri önerilmektedir.
            </li>
          </ul>
          <p className="diet-title" id="paleo-planlama">
            Paleo Diyet Dostu Besinler
          </p>
          <p className="diet-article">
            Basit ama besleyici yiyecekler paleo diyetinin temel taşlarıdır.{" "}
          </p>
          <ul>
            <li>
              Kuruyemişler (fındık, Antep fıstığı, ceviz, badem, kaju vb.),
            </li>
            <li>Her çeşit ve renkte sebzeler ve meyveler,</li>
            <li>
              Ton balığı, uskumru ve somon, alabalık gibi yağlı balıklar veya
              karides, kabuklu deniz ürünleri,
            </li>
            <li>Zeytinyağı, avokado veya hindistan cevizi yağı gibi yağlar,</li>
            <li>
              Özellikle doğal otlanan hayvanlardan veya av hayvanlarından elde
              edilen etler (Hindi, bıldırcın, kaz, tavuk, ördek ve sığır eti,
              kuzu eti, geyik, tavşan gibi),
            </li>
            <li>Tercihen gezen kümes hayvanlarının yumurtası,</li>
            <li>
              Tatlandırıcı olarak ise hurma, akçaağaç şurubu ve doğal bal gibi
              kaynaklar kullanılabilir.
            </li>
          </ul>
          <p className="diet-title">Paleo Diyet Düşmanı Besinler</p>
          <p className="diet-article">
            Paleo diyet planında kaçınılması gereken besinler, genelde yakın
            tarihte insanların erişimine sunulmuş yiyeceklerin tamamıdır:
          </p>
          <ul>
            <li>
              Buğday, yulaf ve arpa gibi tahıllar (tam tahıllar ve glutensizler
              dahil) ve bunların makarna ve ekmek gibi türevleri,
            </li>
            <li>Süt ürünleri,</li>
            <li>Pancar şekeri ve mısır şurubu gibi rafine şekerler,</li>
            <li>Bol tuz içeren yiyecekler,</li>
            <li>Patates, mısır ve pirinç gibi yüksek nişastalı gıdalar,</li>
            <li>
              Başta bira olmak üzere alkollü içecekler, bitkisel yağlar, yapay
              tatlandırıcılar, margarin, trans yağlar, soya fasulyesi ve soya
              türevi ürünler gibi genel olarak yüksek oranda işlenmiş gıdalar,
            </li>
            <li>
              Fasulye, mercimek, bezelye ve yerfıstığı gibi baklagiller grubu
              tüketilmemelidir.
            </li>
          </ul>
          <p className="diet-title">Paleo Diyette Planlama</p>
          <p className="diet-article">
            Besinlerin, her biri kalori içeren üç ana makro besinden
            oluştuğundan yukarıda bahsetmiştik: Protein, karbonhidratlar ve
            yağlar. Her diyet planının bu üç makro besin öğesinin her birinden
            uygun miktarda bulunması gerekir. Harvard&lsquo;ın paleo diyet
            planına ilişkin çalışmasına göre standart makro besin oranı ortalama
            olarak %30 protein, %30 karbonhidrat ve %40 yağdır.
          </p>
          <p className="diet-title" id="akdeniz-ozet">
            Akdeniz Diyeti nedir, neden denemek isteyebilirsin ?
          </p>
          <p className="ArticleandImage">
            <p className="diet-article">
              Akdeniz diyeti planı, Akdeniz&lsquo;e yakın ülkelerin geleneksel
              beslenme alışkanlıklarına dayanan genel bir terimdir. Bu diyet
              planları, Yunanistan, İtalya ve İspanya gibi bölge sakinlerinin
              sıklıkla sahip olduğu uzun ve sağlıklı yaşamlar nedeniyle
              popülerlik kazanmıştır. Dünyada Akdeniz tipi diyet denildiğinde
              akla gelen ülkeler İtalya, Yunanistan, İspanya veya Fas olabilir.
              Türkiye&lsquo;de de Akdeniz’e kıyısı olan Ege ve Akdeniz
              bölgelerinde yaygın olarak görülür. <br /> <br />
              Kalp hastalıklarının Akdeniz ülkelerinde yaşayan kişilerde Batı
              ülkelerine oranla daha az görüldüğünün fark edilmesi bu ilginin
              başlangıcı olmuştur.
            </p>
            <figure>
              <img src={Akdeniz} />
            </figure>
          </p>
          <p className="diet-article">
            Akdeniz’e kıyısı olan yaklaşık 22 ülke olduğundan kültür
            çeşitliliği, coğrafya, tarım ve beslenme alışkanlıkları ülkelere
            göre değiştiğinden standart bir Akdeniz tarzı yoktur. Ancak bazı
            ortak noktalardan söz edilebilmektedir.
          </p>
          <p className="diet-article">
            Akdeniz diyeti ağırlıklı olarak sebzenin ve yağ olarak zeytinyağının
            kullanıldığı diyet tipi şeklinde açıklanabilir. Temel ögeleri
            arasında kepekli tahıllar, sebze meyve, deniz mahsulleri, fındık
            ceviz gibi kuruyemişler, baklagiller ve zeytinyağı bulunur.
          </p>
          <p className="diet-article">
            Akdeniz diyetinde çoğu diyette olduğu gibi bir kısıtlayıcılık
            yoktur. Bu diyet kalori kısıtlamasından daha çok sağlıklı beslenmeye
            ve kalp sağlığını iyileştirmeye odaklanır. ABD için hazırlanan
            beslenme kılavuzunda Akdeniz diyeti “Sağlıklı beslenme modeli“
            olarak geçer.
          </p>
          <p className="diet-title" id="akdeniz-artilar">
            Akdeniz Diyeti Avantajları{" "}
          </p>
          <p className="diet-article">
            Birçok insan sadece kilo vermek için değil, aynı zamanda sağlığa
            yararı için Akdeniz diyetini uygulamaktadır. Beş yıllık bir New
            England Journal of Medicine araştırması, Akdeniz diyetinin felç,
            kalp krizi ve ölüm riskini, hedef grupla karşılaştırıldığında %30
            azalttığını keşfetmiştir.
          </p>
          <ul>
            <li>
              Kalp sağlığını destekleyen Akdeniz diyeti kişilerin inmeye
              yakalanma riskini azaltabilir. Ayrıca bu diyeti uygulayan kişiler
              daha düşük kan basıncına sahip olabilir. Akdeniz diyeti diğer
              diyetlere oranla damarlarda daha düşük plak birikimi ile
              ilişkilendirilmiştir. Daha fazla araştırmaya ihtiyaç duyulmasına
              rağmen Akdeniz ülkelerindeki insanların ABD&lsquo;deki insanlara
              göre daha düşük oranda kalp hastalığına yakalandığı doğrudur.
            </li>
            <li>
              Kan şekeri seviyelerini düzenlemeye yardımcıdır. Akdeniz diyeti
              kuruyemiş, meyve-sebze, tahıllar ve sağlıklı yağlardan zengin
              besleyiciliği yüksek ve çeşitliliğin çok olduğu bir diyettir. Bu
              dengeli ve çeşitli beslenme şekli kan şeker seviyelerini
              düzenlemede ve insülin direnci gelişme riskini düşürmede etkili
              olabilir.
            </li>
            <li>
              Beyin fonksiyonunu korumaya yardımcı olan Akdeniz diyetinin temel
              öğelerinden biri de kuruyemişler ve zeytinyağı gibi sağlıklı
              yağların tercih etmektir. Diğer diyet çeşitlerine göre daha
              sağlıklı yağları içeren bu diyet beyin fonksiyonu üzerinde
              koruyucu etkilere sahip olabilir.
            </li>
            <li>
              Bağırsak sağlığını destekler. Akdeniz diyeti besleyici ve
              doygunluk özellikleri düşük olan basit karbonhidratları daha az
              içerir. Lif ve antioksidan içeriği yüksek gıdaların daha çok
              tercih edildiği bu diyet ile bağırsak sağlığını destekler.
            </li>
            <li>
              Kansere karşı koruyucu olan Akdeniz diyeti meyve ve sebze
              açısından zengin bir diyet olduğundan dolayı antioksidan açısından
              da zengin bir diyettir. Antioksidanlar vücuttaki serbest
              radikallerin bağlanmasını sağlar ve bu özelliği ile kansere karşı
              koruyucudur.
            </li>
            <li>
              Kan yağlarını düzenlemeye yardımcıdır. Akdeniz diyeti ile
              sağlıksız yağ tüketimi azalır. Vücudun bir miktar doymuş yağa
              ihtiyacı vardır. Ancak fazlası LDL kolesterolü diğer bir deyişle
              kötü kolesterolü yükseltebilir. Doymuş yağların yanı sıra trans
              yağlar da günlük diyet ile tüketilen ancak sağlığa hiçbir faydası
              olmayan hatta zararı bulunan bir yağ türüdür. Akdeniz diyeti trans
              yağ alımı da sınırlanır.
            </li>
          </ul>
          <p className="diet-title">Akdeniz Diyeti Dezavantajları </p>
          <ul>
            <li>
              Akdeniz tipi bir diyetin pek fazla dezavantajı yoktur. Önerilen
              günlük makro besin dengesini sağlar ve doktorlar tarafından
              sıklıkla tavsiye edilir. Akdeniz diyetinin takipçileri yeterli
              miktarda C Vitamini (demirin emilmesi için) ve kalsiyum (çünkü süt
              ürünleri diyetin büyük bir parçası değildir) aldığından emin olmak
              isteyeceklerdir. Bu sebeple demir ve kalsiyum seviyelerinizi
              düzenli kontrol ettirmeniz önemlidir. Gerektiğinde demir ve
              kalsiyum takviyesi konusunu hekiminize danışabilirsiniz.
            </li>
            <li>
              Şarap, özellikle de kırmızı şarap, Akdeniz tarzı beslenmenin ortak
              bir parçasıdır. Ancak alkol herkes için uygun değildir. Hamilelik
              veya emzirme dönemindeyseniz ve herhangi bir sağlık sorununuz
              varsa alkol alımını sınırlayın ve mutlaka hekiminize danışın.
            </li>
            <li>
              Zeytinyağı ve yağlı tohumlar Akdeniz diyetinde baskındır. Her ne
              kadar sağlıklı olsa da bu besinlerin de kalori içerdiğini ve fazla
              tüketildiğinde kilo almanıza neden olabileceğini unutmamak
              gerekir.
            </li>
          </ul>
          <p className="diet-title" id="akdeniz-planlama">
            Akdeniz Diyeti Dostu Besinler
          </p>
          <ul>
            <li>Çoğu tam tahıllar, bol miktarda meyveler ve sebzeler,</li>
            <li>Fındık, tohum ve sızma zeytinyağı gibi sağlıklı yağlar,</li>
            <li>Abartılmaması şartıyla süt, peynir çeşitleri ve yumurta,</li>
            <li>Ölçülü olarak kırmızı şarap,</li>
            <li>Makul miktarda balık gibi omega-3 içeren besin kaynakları,</li>
            <li>
              Uygun şartlarda yetişen tavuk ile kuzu eti gibi besinler örnek
              verilebilir.
            </li>
          </ul>
          <p className="diet-title">Akdeniz Diyeti Düşmanı Besinler</p>
          <p className="diet-article">
            Hemen hemen tüm kilo verme planlarında zararlı olan besin
            gruplarından Akdeniz diyetinde de kaçınılması gerekir:
          </p>
          <ul>
            <li>
              Kek, çörek, hamur işi ve gazlı içecekler gibi ilave şeker içeren
              yiyecekler,
            </li>
            <li>
              Şarküteri etleri ve sosisli sandviçler gibi yüksek oranda işlenmiş
              etler,
            </li>
            <li>
              İşlenmiş veya paketlenmiş gıdalar, fast foodlar (kraker, cips ve
              diğer atıştırmalıklar),
            </li>
            <li>
              Margarin, ayçiçek, kanola ve mısır yağı gibi trans ve doymuş yağ
              seçenekleri,
            </li>
            <li>
              Beyaz ekmek, makarna gibi basit karbonhidrat içeren besinlerden
              uzak durulmalıdır.
            </li>
          </ul>
          <p className="diet-title">Akdeniz Diyetinde Planlama</p>
          <p className="diet-article">
            Akdeniz Diyet Planına uymak, uzun vadeli, sürdürülebilir beslenme
            değişiklikleri yapmayı içerir. Genel olarak sebzeler, meyveler, tam
            tahıllar ve sağlıklı yağlar dahil olmak üzere birçok doğal gıda
            içeren bir beslenmeyi hedeflemelisiniz.
          </p>
          <p className="diet-article">
            Amerikan Kalp Derneği&lsquo;ne göre, Akdeniz Diyeti genellikle
            geleneksel diyet planına göre kalorilerinin daha yüksek bir
            yüzdesini yağdan alır. Bu diyet türünü uygularken, her diyet türünde
            olduğu gibi doğru besin dengesini elde etmek için makrolarınıza
            dikkat etmek çok önemlidir. Kalorilerinizin %45-60&lsquo;ını
            karbonhidratlardan, %10-35&lsquo;ini proteinden ve %25-35&lsquo;ini
            zeytinyağı veya avokado gibi sağlıklı yağlardan almayı hedeflemeniz
            sizin için önemli noktalardan biri olacaktır. Bu yüzdelerin bireysel
            ihtiyaçlara ve tercihlere bağlı olarak biraz değişebileceğini
            unutmamak önemlidir. Örneğin, fiziksel olarak daha aktif olan
            birinin diyetinde daha yüksek oranda proteine ihtiyaç duyulabilir.
          </p>
          <p className="diet-article">
            Hayvansal proteini bitki bazlı proteinle değiştirerek Akdeniz Diyet
            Planının vejetaryen versiyonunu yapmak da mümkündür.
          </p>
          <p className="diet-title" id="lowkarb-ozet">
            Düşük Karbonhidrat Diyeti nedir , neden denemek isteyebilirsin ?
          </p>
          <div className="ArticleandImage">
            <p className="diet-article">
              Düşük Karbonhidrat diyeti tam olarak ismini yansıtır; üç makro
              besin öğesinden biri olan karbonhidratları sınırlandırır, bunun
              yerine protein ve yağa ağırlık verir. Düşük karbonhidratlı diyet
              planlarının birçok türü vardır. Her birinin hangi yiyeceklerin
              yenileceği ve diyetin ne kadarının karbonhidrat olması gerektiği
              konusunda farklı kuralları vardır. <br />
              Düşük Karbonhidrat diyeti planının ana amacı kilo kaybıdır, ancak
              bazıları Tip 2 diyabeti veya metabolik koşulları kontrol etmek
              amacıyla da diyeti uygulayabilir.
            </p>
            <figure>
              <img src={Lowkarb} />
            </figure>
          </div>
          <p className="diet-article">
            Düşük Karbonhidrat diyetinin sabit bir tanım yoktur ve günlük
            tüketilen toplam karbonhidrat miktarı, hedeflere, tercihlere ve
            kişilere göre değişecektir. Düşük Karbonhidrat diyeti spesifik bir
            plandan ziyade bir temeldir ve Keto diyeti, Atkins diyeti, düşük
            karbonhidrat Paleo diyeti, sıfır karbonhidrat diyeti ve düşük
            karbonhidrat Akdeniz diyeti gibi alt dallarda incelenebilir.
          </p>
          <p className="diet-article">
            Bununla birlikte, herhangi bir düşük karbonhidrat diyeti planının
            ana fikri, tahıllar, patates, şekerli içecekler ve yüksek şekerli
            abur cuburlar gibi yüksek karbonhidratlı gıdaların alımını
            azaltmaktır. Çalışmalar, düşük karbonhidrat diyeti planlarının,
            özellikle de bitkisel yağ ve protein kaynakları açısından zengin
            diyetler tüketenlerin kalbe yardımcı olabileceğini göstermiştir.
          </p>
          <p className="diet-title" id="lowkarb-artilar">
            Düşük Karbonhidrat Diyeti Avantajları
          </p>
          <ul>
            <li>
              Abur cuburda bulunanlar gibi yüksek oranda işlenmiş gıdalardan ve
              rafine şekerlerden kurtulmak neredeyse her zaman faydalıdır. Temel
              bir düşük karbonhidrat planında hiçbir besin grubu tamamen hariç
              tutulmadığından, geniş bir seçenek yelpazesi sunarak diyete bağlı
              kalmayı kolaylaştırır.
            </li>
            <li>
              Düşük karbonhidrat diyeti gibi bir diyette tok hissetmenin
              faydalarından biri kalori sayma ve porsiyon boyutlarına bakma
              ihtiyacını azaltmasıdır; ancak çoğu kişi için besinleri takip
              etmek, sürece faydalı olacaktır.
            </li>
            <li>
              Çalışmalar, düşük karbonhidrat diyeti planlarının kilo verme
              sürecini hızlı bir şekilde başlatabildiğini göstermiştir. Kısa
              vadede düşük karbonhidratlı diyetler, düşük yağlı diyet
              planlarından daha iyi performans göstermektedir ancak uzun vadede
              bu avantaj ortadan kalkacaktır.
            </li>
            <li>
              Diyabet hastalıklarına da iyi gelmektedir. Tip-2 diyabetteki ana
              problem kan şekerinin yüksek olmasıdır. Normalde kan şekeri
              hormonlar ile kontrol altında tutulur. İnsülin kan şekerini
              düşürmek için vücut tarafından salgılanır. Fakat kan şekeri çok
              yüksek olduğunda salgılanan insülin yeterli olmayabilir ya da
              vücut bir süre sonra insüline tepki vermemeye başlayabilir.
              Dolayısıyla düşük karbonhidrat diyetleri karbonhidratı azaltarak
              kan şekerini direkt olarak düşürebilir. Daha stabil seyreden kan
              şekeri seviyesi, diyabet tedavisinde oldukça etkili olacaktır.
            </li>
            <li>
              Tip-1 diyabet insülin üreten hücreler zarar gördüğü için oluşur.
              Dolayısıyla tip-1 diyabeti tersine çevirmek olası değildir. Fakat
              kontrolünde işe yaramaktadır. Tip-1 diyabet hastaları için de
              düşük karbonhidrat diyetleri fayda sağlamaktadır.
            </li>
            <li>
              Karbonhidrat tüketimi az olduğu için enerji sistemi de değişir.
              Vücuttaki ana enerji kaynağı olan glikoz karbonhidrattan gelir.
              Glikozu yerine koymadıkça tükenecektir. Tükendiğinde de enerji
              kaynağı olarak yağların kullanılması artacaktır. Bu da daha fazla
              yağ yakmak demektir. Bir düşük karbonhidrat diyet türü olan
              Ketojenik diyet ise bunu bir seviye ileriye taşır. Proteini de
              kısıtlayarak keton üretimini daha fazla arttırır, enerji için
              yağların daha da çok kullanılmasını sağlar.
            </li>
            <li>
              Birçok vücut geliştirme sporcusu yarışma dönemlerinde düşük
              karbonhidrat diyetlerini kullanır. Özellikle podyuma çıkmadan bir
              iki hafta önce kaslardaki glikojen depolarını tüketmek için
              biçilmiş kaftandır. Yapılan antrenmanlara da bağlı olarak ciddi
              anlamda su atılır. Podyuma çıkmadan önce son günlerde de
              karbonhidratı arttırarak kasların normalden daha fazla su tutması
              sağlanır. Bu şekilde define denilen görüntüye yaklaşılmaya
              çalışılır.
            </li>
            <li>
              Düşük karbonhidrat diyetleri akne oluşumunu, mide kramplarını ve
              gazı azaltabilir. Epilepsi hastaları ve migren problemi yaşayan
              bireylerde semptomları azalttığı için hali hazırda
              kullanılmaktadır. Kolesterol ve tansiyon hastaları için de
              doktorlar tarafından önerilmektedir.
            </li>
          </ul>
          <div className="diet-information">
            İnsan vücudundaki tüm yağlar aynı değildir. Yağın nerede
            depolandığı, sağlığınızı ve hastalık riskinizi nasıl etkileyeceğini
            belirler. İki ana tür yağ vardır: Cildinizin altındaki deri altı
            yağı ve karın boşluğunuzdaki biriken ve çoğu fazla kilolu erkek için
            tipik olan iç organ yağıdır. Viseral yağ, organlarınızın çevresine
            yerleşme eğilimindedir. Aşırı iç organ yağı, iltihaplanma ve insülin
            direnci ile ilişkilidir ve günümüzde Batı&lsquo;da çok yaygın olan
            metabolik işlev bozukluğuna, obeziteye neden olabilir. Düşük
            karbonhidratlı diyetler bu zararlı karın yağını azaltmada çok
            etkilidir. Hatta genellikle düşük karbonhidratlı diyetlerle
            kaybedilen yağların büyük bir kısmının karın boşluğundan geldiği
            görülmektedir.
          </div>
          <p className="diet-title">Düşük Karbonhidrat Diyeti Dezavantajları</p>
          <ul>
            <li>
              Beslenme ve sağlık uzmanları genellikle besin kategorilerinin
              tamamını diyetinizden çıkarmamanızı tavsiye eder. Karbonhidrat
              tüketimindeki ani ve ciddi bir azalma, baş ağrısı, kramp ve
              kabızlık gibi bazı geçici yan etkilere neden olabilir. Çok az
              karbonhidrat varsa vücudunuz ketoza girebilir, bunun yerine
              depolanan yağları parçalayabilir. Bu sonuç kötü olmamakla birlikte
              her zaman isteneni vermeyebilir. Çoğu beslenme uzmanı uzun süre
              karbonhidratsız kalmamanızı önerir.
            </li>
            <li>
              Daha önce de bahsettiğimiz “keto gribi” bu tarz beslenen insanlara
              sorun olabilir.
            </li>
            <li>
              Beyin tercihen sağlıklı karbonhidratlardan elde edilen şekerleri
              kullanır; bunların eksikliği kafa karışıklığına ve sinirliliğe yol
              açabilir.
            </li>
            <li>
              Sınırlı miktarda karbonhidrat tüketmek (özellikle meyve, sebze ve
              tam tahıllar) mikro besin eksikliklerine yol açabilir. Meyve ve
              sebzelerde doğal şekerler bulunurken aynı zamanda polifenol
              formunda lif, vitamin, mineral ve antioksidanlar da bulunur. Bu
              tür beslenme vitamin ve mineral gereksinimlerinin yeterince
              karşılanmamasını sağlayabilir.
            </li>
            <li>
              Lif eksikliğinden kaynaklanan sindirim problemleri kabızlık
              yaratabilir. Lif takviyesi almak bu soruna bir çözüm olarak
              sunulabilir.Normalde karbonhidrat aldıkça artan hormonların
              düşmesi yüzünden metabolizma yavaşlayabilir. Bu da kilo verme
              hızınızı sekteye uğratabilir.
            </li>
            <li>
              Patlayıcı güç üretiminde ilk kullanılan kaynak kaslardaki
              glikojenlerdir. Glikojen yokluğunda anaerobik aktivitelerde
              performans düşüşüne uğrayabilirsiniz.
            </li>
            <li>
              Düşük karbonhidratlı diyetler sıklıkla doymuş yağ miktarını
              artırabilir ve bu da yaygın olarak kötü kolesterol olarak bilinen
              LDL’nin artmasına yol açabilir. Bu, yağlı karaciğer ve
              kardiyovasküler hastalık riskini artırabilir.
            </li>
            <li>
              Büyük bir araştırmadan ve insanları 20 yılı aşkın süredir takip
              eden uzun vadeli ileriye dönük bir çalışmadan elde edilen veriler,
              günlük enerjinin %40&lsquo;ından azının karbonhidrattan geldiği
              düşük karbonhidratlı bir diyetin, erken ölüm riskinin daha yüksek
              olmasıyla ilişkilendirmiştir. Ancak bu veri seti içerisinde
              birbirinden oldukça farklı iki grup vardı. Karbonhidratları bitki
              bazlı yağ ve proteinle değiştiren kişilerde ölüm oranı ve
              kardiyovasküler risk daha düşüktü. Karbonhidratı hayvansal yağ ve
              proteinle değiştiren kişilerde ölüm riski ve kardiyovasküler risk
              daha yüksekti.
            </li>
            <li>
              Kısıtlayıcı bir diyetin sürdürülmesi zordur ve bu nedenle herhangi
              bir kilo kaybının geçici olması muhtemeldir. Bu kısıtlama aynı
              zamanda besinlerle sağlıksız ve takıntılı bir ilişki yaratma
              riskini de taşımaktadır. Ayrıca, karbonhidrat alımının
              azaltılmasına bağlı olarak başlangıçtaki kilo kaybının çoğu, su
              ağırlığı olma eğilimindedir. Bu sebeple bu tarz beslenmelerde
              günlük su takibinin yapılması oldukça önemlidir.
            </li>
          </ul>
          <p className="diet-title" id="lowkarb-planlama">
            Düşük Karbonhidrat Diyeti Dostu Besinler
          </p>
          <p className="diet-article">
            Özetle, protein ve/veya yağ oranı yüksek, besin açısından zengin
            gıdalardır. Genel olarak, düşük karbonhidratlı bir diyet planı
            proteinlere ve nişasta içermeyen sebzelere odaklanacaktır:
          </p>
          <ul>
            <li>Dana eti, kuzu eti, tavuk ve diğer kümes hayvanları,</li>
            <li>
              Somon, alabalık, mezgit balığı, ton balığı gibi yağlı balıklar ve
              kabuklu deniz ürünleri,
            </li>
            <li>Kümes hayvanı yumurtaları,</li>
            <li>
              Ispanak, brokoli, karnabahar, havuç, kuşkonmaz, kereviz, domates
              gibi nişastasız sebzeler,
            </li>
            <li>
              Portakal, yaban mersini, çilek, ahududu, böğürtlen gibi düşük
              karbonhidratlı meyveler,
            </li>
            <li>
              Badem, ceviz, ayçiçeği çekirdeği, chia tohumu, antep fıstığı gibi
              kuruyemiş ve tohumlar,
            </li>
            <li>
              Peynir çeşitleri, tereyağı, krema, yoğurt gibi yüksek yağlı süt
              ürünleri,
            </li>
            <li>
              Avokado yağı, zeytinyağı, hindistan cevizi yağı gibi sağlıklı
              yağlardır.
            </li>
          </ul>
          <p className="diet-article">
            Takibi özenle yapılacak ve dikkatli bir şekilde tüketilebilecek
            besinler ise:
          </p>
          <ul>
            <li>
              Patates, tatlı patates, bezelye, mısır gibi yüksek nişastalı
              besinler,
            </li>
            <li>Muz, ananas, mango gibi yüksek karbonhidratlı meyveler,</li>
            <li>
              Esmer pirinç, bulgur, tam buğday unu, yulaf, kinoa gibi tam
              tahıllar,
            </li>
            <li>
              Mercimek, siyah fasulye, barbunya fasulyesi, nohut gibi
              baklagillerdir.
            </li>
            <li>
              Bitter çikolata antioksidan bakımından zengindir ve ölçülü olarak
              yerseniz sağlığınıza fayda sağlayabilir. Tüketirken en az %70
              kakao içeren bitter çikolataları tercih edin.
            </li>
            <li>
              Birçok içeceğin karbonhidrat ve kalori oranı yüksek
              olabileceğinden, mümkün olduğunca kahve, çay veya doğal maden suyu
              gibi ilave şeker içermeyen içecekleri seçmeyi düşünün. Ayrıca
              ilave şeker veya karbonhidrat içermeyen sek şaraplar da
              içebilirsiniz.
            </li>
          </ul>
          <p className="diet-title">
            Düşük Karbonhidrat Diyeti Düşmanı Besinler
          </p>
          <ul>
            <li>
              Yüksek oranda işlenmiş ürünler ve karbonhidratlardan genel olarak
              uzak durulmalıdır:
            </li>
            <li>
              Şeker, dondurma, unlu mamuller, ilave şeker içeren diğer ürünler,
            </li>
            <li>
              Beyaz pirinç, beyaz makarna, tortilla, kraker gibi rafine edilmiş
              tahıllar,
            </li>
            <li>
              Marketlerde diyet ve az yağlı ürün başlıklarıyla satılan ürünlerin
              çoğu,
            </li>
            <li>
              Hazır yemekler, fast food, kurabiyeler, cipsler gibi yüksek oranda
              işlenmiş gıdalar,
            </li>
            <li>
              Gazlı içecekler, tatlı çaylar, sporcu içecekleri, enerji
              içecekleri gibi ilave şeker içeren içecekler diyetinize zarar
              verebilir.
            </li>
          </ul>
          <p className="diet-title">Düşük Karbonhidrat Diyetinde Planlama</p>
          <p className="diet-article">
            Tipik bir düşük karbonhidrat diyetinde 20 ila 70 gram arası
            karbonhidrat sınırı bulunabilir. Bir gram karbonhidrat yaklaşık 4
            kalori olarak düşünüldüğünde bu miktarda günlük karbonhidrat
            tüketimi 80 ila 280 kalori sağlayacaktır. Karşılaştırma yapmak
            gerekirse, ABD için yayınlanan beslenme yönergeleri
            karbonhidratların günlük toplam kalorinin %45 ila %65&lsquo;ini
            kaplamasını önermektedir. Bu, günde 900 ila 1.300 kalori arasında
            olacaktır. Görüldüğü üzere düşük karbonhidrat diyetleri,
            karbonhidratlarda oldukça önemli bir kısıtlamaya gitmektedir.
          </p>
          <p className="diet-article">
            Örneğin,1800 kalorilik bir diyet için %5-15 karbonhidrat, %25-35
            protein ve %45-65 yağ aralığı uygulanabilir. Bu rakamlar yaklaşık 20
            ila 70 gram karbonhidrat, 110 ila 160 gram protein ve 90 ila 130
            gram yağ anlamına gelir.(1 gram protein yaklaşık 4 kalori ve 1 gram
            yağ yaklaşık 9 kaloridir.)
          </p>
          <p className="diet-article">
            Düşük karbonhidrat diyetlerinde çeşitlilik fazla olduğu için takip
            ettiğiniz alt diyet türüne göre makrolarınızı
            şekillendirebilirsiniz. Örnek olarak bir düşük karbonhidrat diyeti
            olan keto diyeti ile yolunuza devam ederseniz yağ ve protein
            yüzdelerinizi arttırabilir, karbonhidrat yüzdenizi çok düşük
            oranlara çekebilirsiniz.
          </p>
          <p className="diet-article">
            Daha az kısıtlayıcı olan düşük karbonhidrat diyet planları da
            mevcuttur. Bu planlar karbonhidratların günde yalnızca 100-150 gram
            arasında tutabilir.
          </p>
          <p className="diet-title" id="lowfat-ozet">
            Düşük Yağ Diyeti nedir , neden denemek isteyebilirsin ?
          </p>
          <div className="ArticleandImage">
            <p>
              Düşük yağlı bir diyet planı, toplam kalorinin %30&lsquo;undan daha
              azının yağdan geldiği bir plandır. Ulusal Sağlık Enstitüsü ve
              doktorlara göre, kalp hastalıklarını ve ölümleri azaltmak için
              ortalama beslenmenin daha az yağ içermesi gerekmektedir. <br />
              Yağlar üç temel makro besinden biridir ancak sınırlı miktarda
              tüketilmeleri gerekir. Dört çeşit diyet yağı vardır. Doymuş ve
              trans yağlar oda sıcaklığında katıdır. Tekli doymamış ve çoklu
              doymamış yağlar oda sıcaklığında sıvıdır. Son iki yağın, kötü
              kolesterol düzeylerini düşürdüğü için daha faydalı olduğu
              düşünülür, ancak bunların hepsinin sınırlandırılması gerekir. Bir
              gram yağ 9 kalori içerirken bir gram karbonhidrat veya protein 4
              kalori içerir.
            </p>
            <figure>
              <img src={Lowfat} />
            </figure>
          </div>
          <p className="diet-article">
            Çalışmalar, düşük yağlı diyetlerin kilo vermedeki etkinliğinin, uzun
            vadede düşük karbonhidratlı diyetlerle genel olarak benzer olduğunu
            göstermiştir. Endokrin Topluluğu için yapılan bilimsel bir
            araştırmada kalori alımı sabit tutulduğunda vücutta birikmiş olan
            yağın, vücuda alınan yağ ve karbonhidrat miktarındaki çok belirgin
            değişikliklerden bile etkilenmiyor gibi göründüğü kanısına
            varılmıştır.
          </p>
          <p className="diet-title" id="lowfat-artilar">
            Düşük Yağ Diyeti Avantajları
          </p>
          <ul>
            <li>
              Az yağlı diyet planı, ölüm oranlarını ve atardamarların
              sertleşmesi ve kalp hastalıkları gibi tehlikeli sağlık koşullarını
              azaltma kabiliyeti nedeniyle tüm disiplinlerdeki doktorlar
              tarafından yaygın olarak tavsiye edilmektedir. Ulusal Sağlık
              Enstitüsü&lsquo;ne göre, birçok ülkede yapılan çok sayıda çalışma,
              yüksek yağlı diyetler ile sağlık sorunları arasında doğrudan bir
              bağlantı olduğunu göstermiştir.
            </li>
            <li>
              Kalp hastalıklarının önlenmesi için az yağlı diyetler teşvik
              edilmektedir. Yağ alımını toplam kalorinin %35 ila 40&lsquo;ından
              toplam kalorinin %15-20&lsquo;sine düşürmenin toplam ve LDL
              kolesterolü %10 ila 20 oranında azalttığı gösterilmiştir ; ancak
              bu azalmanın büyük kısmı doymuş yağ alımındaki azalmadan
              kaynaklanmaktadır. Çok sayıda çalışmada doymuş yağın toplam ve LDL
              kolesterolü yükselttiği gösterilmiştir ve aynı zamanda daha yüksek
              kalp hastalığı riskiyle de ilişkilendirilmiştir.
            </li>
            <li>
              Örneğin, safra kesesi ameliyatından sonra iyileşiyorsanız veya
              safra kesesi ya da pankreas hastalığınız varsa, düşük yağlı
              diyetler sizin için faydalı olacaktır.
            </li>
            <li>
              Düşük yağlı diyetler ayrıca mide yanmasını önleyebilir, kilo
              kaybını teşvik edebilir ve kolesterol seviyelerini
              iyileştirebilir.
            </li>
          </ul>
          <p className="diet-title">Düşük Yağ Diyeti Dezavantajları</p>
          <ul>
            <li>
              Yağ, sağlıklı hücre büyümesini destekler ve vücudunuzun
              organlarını korur. Sağlıklı yağlar aynı zamanda kolesterolü ve kan
              basıncını kontrol altında tutabilir. Yağ alımınızı ciddi şekilde,
              özellikle de belirlenen sınırlar altına düşürürseniz bu faydaları
              sınırlayabilirsiniz ve vücudunuz ihtiyaç duyduğu besinleri
              alamayabilir.
            </li>
            <li>
              Yağlar tok hissetmenize yardımcı olur ve yiyeceklere keskin bir
              tat sağlar. Yemekler ve atıştırmalıklar sırasında yağın doyurucu
              özelliği olmazsa, farkında olmadan diğer yiyecekleri aşırı yemeye
              ve kalori alımınızı, şeker alımınızı veya karbonhidrat alımınızı
              hedeflerinizle tutarlı olmayan seviyelere çıkarmaya
              başlayabilirsiniz.
            </li>
            <li>
              Az yağlı diyet dünyada ilk tercih edilen diyet haline geldiğinde,
              birçok marka kurabiye, dondurma ve patates kızartması gibi
              geleneksel olarak yüksek yağlı gıdalara ultra işlenmiş, az yağlı
              alternatifler geliştirdi. Bu gıdalar genellikle şeker veya nişasta
              bakımından yüksektir ve aslında sağlık hedeflerinizi desteklemek
              yerine engelleyebilir.
            </li>
            <li>
              Düşük yağlı beslenme makro besin dengesizliklerine neden olabilir.
              Örneğin, yağı azaltıp kalori alımınızı ve protein alımınızı
              sürdürürseniz, muhtemelen daha fazla karbonhidrat tüketirsiniz.
              USDA, yetişkinlerin kalorilerinin %45 ila %65&lsquo;ini
              karbonhidratlardan aldığını öne sürüyor. Kalorilerinizin yalnızca
              %10&lsquo;unu yağlardan ve kalorilerinizin %25&lsquo;inden azını
              proteinden alıyorsanız, karbonhidrat alımınız önerilen kuralların
              üzerinde olacaktır. Daha fazla karbonhidrat daha fazla daha fazla
              açlık hissi anlamına gelebilir.
            </li>
            <li>
              Sağlıklı yağlar vücuda önemli faydalar sağlar. Vücudunuzun A, D, E
              ve K vitaminlerini emebilmesi için besinlerden alınan yağlara
              ihtiyacı vardır. Yağlı besinlerin alımı azaldığında bu
              vitaminlerin ve diğer mikro besinlerin emiliminde sorunlar
              yaşayabilirsiniz. Ayrıca fındık, tohum, avokado, zeytin ve süt
              ürünleri gibi birçok yağlı gıda lif, protein ve kalsiyum gibi iyi
              besin kaynaklarıdır.
            </li>
            <li>
              Aynı zamanda yağlar beyin sağlığı ve gelişimi için önemlidir.
              Özellikle bazı araştırmalar, doymamış yağlardan elde edilen yağ
              asitlerinin depresyona karşı koruma sağlayabileceğini
              göstermiştir.
            </li>
            <li>
              Az yağlı diyetlerin yüksek yağlı diyetlerle karşılaştırıldığında
              erkeklerde toplam ve serbest testosteron düzeylerini azalttığına
              dair sınırlı kanıt vardır. Düşük yağlı diyetlerde testosteronun
              azalmasının, testislerdeki testosteron sentezindeki azalmaya bağlı
              olduğu düşünülmektedir.
            </li>
          </ul>
          <p className="diet-title" id="lowfat-planlama">
            Düşük Yağ Diyeti Dostu Besinler
          </p>
          <ul>
            <li>
              Yaygın az yağlı diyet yiyecekleri arasında sebzeler, meyveler, tam
              tahıllı tahıllar, yumurta akı akıllara gelir.
            </li>
            <li>
              Yumurta sarısını haftada sadece birkaç kezle sınırlamanız tavsiye
              edilir ve kırmızı et yerseniz haftada üç porsiyondan fazla
              yememeniz önerilir. Az yağlı bir diyette kalorilerinizin çoğunluğu
              bitki bazlı gıdalar olmalıdır.
            </li>
            <li>
              Az yağlı süt, peynir, yoğurtlar ve kremalar da tüketilebilecek
              besinler arasındadır.
            </li>
            <li>
              Tahıllar, baklagiller ve baklagiller hem vücuda karbonhidrat
              yoluyla enerji sağlar hem de az yağlı diyet uygulayanlar için iyi
              bir protein kaynağıdır. Bu beslenme planında et alımı
              azaltılabilir, dolayısıyla diğer kaynaklardan protein almak
              önemlidir.
            </li>
            <li>Derisiz kümes hayvanları,</li>
            <li>Beyaz balıklar (morina, pisi balığı),</li>
            <li>
              Yağsız dana etleri(göğüs biftek, fileminyon, yağsız kıyma) gibi
              ürünler tercih edilebilir.
            </li>
          </ul>
          <p className="diet-title">Düşük Yağ Diyeti Düşmanı Besinler</p>
          <ul>
            <li>
              Katı ve sıvı yağlardan uzak durmak temel prensiptir. Tereyağı,
              margarin, zeytinyağı ve hindistancevizi yağı gibi azaltılmalıdır.
              kullanılmamalıdır.
            </li>
            <li>
              Az yağlı malzemelerle ev yapımı olmadıkları sürece mayonez, salata
              sosları, soslar sınırlandırılmalıdır.
            </li>
            <li>
              Tam yağlı süt ürünleri yerine az yağlı versiyonları tercih
              edilmelidir.
            </li>
            <li>
              Kuruyemiş ve tohumlar genellikle fazla yağ asidi içerdiğinden
              kontrollü tüketmek gerekir.
            </li>
            <li>Yüksek yağlı işlenmiş ve hazır yiyeceklerden kaçının.</li>
            <li>
              Pastırma, sosis, sucuk gibi ürünlerden ve yağlı etlerden
              olabildiğince uzak durun.
            </li>
            <li>
              Sakatatlar da uzak durulması gereken yiyecekler arasındadır.
            </li>
            <li>
              Çikolata, kek, kurabiye, turta, hamur işleri, çörek ve kruvasan
              gibi yüksek yağlı atıştırmalık yiyeceklerden kaçının.
            </li>
          </ul>
          <p className="diet-title">Düşük Yağ Diyetinde Planlama</p>
          <p className="diet-article">
            Gıdalarda bulunan yağın hem miktarını hem de türünü belirlemek için
            içerik etiketlerini dikkatlice okuyun. Yemek pişirirken derin yağda
            kızartılmış yiyeceklerden kaçının, etlerdeki görünür tüm yağları
            kesin. Pişirirken tavuk ve hindinin derisini çıkarın. Kızartmak
            yerine, fırında pişirin ya da haşlayın. Sebzeleri buharda pişirin ve
            yiyecekleri tatlandırmak için otlar kullanın. Tavaları ve tavaları
            yağlamak için pişirme spreylerini tercih edin.
          </p>
          <p className="diet-article">
            Az yağlı diyetin en yaygın kabul gören tanımı, yağ miktarını 100
            kalori başına 3 gram veya daha az şekilde sınırlamaktır.
          </p>
          <p className="diet-article">
            Örneğin günde 2000 kalori tüketiyorsanız, az yağlı bir diyette bunun
            540 kalorisi yağlardan gelebilir. Her bir gram yağ 9 kalori
            içerdiğinden günde yaklaşık 60 gram yağ tüketebilirsiniz. Günde 1800
            kalori tüketenler yağdan 486 kalori, yani 54 gram tüketebilirler.
            Günde 1500 kalori tüketenler ise 405 kaloriyi,45 gram yağdan
            alabilirler.
          </p>
          <p className="diet-title" id="highpro-ozet">
            Yüksek Protein Diyeti nedir , neden denemek isteyebilirsin ?
          </p>
          <div className="ArticleandImage">
            <p className="diet-article">
              Yüksek protein diyetleri, birçok düşük karbonhidratlı diyetin
              şemsiyesi altındadır. Yüksek proteinli diyet planları, kilo
              kaybını artırmak, kas inşa etmek ve enerjiyi artırmak için daha
              fazla protein ve daha az karbonhidrat ve yağ yemeyi teşvik eder.{" "}
              <br />
              Protein yaşam için gereklidir; her insan hücresinin yapı taşıdır
              ve insan vücudunun hayati fonksiyonlarında rol oynar. Büyüme,
              gelişme ve doku onarımında özellikle önemlidir. Karbonhidratlar ve
              yağlarla birlikte protein, üç ana makro besin öğesinden biridir.
              Protein, amino asit adı verilen 20 daha küçük birimden oluşan bir
              zincirden oluşur. Bunlardan dokuzu esansiyel amino asitler olarak
              kabul edilir. Vücudunuz bunları üretemediği için besinlerden temin
              edilmeleri gerekir.
            </p>
            <figure>
              <img src={HighPro} />
            </figure>
          </div>
          <div className="diet-article">
            Yüksek proteinli diyetler tüm insanlık tarihi boyunca hem gelenekten
            dolayı hem de zorunluluktan dolayı var olmuştur. Yüksek proteinli
            diyet planlarının bazı örnekleri arasında Atkins diyeti, South Beach
            diyeti ve Akdeniz diyeti yer almaktadır.
          </div>
          <p className="diet-title" id="highpro-artilar">
            Yüksek Protein Diyeti Avantajları
          </p>
          <ul>
            <li>
              Ekstra protein, yemekleri daha geleneksel bir kilo verme planına
              göre daha tatmin edici hale getirebilir. Sonuçta çoğu insan
              brüksel lahanası veya brokoli yerine biftek yemek ister.
            </li>
            <li>
              Protein kas yapımında ve korunmasında önemlidir, bu nedenle
              düzenli egzersiz yaparsanız yüksek proteinli bir diyet planı
              ekstra destek alır. Özellikle yüksek proteinli diyet planlarının
              son zamanlarda popüler hale gelmesiyle birlikte, çok çeşitli
              sağlıklı seçenekler ortaya çıktı.
            </li>
            <li>
              Yemeklerinize ve atıştırmalıklarınıza protein eklemenin verdiği
              tokluk, kendinizi tok hissetmenize yardımcı olabilir, bu da
              porsiyon kontrolüne yardımcı olur.
            </li>
            <li>
              Araştırmalara göre, yetişkin erkeklerin günde en az 56 gram
              protein, yetişkin kadınların ise günde en az 46 gram protein
              alması gerekir. Ancak bazı araştırmalar, bu miktardan daha fazla
              yemenin, kas kütlesini korurken ve hatta geliştirirken vücut
              ağırlığını ve yağını kaybetmenize yardımcı olabileceğini öne
              sürüyor.Başka bir araştırma ise daha yüksek protein alımının bazal
              (BMR) ve dinlenme (RMM) metabolizma hızlarının artırabileceğini
              buldu. Bu, yemekten sonraki birkaç saat boyunca ve uyku sırasında
              daha fazla kalori yakmanıza yardımcı olabilir. Tipik olarak kalori
              alımınızı azalttığınızda metabolizmanız yavaşlar. Bu kısmen kas
              kaybından kaynaklanmaktadır. Bununla birlikte, daha yüksek bir
              protein alımı, kas kaybına karşı korunmanıza ve metabolizma
              hızınızı yüksek tutmanıza yardımcı olabilir.
            </li>
            <li>
              Protein ayrıca vücudunuzun yiyecekleri emmek, metabolize etmek ve
              depolamak için kullandığı enerji miktarını da artırabilir. Buna
              gıdanın termik etkisi (TEF) denir. Protein için TEF
              %20-30&lsquo;dur; bu, proteinde bulunan kalorilerin
              %20-30&lsquo;unun sadece onu sindirmek için kullanıldığı anlamına
              gelir. Bu arada karbonhidrat ve yağ için TEF sırasıyla %5-10 ve
              %0-3&lsquo;tür.
            </li>
            <li>
              Yüksek proteinli bir diyet planı aynı zamanda ketojenik bir diyet
              planına veya paleo diyet planına göre daha az şiddetlidir. Bu,
              takip etmenin ve bağlı kalmanın daha kolay olduğu anlamına gelir.
              Vücudunuzu keto diyetindeki gibi ketoz durumuna sokmazsınız ve
              paleo diyetinden farklı olarak tam tahıllı buğday ve pirinç gibi
              besinler hala menüde yer alır.
            </li>
            <li>
              Obezite hastaları, %25 protein alımını arttırıp, %60 kalori
              alımını kısıtladığında gece horlamasında belirgin bir azalma
              gözlenmiştir. Dopamin gibi hormon sentezini de arttırdığı için
              verimli bir beyin aktivitesine protein diyeti yardımcı olur.
            </li>
            <li>
              Termik etki yapan aminoasit türevli beslenme, 260 kat daha fazla
              yağ ve karbonhidrat yakımını hızlandırır.
            </li>
            <li>
              Kan basıncını düşürür, kötü huylu kolesterolü (LDL) ve trigliserit
              seviyesini aşağıya çekerek karaciğer yağlanmasını engelleyebilir.
            </li>
          </ul>
          <p className="diet-title">Yüksek Protein Diyeti Dezavantajları</p>
          <ul>
            <li>
              Bir kişinin yemesi gereken protein miktarının limitleri vardır.
              Hayattaki pek çok şeyde olduğu gibi bir şeyin çok fazlası zarar
              verebilir. Aşırı protein yemek, kişiyi böbrek taşı açısından daha
              yüksek risk altına sokabilir. Ayrıca bol miktarda kırmızı et ve
              doymuş yağ içeren yüksek proteinli bir diyet planı, daha yüksek
              kalp hastalığı veya kolon kanseri riskine yol açabilir. Bununla
              birlikte, bol miktarda bitki bazlı protein içeren yüksek proteinli
              bir diyet planı aynı riske sahip olmayabilir.
            </li>
            <li>
              Yüksek proteinli diyet planları bazen yeterince lif içermeyebilir
              ve bu da kabızlığa veya diğer sağlık sorunlarına neden olabilir.
              Lif, iltihaplanma ve kansere karşı koruma sağlar.
            </li>
            <li>
              Vücuda alınan fazla protein böbreklere ekstra yük bindirdiğinden
              ve böbrek yoluyla atıldığından, böbrek hastalığı olan kişiler,
              böbreklere ekstra yük bindirmesi ve böbrek taşı riski nedeniyle
              yüksek proteinli bir diyete başlamadan önce bir doktorla
              konuşmalıdır.
            </li>
            <li>
              Ayrıca fazla açığa çıkan azot miktarı böbrekleri zorlayarak üre
              seviyesini olumsuz etkileyebilir. Kan düzeyinde artan asitlik kan
              pH’ını olumsuz etkileyerek yaşamsal fonksiyonlara zarar verebilir.
              Son olarak, beyinin birincil enerji kaynağı karbonhidrat yani
              şekerlerdir. Yeterli miktarda alınmaması ise beyin aktivitesini
              azaltabilir.
            </li>
          </ul>
          <p className="diet-title" id="highpro-planlama">
            Yüksek Protein Diyeti Dostu Besinler
          </p>
          <ul>
            <li>
              Yağsız kırmızı etler yüksek oranda B12, demir ve aminoasit türevi
              içermesiyle bu diyet için biçilmiş kaftandır.
            </li>
            <li>
              Yeşil mercimek, taze fasulye ve bezelye gibi baklagiller ekonomik,
              tüketime elverişli, tiamin, niyasin ve diğer B vitaminlerini
              içeren ve sindirimi kolay dönüşebilir bir besinlerdir.
            </li>
            <li>
              Balık çeşitleri ve kabuklu deniz ürünleri bol miktarlarda fosfor,
              çinko, Omega 3 ve protein içerdiğinden önemli besinlerdir.
            </li>
            <li>
              Karnabahar, brokoli, marul, havuç, biber, salatalık, turp, kabak,
              zeytin ve mantar gibi sebzeler bitkisel protein için önemli
              kaynaklardır. Aynı şekilde elma, şeftali, muz, kavun, domates gibi
              meyveler de bu konuda size yardımcı olacaktır.
            </li>
            <li>
              Kinoa protein indeksi yüksek aynı zamanda yağ yakma özelliği ile
              fonksiyonel bir besindir.
            </li>
            <li>
              Süt ürünleri ve yumurta özellikle kahvaltılar için vazgeçilmezdir.
            </li>
            <li>
              Beyaz et olarak tavuk, hindi, ördek ve diğer küçükbaş hayvanlardan
              elde edilen kısımlar bol miktarda protein içermektedir.
            </li>
            <li>
              Ceviz, badem, çam fıstığı, fındık, kabak çekirdeği, susam tohumu,
              ay çiçek tohumu, makademya vb. kuru yemişler de yüksek miktarlarda
              protein içermektedir. Yüksek proteinli diyet planına sahip
              kişilerin, fazla su içmeleri gerekecektir.
            </li>
            <li>
              Yüksek proteinli diyet planına sahip kişilerin, fazla su içmeleri
              gerekecektir.
            </li>
          </ul>
          <p className="diet-title">Yüksek Protein Diyeti Düşmanı Besinler</p>
          <ul>
            <li>
              Yüksek proteinli bir diyet planında kaçınılması gereken en büyük
              gıdalar, özellikle yağlarla birleştirildiğinde ağır şekilde
              işlenmiş karbonhidratlardır.
            </li>
            <li>
              Aynı zamanda beyaz ekmek, beyaz pirinç ve bol miktarda şeker veya
              mısır şurubu içeren besinleri kesmek önemlidir. Yüksek proteinli
              bir diyet planında toplam karbonhidratlar azalır, fakat tamamen
              kaybolmadığı için bu besinleri tam tahıllı veya kahverengi
              halleriyle değişmek sizin için bir avantaj olacaktır. Bu sayede
              lif tüketiminizi de dengelemiş olursunuz.
            </li>
            <li>
              Diğer diyet türlerinde de olduğu gibi şeker, dondurma, unlu
              mamuller, ilave şeker içeren diğer ürünler, hazır yemekler, fast
              foodlar, kurabiyeler, cipsler gibi yüksek orada işlenmiş gıdalar,
              gazlı içecekler, tatlı çaylar, sporcu içecekleri, enerji
              içecekleri gibi ürünlerin tüketilmemesine özen gösterilmelidir.
            </li>
          </ul>
          <p className="diet-title">Yüksek Protein Diyetinde Planlama</p>
          <p className="diet-article">
            Yüksek proteinli bir diyet planı genellikle her öğünde protein
            yemeyi gerektirir. Her gün ihtiyacınız olan protein miktarı yaşınız
            ve cinsiyetiniz gibi çeşitli faktörlere bağlıdır. Kesin miktar da
            biraz tartışmalıdır.
          </p>
          <p className="diet-article">
            Proteinin tavsiye edilen besin miktar, vücut ağırlığının kilogramı
            başına 0,8 gramdır. Ancak 2019 tarihli bir araştırma, bu sayının
            genellikle ideal sayı olarak yanlış yorumlandığını öne sürüyor.
            Araştırmaya göre bu miktar, çoğu sağlıklı bireyde besin
            eksikliklerini ve kas kaybının önüne geçmek için gereken minimum
            protein miktarıdır.
          </p>
          <p className="diet-article">
            Araştırmalar, önerilen miktardan daha fazla protein tüketmenin kilo
            kaybını ve genel sağlığı destekleyebileceğini öne sürüyor. Örneğin
            2017&lsquo;de yapılan bir araştırmada, 6 aylık sürede normal
            gereksinimden fazla olarak belirlenen kg başına 1,34 kg düzeyinde
            yüksek proteinli bir diyetle beslenen katılımcıların, normal gruba
            göre önemli ölçüde daha fazla kilo kaybı yaşadığını buldu. Bu konuda
            birçok yaş aralığında çok sayıda çalışma bulunmaktadır. Eğer
            profesyonel atlet değilseniz üst limit olarak kilo başına 2 gram
            protein alınabilir.2016 yılında yapılan diğer bir çalışmaya göre bu
            miktarın üzerinde proteinin somut bir ek fayda sağlamadığını ortaya
            koymuştur.
          </p>
          <p className="diet-article">
            Kilo kaybı ve genel sağlık için yüksek proteinli bir diyette,
            protein oranı olarak kilo başına yaklaşık 1.2/2 gram aralığı baz
            alınmalıdır. Örneğin 70 kg iseniz, bu günlük 84-140 g protein
            demektir.
          </p>
          <p className="diet-article">
            Yüksek proteinli bir diyet için tipik bir başlangıç oranı, kalorinin
            %30&lsquo;unun proteinden, kalorinin %30&lsquo;unun yağdan ve
            %40&lsquo;ının karbonhidratlardan oluşmasıdır. Diyetin türü
            değiştikçe makrolar da değişir. Örneğin düşük karbonhidrat-yüksek
            protein ikilisini baz alıyorsanız %35-%40 protein, %25-%40 arası
            karbonhidrat ve %30 ila %40 arası yağdan oluşan bir makro besin
            oranı kullanabilirsiniz. Süreç içerisinde kendinize en uygun
            makroları Count&Eat yardımıyla oluşturabilirsiniz.
          </p>
          <p className="diet-title" id="diger">
            Diğer Diyet Türleri
          </p>
          <p className="diet-article">
            Count&Eat, aşağıdaki diyet türlerinden herhangi biri için önceden
            ayarlanmış programlara sahip değildir fakat “Tercihler” sayfalarını
            kullanarak oluşturucumuzu birçok diyetle uyumlu çalışacak şekilde
            yapılandırmak mümkündür. (Ücretsiz veya Premium hesapla oturum
            açtığınızda erişilebilir).
          </p>
          <p className="diet-title">Alkali Diyet</p>
          <p className="diet-article">
            Alkali diyet planının arkasındaki fikir, buğday, rafine şeker ve
            işlenmiş gıdalar gibi bazı gıdaların vücudunuzun asit üretmesine
            neden olması ve bunun sizin için kötü olmasıdır. Bu nedenle
            vücudunuzu daha alkali hale getiren yiyecekler tüketmek sizi
            koruyacak ve kilo vermenize yardımcı olacaktır. Alkali diyet planı
            çoğunlukla vejetaryendir; meyveler, sebzeler, soya fasulyesi ve tofu
            alkaliyi destekleyen gıdalardır; süt ürünleri, yumurta, et, çoğu
            tahıl ve işlenmiş gıdalar ise asiti teşvik eden gıdalardır. PH
            dengeleme öncülüne bakılmaksızın, meyve ve sebzelere odaklanan kabul
            edilebilir gıdaların tümü oldukça sağlıklıdır.
          </p>
          <p className="diet-title">Atkins Diyeti</p>
          <p className="diet-article">
            Atkins Diyeti en popüler düşük karbonhidratlı, yüksek yağlı, yüksek
            proteinli diyet planlarından biridir. Bol miktarda et, peynir,
            yumurta ve tereyağı, mayonez ve krema gibi yiyeceklerin
            tüketilmesini teşvik eder ancak ekmek, tahıl ve makarnadan uzak
            durulmasını önerir. Ketojenik diyeti uygulamaya çok benzer, ancak
            haftadan haftaya çeşitli aşamaları takip eder.
          </p>
          <p className="diet-title">Body Builder Diyeti</p>
          <p className="diet-article">
            Vücut geliştirme, ağırlık kaldırma ve beslenme kombinasyonu yoluyla
            vücudunuzun kaslarını büyütmeye odaklanır. Vücut geliştiriciler
            aşırı egzersiz yapar ve belirli bir yağsız, kaslı fiziği hedefler.
            Vücut geliştiriciler yüksek kalorili, yüksek proteinli bir diyetle
            beslenirler ve kas kütlesi kazanmak için yoğun bir şekilde ağırlık
            kaldırırlar, ardından yarışmalardan önce yağları büyük ölçüde
            azaltmaya çalışırlar. Bu, özel bir diyet planı türüdür, ancak
            Count&Eat hesabınızda yapabileceğiniz ayarlamalar makro ve kalori
            hedefleriniz ne olursa olsun tasarlanacak şekilde
            özelleştirilebilir.
          </p>
          <p className="diet-article">
            Kas geliştirmek için büyük öğünler hazırlamak için çok fazla yemek
            gerektirir ve yemek pişirmeyi daha az angarya haline getirmek için
            yemeklerinizi daha fazla tekrarlamanıza yardımcı olabilir. Benzer
            yiyecekleri belirli öğünlere “sık sık” veya “her zaman” olarak
            sabitlemek için C&E’nin “Yinelenen Yiyecekler” özelliklerine göz
            atın.
          </p>
          <p className="diet-title">FODMAP Diyeti</p>
          <p className="diet-article">
            FODMAP diyeti, özellikle sindirim sistemi sorunlu ve Huzursuz
            Bağırsak Sendromu (IBS) gibi durumların bakımına odaklanan görece
            yeni bir diyet planıdır. Belirli gıdaların kısıtlanması, bu gıdalara
            duyarlı kişilerin durumlarını iyileştirebilir. FODMAP, fermente
            edilebilir oligo, di-, mono-sakarradiler ve poliolleri temsil eder.
            Bunlar şişkinlik, gaz ve mide ağrısını tetikleyebilen kısa zincirli
            karbonhidratları belirtir. Kısaca FODMAP diyetini uygulayan kişinin
            buğday, çavdar, baklagiller, sarımsak, soğan, süt ve peynir gibi
            laktoz içeren ürünlerden, incir, mango ve böğürtlen gibi fruktoz
            içeren meyveler yememeleri tavsiye edilir. FODMAP diyetinin sindirim
            sistemini düzelttiği ve şişkinlik, ishal, kabızlık gibi belirtilere
            yardımcı olabileceği kanıtlanmıştır. <br />
            Count&Eat kullanarak öğün planlama sisteminde seçtiğiniz özel
            besinleri hariç tutarak bu tarz bir diyet tasarlayabilirsiniz
          </p>
          <p className="diet-title">Carnivore Diyet</p>
          <p className="diet-article">
            Etobur beslenme planı, adından da anlaşılacağı gibi, diğer tüm
            gıdalar hariç, tamamen et ve hayvansal ürünlerin tüketilmesinden
            oluşur. İnsanların hayvansal ürünlerden başka neredeyse hiçbir şey
            yemediği kültürler ve zamanlar olsa da (neredeyse yalnızca et, yağ,
            kan ve süt yiyen bazı kabileler gibi), bu, lifin yanı sıra çok
            sayıda mikro besin maddesinden de yoksun olan oldukça kısıtlayıcı
            bir diyettir. Keto ve paleo diyetleri gibi diğer düşük
            karbonhidratlı diyetler de karbonhidratları sınırlar, ancak onları
            tamamen kısıtlamazlar.
          </p>
          <p className="diet-title">DASH Diyeti</p>
          <p className="diet-article">
            DASH (Hipertansiyonu Durdurmak İçin Diyet Yaklaşımları) diyet planı,
            yüksek tansiyonu tedavi etmek için tasarlanmış sağlıklı beslenme
            diyetidir. Bu, potasyum, kalsiyum ve magnezyum açısından zengin
            gıdaların tüketilmesi ve sodyum/tuz, doymuş yağ ve şeker oranı
            yüksek gıdaların sınırlandırılması anlamına gelir. DASH diyet
            planında önerilen günlük tuz alımı günde yaklaşık 1 çay kaşığıdır ve
            bu aynı zamanda Amerikan Kalp Derneği tarafından da tavsiye edilen
            miktardır. DASH diyet planı sebzelere, meyvelere, tam tahıllara ve
            balık, kümes hayvanları, fasulye ve fındık gibi az yağlı ürünlere
            odaklanır. <br />
            C&E’nin beslenme menüsünde sodyum için bir sınır
            belirleyebilirsiniz.
          </p>
          <p className="diet-title">Aralıklı Oruç Diyeti</p>
          <p className="diet-article">
            Aralıklı oruç diyet planları, insanların oruç tutma ve yemek yeme
            dönemleri arasında geçiş yapmasını sağlayan yeme kalıplarıdır.
            Özellikle yemeniz gereken yiyecekleri belirtmez, bunun yerine ne
            zaman yemeniz gerektiğini belirtir. Aralıklı oruç genellikle günlük
            16 saatlik orucu veya haftada iki kez 24 saatlik orucu içerir; bu
            fikir, genel olarak atalardan kalma avcı-toplayıcıların nasıl uzun
            süre yiyeceksiz kalmak zorunda kalmış olabileceğine dayanmaktadır.
            Oruç aynı zamanda İslam, Hıristiyanlık, Yahudilik ve Budizm dahil
            olmak üzere dini veya manevi nedenlerle de tutulabilir.
          </p>
          <p className="diet-title">Makrobiyotik Diyet</p>
          <p className="diet-article">
            Makrobiyotik diyet planı, organik, yerel olarak yetiştirilen tam
            tahıllar, sebzeler ve fasulyenin tüketilmesine dayanan pesketaryen
            (vejetaryen + balık yeme) bir diyet planıdır. İdeal dağılım, haftada
            bir ila üç kez taze deniz ürünleri ile birlikte %60 tam tahıllar,
            %30 sebzeler ve %10 fasulye, tofu ve deniz yosunudur. Tavsiye edilen
            tek tatlandırıcı pirinç şurubudur ve tatlandırıcı olarak diğer
            baharatların değil, şifalı otların kullanılması tavsiye edilir.
            Makrobiyotik diyet planı ayrıca bol miktarda ılık çorba yemeyi de
            içerir.
          </p>
          <p className="diet-title">Whole30 Diyeti</p>
          <p className="diet-article">
            Whole30 diyet planında 30 gün boyunca bazı tam gıdaları yersiniz.
            Whole30 diyeti bir eliminasyon diyetidir. Yaygın alerjenler
            içerebilecek veya iltihabı tetikleyebilecek yiyecekleri
            yemediğinizde vücudunuzun nasıl tepki verdiğini görürsünüz. Bu, hile
            yapılmasına izin verilmediği anlamına gelir; programın 30 gün
            boyunca harfiyen takip edilmesi gerekir. 30 gün sonra, nasıl
            hissettiğinize dikkat ederek yasaklı yiyecek gruplarını sistematik
            olarak yeniden tanıtmaya başlarsınız, böylece alerjik tepkileri veya
            iltihaplanmayı tetikleyen yiyecekler ortadan kaldırılabilir. Whole30
            diyet planı, en azından asıl amaç olarak bir kilo verme planı olarak
            tasarlanmamıştır. Yediğiniz yemeğin sağlığınızı olumsuz
            etkilediğinden şüpheleniyorsanız Whole30 diyet planı bir seçenektir.
          </p>
          <p className="diet-title">Glutensiz Diyet</p>
          <p className="diet-article">
            Glutenden kaçınmak birçok kişi için bir beslenme tercihi olabilir.
            Ancak çölyak hastalığı olarak bilinen bir rahatsızlığı olanlar için
            bu tıbbi bir zorunluluktur. Adından da anlaşılacağı gibi, glutensiz
            beslenme planının takipçileri, gluten içeren tüm yiyeceklerden
            kaçınırlar. Gluten buğday, arpa, çavdar ve yulafta bulunan bir
            proteindir. Bunlar ekmek, makarna ve tatlılar gibi temel gıdalarda
            yaygın olarak kullanılan malzemelerdir. <br /> <br />
            İnsanlar çeşitli nedenlerden dolayı glutensiz bir diyet planını
            takip edebilirler:
          </p>
          <ul>
            <li>
              <b>Çölyak hastalığı :</b> Bu duruma sahip kişiler gluteni
              tüketemez çünkü gluten, mide-bağırsak yollarına zarar veren,
              iltihaba neden olan ve vücudun gıdalardaki besin maddelerini
              emmesini zorlaştıran bir otoimmün tepkiyi tetikler. Çölyak
              hastalığının belirtileri arasında şişkinlik, kabızlık ve ishal de
              yer alır.
            </li>
            <li>
              <b>Gluten hassasiyeti/toleransı : </b> Bu duruma sahip kişilerde
              çölyak hastalığı yoktur ancak diğer semptomların bazıları görülür.
            </li>
          </ul>
          <p className="diet-article">
            Herhangi bir sağlık problemi olmayan insanlar da glutensiz beslenme
            planını takip edebilir. Çünkü bu tarz beslenmenin baş ağrısı,
            depresyon, kronik yorgunluk ve kilo alma gibi diğer sağlık
            sorunlarına yardımcı olduğuna dair araştırmalar bulunmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllDiets;
