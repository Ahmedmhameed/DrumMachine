/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const Context = createContext({});

// eslint-disable-next-line react/prop-types
export const VolumeProvider = ({ children }) => {
  const [volume, setVolume] = useState(0.3);
  const exposed = { volume, setVolume };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useVolumeContent = () => {
  const content = useContext(Context);
  if (!content) throw new Error("Context must be used within a Provider");
  return content;
};
