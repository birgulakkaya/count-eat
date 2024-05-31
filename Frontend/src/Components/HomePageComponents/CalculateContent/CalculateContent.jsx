import Arrow from "../../../Assets/HomePageImages/CalculateImg/greenuparrow.png";
import "./CalculateContent.css";
import Normal from "../../../Assets/HomePageImages/CalculateImg/normal.png";
import Paleo from "../../../Assets/HomePageImages/CalculateImg/paleo.png";
import Vejetaryen from "../../../Assets/HomePageImages/CalculateImg/vejeteryan.png";
import Vegannn from "../../../Assets/HomePageImages/CalculateImg/vegan.png";
import Keto from "../../../Assets/HomePageImages/CalculateImg/ketojenik.png";
import Akdeniz from "../../../Assets/HomePageImages/CalculateImg/akdeniz.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const CalculateContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [calories, setCalories] = useState(2000);
  const [meals, setMeals] = useState(3);
  const [mealPlan, setMealPlan] = useState([]);
  const [arrowDescVisible, setArrowDescVisible] = useState(true);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const genres = [
    "normal",
    "paleo",
    "vejetaryen",
    "vegan",
    "ketojenik",
    "akdeniz",
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const handleMealsChange = (e) => {
    setMeals(e.target.value);
  };

  const handleSubmit = async () => {
    const selectedGenre = genres[activeIndex];

    try {
      const response = await fetch(
        `${apiUrl}/api/meals?calories=${calories}&meals=${meals}&genre=${selectedGenre}`
      );
      if (response.ok) {
        const mealPlanData = await response.json();
        setMealPlan(mealPlanData);
        setArrowDescVisible(false);
      } else {
        console.error(
          "Error fetching meal plan: Server responded with status",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching meal plan:", error);
    }
  };

  return (
    <>
      <div className="calculate-section">
        <div className="calculate-main-div">
          <p className="calculate-title">
            Mutlu bir hayat, sağlıklı beslenme <br /> ile mümkün.
          </p>
          <p className="description">
            Count&Eat tercihlerinize göre kişiselleştirilmiş günlük yemek
            planları sunar. Kalori hesaplayıcıyımız ile beslenme hedeflerinize
            ulaşabilir, haftalık programlar oluşturabilirsiniz.
            <b>Saniyeler içinde planınızı oluşturun!</b>
          </p>
          <div className="Calculate-Form">
            <div className="Calculate-Form flex flex-col items-center justify-center px-4">
              <div className="w-full h-40 flex items-center justify-center -mt-12">
                <ul className="flex w-full grid-cols-6 items-center justify-center">
                  {genres.map((genre, index) => (
                    <li
                      key={index}
                      className={`w-1/6 text-green-700 cursor-pointer text-2xl flex flex-col items-center ${
                        activeIndex === index
                          ? "bg-green-700 text-slate-200 rounded-lg"
                          : ""
                      }`}
                      onClick={() => handleItemClick(index)}
                    >
                      <img
                        src={
                          genre === "normal"
                            ? Normal
                            : genre === "paleo"
                            ? Paleo
                            : genre === "vejetaryen"
                            ? Vejetaryen
                            : genre === "vegan"
                            ? Vegannn
                            : genre === "ketojenik"
                            ? Keto
                            : Akdeniz
                        }
                        className="mb-3 w-16 h-16 rounded-full"
                        alt={genre.charAt(0).toUpperCase() + genre.slice(1)}
                      />
                      {genre.charAt(0).toUpperCase() + genre.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>
              <form className="w-full max-w-sm mt-8 -mb-6">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="calorie"
                    >
                      Kalori Sayısı
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                      id="calorie"
                      type="number"
                      value={calories}
                      onChange={handleCaloriesChange}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="meal"
                    >
                      Öğün
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                      id="meal"
                      type="number"
                      value={meals}
                      onChange={handleMealsChange}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3">
                    <button
                      className="shadow bg-green-800 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold text-2xl py-2 px-4 rounded-2xl mt-8 w-48"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Oluştur
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {mealPlan.length > 0 && (
            <div className="meal-plan mt-8">
              {mealPlan.map((meal, index) => (
                <div key={index}>
                  <h3>Öğün {index + 1}</h3>
                  {meal.map((recipe) => (
                    <div
                      key={recipe.id}
                      className="recipe-item flex gap-4 pb-0"
                    >
                      <img
                        className="mb-8 rounded-xl"
                        src={recipe.img}
                        alt={recipe.Turkish_Name}
                        style={{ width: "70px", height: "70px" }}
                      />
                      <div className="flex flex-col">
                        <Link to={`/food/${recipe._id}`}>
                          <p className="text-xl mt-2 hover:underline">
                            {recipe.Turkish_Name}
                          </p>
                        </Link>
                        <p className="text-xl italic mt-2">
                          {recipe.Calorie} Kalori
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {arrowDescVisible && (
            <div className="arrow-desc">
              <div className="arrow-div">
                <img className="arrow" alt="Isolated arrow down" src={Arrow} />
              </div>
              <p>
                Sizin için ideal olan kalori miktarını ilk bölüme girin.
                Ardından tercih ettiğiniz öğün sayısını belirleyin ve “Oluştur”
                butonuna tıklayın. Eğer ideal kalorinizi bilmiyorsanız
                “Hesaplayıcı” butonunu kullanabilirsiniz.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CalculateContent;
