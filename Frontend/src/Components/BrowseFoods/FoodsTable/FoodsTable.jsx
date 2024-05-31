import { useState, useMemo, useEffect } from "react";
import { GrFormClose } from "react-icons/gr";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const FoodsTable = () => {
  const [foods, setFoods] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [activeCollection, setActiveCollection] = useState("recipes");
  const [activeType, setActiveType] = useState("recipes");
  const [activeTab, setActiveTab] = useState("Hepsi");
  const [showCategories, setShowCategories] = useState(true);
  const [selectedNutrient, setSelectedNutrient] = useState("Fiber");

  const [rowsLimit] = useState(20);
  const [rowsToShow, setRowsToShow] = useState(foods.slice(0, rowsLimit));
  const [customPagination, setCustomPagination] = useState([]);
  const [totalPage, setTotalPage] = useState(
    Math.ceil(foods?.length / rowsLimit)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [searchFood, setSearchFood] = useState("");
  // const dropdownRef = useRef(null);
  const nextPage = () => {
    const startIndex = rowsLimit * (currentPage + 1);
    const endIndex = startIndex + rowsLimit;
    const newArray = foods.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(currentPage + 1);
  };
  const changePage = (value) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = foods.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(value);
  };
  const previousPage = () => {
    const startIndex = (currentPage - 1) * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = foods.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };
  useMemo(() => {
    setCustomPagination(Array(Math.ceil(foods?.length / rowsLimit)).fill(null));
  }, [rowsLimit, foods?.length]);

  const handleClickCloseButton = (e) => {
    e.preventDefault();
    setSearchFood("");
  };

  const handleInputChange = (e) => {
    setSearchFood(e.target.value);
  };

  useEffect(() => {
    const fetchFoods = async () => {
      const endpoint =
        activeCollection === "recipes"
          ? `/api/recipes?category=${
              activeTab !== "Hepsi" ? activeTab : ""
            }&search=${searchFood}`
          : `/api/ingredients?category=${
              activeTab !== "Hepsi" ? activeTab : ""
            }&search=${searchFood}&nutrient=${selectedNutrient}`;
      try {
        const response = await fetch(`${apiUrl}${endpoint}`);
        if (response.ok) {
          const data = await response.json();
          setFoods(data);
          setCurrentPage(0);
        } else {
          console.log("Veri çekme hatası");
        }
      } catch (error) {
        console.log("Çekme hatası", error);
      }
    };
    fetchFoods();
    setCurrentPage(0);
  }, [
    apiUrl,
    activeCollection,
    activeTab,
    activeType,
    searchFood,
    selectedNutrient,
  ]);

  useEffect(() => {
    const startIndex = currentPage * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = foods.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    const newTotalPage = Math.ceil(foods.length / rowsLimit);
    setTotalPage(newTotalPage);
  }, [foods, currentPage, rowsLimit]);

  const getUnit = (nutrient) => {
    const mgNutrients = ["Sodium", "Potassium", "Cholesterol"];
    return mgNutrients.includes(nutrient) ? "mg" : "g";
  };

  return (
    <>
      <Pagination
        customPagination={customPagination}
        totalPage={totalPage}
        nextPage={nextPage}
        changePage={changePage}
        previousPage={previousPage}
        foods={foods}
        currentPage={currentPage}
        rowsLimit={rowsLimit}
      />
      <div className=" min-h-screen h-full flex  items-center justify-center pt-2 pb-14 mx-8 ">
        <div className="w-full max-w-8xl px-2">
          <div className="w-full overflow-x-scroll md:overflow-auto  max-w-full 2xl:max-w-none mt-2 rounded-lg flex">
            <div className="bg-white w-72 flex flex-col">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="default-search"
                    className="block w-52 p-2 mt-4 mb-4 mx-auto pl-4 text-xl text-black border border-gray-300 rounded-lg bg-white focus:ring-green-500 focus:border-green-500 dark:white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Besin Ara..."
                    value={searchFood}
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={handleClickCloseButton}
                    className="absolute inset-y-0 right-0 pr-6 flex items-center"
                  >
                    <GrFormClose style={{ color: "grey" }} />
                  </button>
                </div>
              </form>

              <div className="p-3">
                <p className="text-3xl">Tür</p>
                <ul className="mt-4 mb-4 ml-2 text-green-500 ">
                  <li
                    className={`mb-3 hover:text-green-700 cursor-pointer ${
                      activeType === "recipes"
                        ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveCollection("recipes");
                      setActiveType("recipes");
                      setShowCategories(true);
                      setActiveTab("Hepsi");
                    }}
                  >
                    Tarifler
                  </li>
                  <li
                    className={`mb-3 hover:text-green-700 cursor-pointer ${
                      activeType === "ingredients"
                        ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveCollection("ingredients");
                      setActiveType("ingredients");
                      setShowCategories(false);
                    }}
                  >
                    Temel Besinler
                  </li>
                </ul>
                {showCategories ? (
                  <>
                    <p className="text-3xl">Kategori</p>
                    <ul className="mt-2 ml-2 text-green-500">
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Hepsi"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("recipes");
                          setActiveTab("Hepsi");
                        }}
                      >
                        Hepsi
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Ana_Yemekler"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("recipes");
                          setActiveTab("Ana_Yemekler");
                        }}
                      >
                        Ana Yemekler
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Çorbalar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("recipes");
                          setActiveTab("Çorbalar");
                        }}
                      >
                        Çorbalar
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Et_Yemekleri"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("recipes");
                          setActiveTab("Et_Yemekleri");
                        }}
                      >
                        Et Yemekleri
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Kahvaltılıklar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("recipes");
                          setActiveTab("Kahvaltılıklar");
                        }}
                      >
                        Kahvaltılıklar
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Makarnalar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("recipes");
                          setActiveTab("Makarnalar");
                        }}
                      >
                        Makarnalar
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Salatalar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("recipes");
                          setActiveTab("Salatalar");
                        }}
                      >
                        Salatalar
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Tatlılar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("recipes");
                          setActiveTab("Tatlılar");
                        }}
                      >
                        Tatlılar
                      </li>
                      :
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="text-3xl">Kategori</p>
                    <ul className="mt-2 ml-2 text-green-500">
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Hepsi"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Hepsi");
                        }}
                      >
                        Hepsi
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Süt_ürünleri"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Süt_ürünleri");
                        }}
                      >
                        Süt Ürünleri
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Baharatlar_otlar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Baharatlar_otlar");
                        }}
                      >
                        Baharatlar ve Otlar
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Yağlar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Yağlar");
                        }}
                      >
                        Yağlar
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Kümes_hayvanları"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Kümes_hayvanları");
                        }}
                      >
                        Kümes Hayvanları
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Çorbalar_soslar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Çorbalar_soslar");
                        }}
                      >
                        Çorbalar ve Soslar
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Şarküteri"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Şarküteri");
                        }}
                      >
                        Şarküteri
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Kahvaltılıkgevrekler_yulaflar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Kahvaltılıkgevrekler_yulaflar");
                        }}
                      >
                        Kahvaltılık Gevrekler ve Yulaflar
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Meyve_sebzeler"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Meyve_sebzeler");
                        }}
                      >
                        Meyve ve Sebzeler
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Kuruyemişler"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Kuruyemişler");
                        }}
                      >
                        Kuruyemişler
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Et_ürünleri"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Et_ürünleri");
                        }}
                      >
                        Et Ürünleri
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "İçecekler"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("İçecekler");
                        }}
                      >
                        İçecekler
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Deniz_ürünleri"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Deniz_ürünleri");
                        }}
                      >
                        Deniz Ürünleri
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Baklagiller"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Baklagiller");
                        }}
                      >
                        Baklagiller
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Buğdaylar_makarnalar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Buğdaylar_makarnalar");
                        }}
                      >
                        Buğdaylar ve Makarnalar
                      </li>
                      <li
                        className={`mb-3 hover:text-green-700 cursor-pointer ${
                          activeTab === "Tatlılar"
                            ? "bg-green-700 text-slate-200 py-1 px-2 hover:text-slate-50 rounded-lg"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCollection("ingredients");
                          setActiveTab("Tatlılar");
                        }}
                      >
                        Tatlılar
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
            <table className="table-auto overflow-scroll md:overflow-auto w-full   text-left font-inter border ">
              <thead className="rounded-lg text-base text-white font-semibold w-full ">
                <tr className="border-2 border-gray-300 ">
                  <th className="px-3 py-1 text-[#212B36] w-16 sm:text-base font-bold border-2 border-gray-300 ">
                    Resim
                  </th>
                  <th className="px-3 py-1 text-[#212B36] w-2/12 sm:text-base font-bold border-2 border-gray-300 ">
                    İsim
                  </th>
                  <th className="px-3 py-1 text-green-500 w-2/12 sm:text-base font-bold border-2 border-gray-300">
                    Kalori
                  </th>
                  <th className="px-3 py-1 text-green-500 w-1/12 sm:text-base font-bold border-2 border-gray-300">
                    Karbonhidrat
                  </th>
                  <th className="px-3 py-1 text-green-500 w-1/12 first:sm:text-base font-bold border-2 border-gray-300">
                    Yağ
                  </th>
                  <th className="px-3 py-1 text-green-500 w-1/12 sm:text-base font-bold border-2 border-gray-300">
                    Protein
                  </th>
                  <th className="px-3 py-1 text-green-500 w-3/12 sm:text-base font-bold border-2 border-gray-300">
                    <select
                      className="bg-transparent"
                      value={selectedNutrient}
                      onChange={(e) => setSelectedNutrient(e.target.value)}
                    >
                      <option value="Fiber">Lif</option>
                      <option value="Cholesterol">Kolesterol</option>
                      <option value="Potassium">Potasyum</option>
                      <option value="Saturated_Fat">Doymuş Yağ</option>
                      <option value="Sodium">Sodyum</option>
                      <option value="Sugar">Şeker</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rowsToShow?.map((food) => (
                  <tr className="bg-white hover:bg-slate-100" key={food.id}>
                    <td
                      className={`py-2 px-2 w-16 font-normal text-base border-2 whitespace-nowrap`}
                    >
                      <img
                        src={food?.img}
                        style={{
                          width: "200px",
                          height: "80px",
                          borderRadius: "5px",
                        }}
                        alt=""
                      />
                    </td>
                    <td
                      className={`text-green-600 font-semibold py-2 px-3 w-2/12 text-base border-b-2 whitespace-nowrap`}
                    >
                      <Link
                        to={`/food/${food._id}`}
                        className="text-green-600 font-semibold no-underline hover:underline"
                      >
                        {food?.Turkish_Name.charAt(0).toUpperCase() +
                          food?.Turkish_Name.slice(1)}
                      </Link>
                    </td>
                    <td
                      className={`py-2 pl-6 w-2/12 font-normal text-base border-b-2 whitespace-nowrap`}
                    >
                      {food?.Calorie}
                    </td>
                    <td
                      className={`py-2 pl-6 text-base w-1/12 font-normal border-b-2 whitespace-nowrap`}
                    >
                      {food?.Carbohydrates + " g"}
                    </td>
                    <td
                      className={`py-2 pl-6 text-base w-1/12 font-normal border-b-2 whitespace-nowrap`}
                    >
                      {food?.Fat + " g"}
                    </td>
                    <td
                      className={`py-5 pl-6 text-base w-1/12 font-normal border-b-2`}
                    >
                      {food?.Protein + " g"}
                    </td>
                    <td
                      className={`py-5 pl-6 text-base font-normal w-3/12 border-b-2`}
                    >
                      {food[selectedNutrient] + " " + getUnit(selectedNutrient)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            customPagination={customPagination}
            totalPage={totalPage}
            nextPage={nextPage}
            changePage={changePage}
            previousPage={previousPage}
            foods={foods}
            currentPage={currentPage}
            rowsLimit={rowsLimit}
          />
        </div>
      </div>
    </>
  );
};
export default FoodsTable;
