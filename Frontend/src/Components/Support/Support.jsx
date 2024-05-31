import { useState } from "react";
import "./Support.css";

const Support = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [issue, setIssue] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMailChange = (e) => {
    setMail(e.target.value);
  };
  const handleIssueChange = (e) => {
    setIssue(e.target.value);
  };

  return (
    <div className="wrapper-support">
      <div className="main-support">
        <div className="support-container pr-16 flex flex-col justify-center items-center">
          <div className="flex flex-col pt-3 px-3 justify-center items-center w-96 ml-28 ">
            <h1 className="text-5xl text-slate-200">Bize Ulaşın</h1>
            <p className="text-slate-200 text-2xl mt-4  ml-8">
              Aşağıdaki formu doldurun ve temsilcilerimiz sizinle iletişime
              geçsin.
            </p>
          </div>
          <form className="w-full max-w-sm mt-8 -mb-6">
            <div className="md:flex md:items-center mb-6 ">
              <div className="md:w-1/3">
                <label
                  className="block text-slate-200 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  İsim
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-slate-200 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="mail"
                >
                  E-Posta
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="mail"
                  value={mail}
                  onChange={handleMailChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-slate-200 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="problem"
                >
                  Sorununuzu bizimle paylaşın
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="problem"
                  value={issue}
                  onChange={handleIssueChange}
                />
              </div>
            </div>

            <div className="md:flex md:items-center -mt-10">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-green-800 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold text-3xl py-2 px-4 rounded mt-8 w-64"
                  type="button"
                >
                  Gönder
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
