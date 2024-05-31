import Notfound from "../Components/NotFound/Notfound";
import { useContext, useEffect } from "react";
import LayoutContext from "../Context/LayoutContext";

const NotFoundPage = () => {
  const { setShowHeaderFooter } = useContext(LayoutContext);

  useEffect(() => {
    setShowHeaderFooter(false);

    return () => {
      setShowHeaderFooter(true);
    };
  }, [setShowHeaderFooter]);

  return <Notfound />;
};

export default NotFoundPage;
