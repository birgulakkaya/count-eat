import "./NurseSection.css";
import Nurse from "../../../Assets/ForProfessionelsImages/nurse.png";

const NurseSection = () => {
  return (
    <div className="MainNurse flex p-8">
      <div className="flex flex-col w-2/3 items-center justify-center">
        <p className="text-2xl mb-8">
          Count&Eat&lsquo;i ücretsiz olarak deneyin ve Pro&lsquo;ya geçerek tüm
          avantajlardan faydalanın.
        </p>
        <button className="w-96 create-account">Ücretsiz Hesap Oluştur</button>
      </div>
      <div className="w-1/3 pl-24">
        <img src={Nurse} alt="" />
      </div>
    </div>
  );
};

export default NurseSection;
