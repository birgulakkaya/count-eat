// import { useState } from "react";
import Superman from "../../../Assets/HomePageImages/ReviewsImg/superman.png";
import Girl from "../../../Assets/HomePageImages/ReviewsImg/animationgirl.png";
import Batman from "../../../Assets/HomePageImages/ReviewsImg/batman.png";
import Warning from "../../../Assets/HomePageImages/ReviewsImg/warning.png";
// import Foods from "../../../datafood.json";
import "./Reviews.css";

const Reviews = () => {
  // const [foods] = useState(Foods.Recipe);

  return (
    <>
      <div className="reviews">
        <div className="reviews-container">
          <div className="review">
            <div className="review-image">
              <img src={Superman} alt="image" />
            </div>
            <div className="review-desc ">
              <p>
                “Count&Eat sadece benim günlük kalori hedeflerimi tutturmamı
                sağlamadı.Aynı zamanda her gün aynı tatsız şeyleri yememi de
                engelledi.Geçtiğiimiz yılda Count&Eat ve spor ile bir yılda
                yaklaşık 30 kilo verdim.Artık daha düzgün besleniyorum ve
                kendimi daha formda hissediyorum.”
                <br /> <br /> <span className="author">- Superman</span>
              </p>
            </div>
          </div>
          <div className="review reverse">
            <div className="review-desc ">
              <p>
                “Bu siteyi 6 ay önce keşfettim ve 6 ay içerisinde düzenli sporun
                ve oluşturduğum beslenme takviminin yardımıyla tam 25 kilo
                verdim.Şu anda kendimi inanılmaz hissediyorum.Her zamankinden
                daha enerjik ve mutluyum.”
                <br /> <br />
                <span className="author">- Jane Foster</span>
              </p>
            </div>
            <div className="review-image">
              <img src={Girl} alt="Yorum Resmi" />
            </div>
          </div>
          <div className="review">
            <div className="batman">
              <img src={Batman} alt="Yorum Resmi" />
            </div>
            <div className="review-desc">
              <p>
                “İşim gereği formumu korumak için çok zaman harcıyorum ve öğün
                planlayıp yemek yapmak için fazla vaktim olmuyor.Count&Eat tam
                bu noktada devreye giriyor.Beslenme tercihlerime özel öğünler
                hazırlayarak mutfakta geçirdiğim süreyi minimumda tutuyor.
                <br /> <br /> <span className="author">- Batman</span>
              </p>
            </div>
          </div>
          <div className="warning">
            <div className="warning-image">
              <img src={Warning} alt="" />
            </div>
            <div className="warning-desc">
              <p className="review-desc">
                UYARI: Count&Eat’in temel olarak bir öğün planlama aracı
                olduğunu unutmayın. Yalnızca sizin aldığınız kararlar sağlıklı
                beslenme yolculuğunuzdaki adımları sağlamlaştırır. Ancak, bu
                süreçte yanınızda olmak ve her adımda size destek olmak için
                hazırız.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        {foods.map((food, index) => (
          <ol key={index}>
            {food.Genre?.includes("akdeniz") ? <li>{food.Name}</li> : ""}
          </ol>
        ))}
      </div> */}
    </>
  );
};

export default Reviews;
