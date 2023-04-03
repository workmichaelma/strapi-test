import React, { createContext, useState } from "react";
export const InsertPageContext = createContext(0);

import { api } from "../../api";

export function InsertPageContextProvider(props) {
  const [vehicle, setVehicle] = useState(null);

  const setName = (name) => {
    setVehicle((v) => ({
      ...v,
      name,
    }));
  };

  const setColor = (color) => {
    setVehicle((v) => ({
      ...v,
      color,
    }));
  };

  const submit = async () => {
    return await api.createVehicle({ vehicle });
  };

  return (
    <InsertPageContext.Provider value={{ vehicle, setName, setColor, submit }}>
      {props.children}
    </InsertPageContext.Provider>
  );
}
