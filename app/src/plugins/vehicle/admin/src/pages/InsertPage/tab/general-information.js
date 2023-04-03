/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState, useContext } from "react";
// import PropTypes from 'prop-types';
import { InsertPageContext } from "../context";

import {
  Box,
  Tab,
  Tabs,
  TabGroup,
  TabPanel,
  TabPanels,
  TextInput,
  Button,
  CreatableCombobox,
  ComboboxOption,
} from "@strapi/design-system";
import { api } from "../../../api";

const InsertPageTabGeneralInformation = () => {
  const { vehicle, setName, setColor } = useContext(InsertPageContext);
  const [options, setOptions] = useState([]);
  const onCreateOption = (value) => {
    setOptions((opt) => [
      ...opt,
      {
        name: value,
        value,
      },
    ]);
    setColor(value);
  };

  useEffect(async () => {
    const colors = await api.readAllVehicleColors();
    setOptions(
      colors.map((c) => {
        return {
          name: c,
          value: c,
        };
      })
    );
  }, []);

  return (
    <Box>
      <Box>
        <TextInput
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
          label="Name"
        />
      </Box>

      <Box>
        <CreatableCombobox
          label="Color"
          value={vehicle?.color}
          onChange={setColor}
          onCreateOption={onCreateOption}
        >
          {options.map(({ name, value }) => (
            <ComboboxOption key={value} value={value}>
              {name}
            </ComboboxOption>
          ))}
        </CreatableCombobox>
      </Box>

      {JSON.stringify(vehicle)}
    </Box>
  );
};

export default InsertPageTabGeneralInformation;
