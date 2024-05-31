import "./Dmca.css";

const Dmca = () => {
  return (
    <div className="main-dmca">
      <div className="dmca-container">
        <h1 className="text-3xl mb-4">Telif Hakları</h1>
        <p className="text-xl">
          Bağımsız bir şirket olan Count&Eat, yaratıcıların mülkiyet haklarına
          saygı gösterilmesine yardımcı olmak için aşağıdaki politikayı
          uygulamaya koymuştur:
        </p>
        <br />
        <p className="text-xl">
          Metni http://www.copyright.gov/legislation/dmca.pdf adresinde
          bulunabilecek 2024 Dijital Binyıl Telif Hakkı Yasası uyarınca, Şirket,
          Şirketin web sitesindeki telif hakkı ihlali iddialarına hızlı bir
          şekilde yanıt verecektir veya hizmeti aracılığıyla verecektir.
        </p>
        <br />
        <p className="text-xl">
          Telif hakkı sahibiyseniz ve telif hakkıyla korunan materyalinizin Site
          veya Hizmette ihlal edildiğine inanıyorsanız, belirlenen temsilcimize
          (aşağıda listelenmiştir) aşağıdaki bilgileri içeren yazılı bir
          bildirim (“İhlal Bildirimi”) sağlayabilirsiniz. İhlal Bildiriminiz
          içeriği kullanıma sunan tarafa iletilebilir.
        </p>
        <br />
        <p className="text-xl">
          Bir İhlal Bildiriminde bulunmak için lütfen bize aşağıdaki bilgileri
          sağlayın:
        </p>
        <ul>
          <li>İhlal edildiği iddia edilen telif hakkının kimliği;</li>
          <li>
            Telif hakkınızı ihlal ettiğini iddia ettiğiniz içeriğin niteliğine
            ve tam konumuna ilişkin bir açıklama (varsa URL);
          </li>
          <li>Adınız, adresiniz, telefon numaranız ve e-posta adresiniz;</li>
          <li>
            Tarafınızca (telif hakkı sahibi veya söz konusu sahibinin
            temsilcisi) tarafınızca yapılan bir beyan: (a) telif hakkınızı ihlal
            ettiğini iddia ettiğiniz içeriğin kullanımına kanunen izin
            verilmediğine iyi niyetle inandığınıza; (b) İhlal Bildiriminizde yer
            alan tüm bilgilerin doğru olduğunu; ve (c) yalan yere yemin etme
            cezası altında, telif hakkı sahibi veya onlar adına hareket etme
            yetkisine sahip bir kişi olduğunuzu;
          </li>
          <li>
            Telif hakkı sahibinin veya onun adına hareket etmeye yetkili başka
            bir kişinin fiziksel veya elektronik imzası;
          </li>
        </ul>
        <p className="text-xl mb-5">
          Söz konusu İhlal Bildirimi şu adrese gönderilebilir:
        </p>
        <p className="text-xl">John Doe</p>
        <p className="text-xl">665. Cadde</p>
        <p className="text-xl">Keçiören, Ankara 06000</p>
        <br />
        <p className="text-xl">Ya da mail aracılığıyla: counteat@gmail.com</p>
        <br />
        <p className="text-xl">
          Telif hakkınızın ihlal edildiğine dair maddi olarak yanlış beyanda
          bulunursanız, zararlardan (masraflar ve avukatlık ücretleri dahil)
          sorumlu olacağınızı lütfen unutmayın. Böyle bir ihlalin gerçekleşip
          gerçekleşmediğinden emin değilseniz, bir avukata danışmayı
          düşünmelisiniz.
        </p>
      </div>
    </div>
  );
};

export default Dmca;
