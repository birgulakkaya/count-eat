import { useContext, useEffect } from "react";
import LayoutContext from "../Context/LayoutContext";
import Login from "../Components/Login/Login";

const LoginPage = () => {
  const { setShowHeaderFooter } = useContext(LayoutContext);

  useEffect(() => {
    setShowHeaderFooter(false);

    return () => {
      setShowHeaderFooter(true);
    };
  }, [setShowHeaderFooter]);

  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
