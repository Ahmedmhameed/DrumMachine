/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const Context = createContext({});

// eslint-disable-next-line react/prop-types
export const PowerProvider = ({ children }) => {
  const [power, setPower] = useState(true);
  const exposed = { power, setPower };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const usePowerContent = () => {
  const content = useContext(Context);
  if (!content) throw new Error("Context must be used within a Provider");
  return content;
};
