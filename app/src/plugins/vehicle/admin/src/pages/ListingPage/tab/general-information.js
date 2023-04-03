/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState, useContext } from "react";
// import PropTypes from 'prop-types';
import { ListingPageContext } from "../context";

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
  const { vehicle, editedFields, editName, editColor } =
    useContext(ListingPageContext);
  const [options, setOptions] = useState([
    {
      name: vehicle?.color,
      value: vehicle?.color,
    },
  ]);
  const onCreateOption = (value) => {
    setOptions((opt) => [
      ...opt,
      {
        name: value,
        value,
      },
    ]);
    editColor(value);
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
          value={editedFields?.name || vehicle.name}
          onChange={(e) => {
            e.preventDefault();
            editName(e.target.value);
          }}
          label="Vehicle Name"
          error={
            editedFields?.name &&
            editedFields.name !== vehicle.name &&
            "Updated"
          }
        />
      </Box>

      <Box>
        <CreatableCombobox
          label="Vehicle Color"
          value={editedFields?.color || vehicle?.color}
          onChange={editColor}
          onCreateOption={onCreateOption}
          error={
            editedFields.color &&
            editedFields.color !== vehicle.color &&
            "Updated"
          }
        >
          {options.map(({ name, value }) => (
            <ComboboxOption key={value} value={value}>
              {name}
            </ComboboxOption>
          ))}
        </CreatableCombobox>
      </Box>
    </Box>
  );
};

export default InsertPageTabGeneralInformation;
