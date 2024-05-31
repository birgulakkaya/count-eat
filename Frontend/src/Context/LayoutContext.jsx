import PropTypes from "prop-types";
import { createContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  return (
    <LayoutContext.Provider value={{ showHeaderFooter, setShowHeaderFooter }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;

LayoutProvider.propTypes = {
  children: PropTypes.node,
};
