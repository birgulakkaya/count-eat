import "./FoodRecipeArticle.css";

const FoodRecipeArticle = () => {
  return (
    <div className="main-foodarticle flex flex-col mt-6 items-center">
      <div>
        <p className="text-5xl text-green-700">Besin & Tarif Arama</p>
      </div>
      <div className="food-info mt-6 mb-10 max-w-4xl bg-green-700 text-slate-100 p-6 rounded-xl">
        <p>
          Bir beslenme tarzına ya da bir diyete odaklandığınızda yediğiniz
          yiyeceklerin besin değerlerini bilmek önemlidir. Count&Eat, kolayca
          kullanılabilir bir veritabanı sağlayarak bu süreçteki zorlukları
          ortadan kaldırır. Bu besin veritabanı, tüm yiyecekleri farklı
          kategorilere göre sıralamanıza ve besin değerini &quot;100 g
          başına&quot; görüntüleyerek makro ve mikroları analiz etmenize olanak
          tanır. Aynı zamanda sizlere çeşit çeşit besinler ve onlara ait nefis
          tarifler göstererek beslenme rutininizde oluşan monotonluktan sizi
          kurtarır, diyetinizi daha renkli hale getirir. Count&Eat ile
          yemeklerinizi keşfetmenin keyfini çıkarın!
        </p>
      </div>
    </div>
  );
};

export default FoodRecipeArticle;
