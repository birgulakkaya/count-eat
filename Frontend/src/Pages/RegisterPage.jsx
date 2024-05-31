import Register from "../Components/Register/Register";
import { useContext, useEffect } from "react";
import LayoutContext from "../Context/LayoutContext";

const RegisterPage = () => {
  const { setShowHeaderFooter } = useContext(LayoutContext);

  useEffect(() => {
    setShowHeaderFooter(false);

    return () => {
      setShowHeaderFooter(true);
    };
  }, [setShowHeaderFooter]);

  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
