import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const authInfo = { darkMode, setDarkMode };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProviders;
