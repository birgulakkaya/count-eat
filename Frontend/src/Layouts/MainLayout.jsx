import PropTypes from "prop-types";
import { useContext } from "react";
import LayoutContext from "../Context/LayoutContext";
import Header from "../Components/LayoutComponents/Header/Header";
import Footer from "../Components/LayoutComponents/Footer/Footer";

const MainLayout = ({ children }) => {
  const { showHeaderFooter } = useContext(LayoutContext);

  return (
    <div className="main-layout">
      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
