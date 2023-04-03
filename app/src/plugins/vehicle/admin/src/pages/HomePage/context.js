import React, { createContext, useEffect, useState } from "react";
export const HomePageContext = createContext(0);

import { api } from "../../api";

export function HomePageContextProvider(props) {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const [orderBy, setOrderBy] = useState(null);
  const [filterBy, setFilterBy] = useState(null);

  const fetchVehicles = async ({ filterBy, orderBy } = {}) => {
    if (!isLoading) setIsLoading(true);
    console.log({ filterBy });
    const data = await api.readAllVehicles({
      filter: {
        orderBy,
        filterBy,
      },
    });
    setVehicles(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const submit = () => {
    fetchVehicles({
      filterBy,
      orderBy,
    });
  };

  const clear = () => {
    if (!filterBy) return;
    setFilterBy(null);
    fetchVehicles();
  };

  const addFilter = (field, value) => {
    if (value) {
      setFilterBy((v) => ({
        ...v,
        [field]: value,
      }));
    } else {
      setFilterBy((v) => ({
        ...v,
        [field]: undefined,
      }));
    }
  };

  const sort = (field) => {
    const _ = {
      field,
      order:
        orderBy?.field === field
          ? orderBy?.order === "DESC"
            ? "ASC"
            : "DESC"
          : "ASC",
    };
    setOrderBy(_);
    fetchVehicles({ orderBy: _ });
  };

  return (
    <HomePageContext.Provider
      value={{
        isLoading,
        vehicles,
        sort,
        addFilter,
        filterBy,
        submit,
        clear,
      }}
    >
      {props.children}
    </HomePageContext.Provider>
  );
}
