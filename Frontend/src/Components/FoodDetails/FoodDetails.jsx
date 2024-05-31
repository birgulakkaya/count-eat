import PropTypes from "prop-types";
import { HiArrowLongLeft } from "react-icons/hi2";
import { PiCookingPot } from "react-icons/pi";
import { TbBowlFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import PieChart from "./Chart";
import "./FoodDetails.css";

const FoodDetails = ({ singleRecipe }) => {
  if (!singleRecipe) {
    return <div>Yemek tarifi yüklenemedi.</div>;
  }

  const pieChartData = [
    singleRecipe.Carbohydrates,
    singleRecipe.Protein,
    singleRecipe.Fat,
  ];

  const formattedIngredients = singleRecipe.Ingridients?.split("\n").map(
    (line, index) => (
      <p key={index} className="ing-item">
        {line}
        <br />
      </p>
    )
  );

  const formattedSteps = singleRecipe.RecipeDetails?.split("\n").map(
    (line, index) => (
      <p key={index} className="step-item">
        {line}
        <br />
      </p>
    )
  );

  const formattedDetails = singleRecipe.PrepDetails?.split("\n").map(
    (line, index) => (
      <p key={index} className="step-item">
        {line}
        <br />
      </p>
    )
  );

  return (
    <div className="Main-SingleFood w-full">
      <div className="max-w-8xl p-10 flex justify-around">
        <Link to={"/foods"}>
          <button className="flex gap-2  items-center justify-center cursor-pointer hover:bg-green-500 hover:text-slate-50 p-2 rounded-2xl text-lg">
            <HiArrowLongLeft />
            Besin Arama Sayfasına Geri Dön.
          </button>
        </Link>
        <formattedIngredients>
          <input
            type="text"
            className="rounded-2xl "
            placeholder="Farklı bir besin ara."
          />
        </formattedIngredients>
      </div>
      <div className="wrapper flex flex-col items-center justify-center">
        <div className="ContentDiv p-8 bg-slate-100 flex flex-col items-center justify-center rounded-lg">
          <h1 className="text-3xl font-medium">{singleRecipe?.Turkish_Name}</h1>
          <div>
            <p className="short-desc mt-8 text-xl">
              {singleRecipe?.ShortDescription}
            </p>
          </div>
          <div className="flex mt-16 mb-10 ">
            <div className="flex">
              <img
                className="max-w-lg rounded-xl mr-32 "
                src={singleRecipe?.img}
                alt=""
              />
            </div>
            <div className="my-8 ml-20">
              <div className="flex gap-4 items-center pb-4">
                <div>
                  <PiCookingPot
                    style={{
                      width: "60px",
                      height: "60px",
                      marginBottom: "40px",
                    }}
                  />
                </div>
                <div className="">
                  <div className="text-xl mb-4 flex">
                    Miktar,Kişi/Hazırlama/Pişirme
                  </div>
                  <div className="prep text-xl mb-12">{formattedDetails}</div>
                </div>
              </div>
              <div className="flex gap-4 items-center pb-4">
                <div className="flex">
                  <TbBowlFilled
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>
                <div className="serving text-xl">{`Porsiyon: ${singleRecipe?.Serving_Size} g`}</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-12">
            <div className="left w-1/2">
              <div className="flex flex-col items-start justify-start w-96 mr-32 mt-10">
                <div className="text-3xl mb-12">İçindekiler</div>
                <div className="ing text-xl">{formattedIngredients}</div>
              </div>
            </div>
            <div className="right w-1/2">
              <div className="pie ml-24">
                <PieChart data={pieChartData} />
              </div>
              <div className="micmacs w-72 ml-24 text-xl border-2 border-zinc-700 p-2 rounded-xl">
                <div className="flex justify-between">
                  <p className="font-bold">Kalori:</p>
                  <p className="font-bold">{singleRecipe?.Calorie}</p>
                </div>
                <div className="flex justify-between text-blue-600">
                  <p>Karbonhidrat</p>
                  <p>{singleRecipe?.Carbohydrates} g</p>
                </div>
                <div className="flex justify-between text-amber-300">
                  <p>Yağ</p>
                  <p>{singleRecipe?.Fat} g</p>
                </div>
                <div className="flex justify-between text-green-500">
                  <p>Protein</p>
                  <p>{singleRecipe?.Protein} g</p>
                </div>
                <div className="flex justify-between">
                  <p>Lif</p>
                  <p>{singleRecipe?.Fiber} g</p>
                </div>
                <div className="flex justify-between">
                  <p>Sodyum</p>
                  <p>{singleRecipe?.Sodium} mg</p>
                </div>
                <div className="flex justify-between">
                  <p>Doymuş Yağ</p>
                  <p>{singleRecipe?.Saturated_Fat} g</p>
                </div>
                <div className="flex justify-between">
                  <p>Potasyum</p>
                  <p>{singleRecipe?.Potassium} mg</p>
                </div>
                <div className="flex justify-between">
                  <p>Kolesterol</p>
                  <p>{singleRecipe?.Cholesterol} mg</p>
                </div>
                <div className="flex justify-between">
                  <p>Şeker</p>
                  <p>{singleRecipe?.Sugar} g</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4">
            <h1 className="text-3xl">Hazırlık Aşamaları</h1>
            <div className="steps text-xl ">{formattedSteps}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;

FoodDetails.propTypes = {
  singleRecipe: PropTypes.object,
};
