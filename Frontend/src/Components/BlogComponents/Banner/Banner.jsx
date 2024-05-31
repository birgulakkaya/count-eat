// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-green-800 mx-auto border-b-4 border-black ">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-5xl leading-snug font-bold mb-5 text-white">
          Count <span className="text-orange-500">&</span> Eat Blog Sayfasına
          Hoşgeldiniz.
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Blog sayfasina hos geldiniz! Burada saglikli yasamla ilgili
          ipuclarini, egzersiz onerilerini ve beslenme tavsiyelerini
          bulabilirsiniz. Hayatinizi daha saglikli ve dengeli bir yasama adim
          atmak icin birlikte yol alalim!
        </p>
        <div>
          <a
            href="#okumaya-basla"
            className="font-medium hover:text-orange-500 inline-flex items-center py-1"
          >
            Okumaya Başlayın <FaArrowRight className="mt-1 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
