import React, { createContext, useEffect, useState } from "react";
export const ListingPageContext = createContext(0);

import { api } from "../../api";

export function ListingPageContextProvider(props) {
  const { id } = props;
  const [vehicle, setVehicle] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const [editedFields, setEditedFields] = useState({});

  useEffect(async () => {
    if (!isLoading) setIsLoading(true);
    const result = await api.readVehicleById(id);

    setVehicle(result);
    setIsLoading(false);
    return () => setVehicle(null);
  }, [id]);

  const editName = (name) => {
    if (vehicle?.name === name || name === null) {
      setEditedFields((v) => ({
        ...v,
        name: undefined,
      }));
    } else {
      setEditedFields((v) => ({
        ...v,
        name,
      }));
    }
  };

  const editColor = (color) => {
    if (vehicle?.color === color || color === null) {
      setEditedFields((v) => ({
        ...v,
        color: undefined,
      }));
    } else {
      setEditedFields((v) => ({
        ...v,
        color,
      }));
    }
  };

  const submit = async () => {
    return await api.updateVehicle({ editedFields }, vehicle.id);
  };

  return (
    <ListingPageContext.Provider
      value={{ isLoading, vehicle, submit, editedFields, editName, editColor }}
    >
      {props.children}
    </ListingPageContext.Provider>
  );
}
