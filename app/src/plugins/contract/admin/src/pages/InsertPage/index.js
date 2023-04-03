/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState, useContext, useMemo } from "react";
// import PropTypes from 'prop-types';
import { withRouter, useParams, useLocation } from "react-router-dom";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";

import {
  BaseHeaderLayout,
  Box,
  Layout,
  HeaderLayout,
  Button,
  ContentLayout,
  Flex,
  TextInput,
  Grid,
  DatePicker,
  GridItem,
  CreatableCombobox,
  ComboboxOption,
} from "@strapi/design-system";
import { Check } from "@strapi/icons";
import { api } from "../../api";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const InsertPage = ({ history }) => {
  const query = useQuery();
  const [isLoading, setIsLoading] = useState(false);

  const [vehicleId, setVehicleId] = useState(null);
  const [date, setDate] = useState(null);
  const [options, setOptions] = useState([]);

  const vid = useMemo(() => {
    return query.get("vid") || null;
  }, [query]);

  // const vehicle = useMemo(() => {
  //   return options[vehicleId];
  // }, [options, vehicleId]);

  useEffect(async () => {
    if (vid) {
      const data = await api.readVehicleById(vid);

      if (data) {
        setOptions((v) => [data, ...v]);
        setVehicleId(vid);
      }
    }
  }, [vid]);

  useEffect(async () => {
    const data = await api.readAllVehicles({ filter: {} });
    setOptions((v) => [...v, ...data]);
  }, []);

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

  if (!options) return <LoadingIndicatorPage />;
  return (
    <Box>
      <Layout>
        <Box background="neutral100">
          <BaseHeaderLayout
            primaryAction={
              <Button
                startIcon={<Check />}
                onClick={async (e) => {
                  e.preventDefault();
                  const { id, success } = await submit();
                  if (success && id) {
                    history.push(`/plugins/vehicle`);
                  }
                }}
              >
                Save
              </Button>
            }
            title="Add New Contract"
            as="h2"
          />
        </Box>
        <ContentLayout>
          <TextInput label="Contract Name" hint="Input the Contract Name" />
          <DatePicker
            onChange={setDate}
            selectedDate={date}
            label="Contract Start Date"
            name="datepicker"
            clearLabel={"Clear the datepicker"}
            onClear={() => setDate(undefined)}
            selectedDateLabel={(formattedDate) =>
              `Date picker, current is ${formattedDate}`
            }
            required
          />

          <Box>
            <CreatableCombobox
              label="Vehicle"
              value={vehicleId}
              onChange={setVehicleId}
              onCreateOption={onCreateOption}
            >
              {options.map((vehicle) => {
                return (
                  <ComboboxOption key={vehicle.id} value={vehicle.id + ""}>
                    {`id <${vehicle.id}> | ${vehicle.name}`}
                  </ComboboxOption>
                );
              })}
            </CreatableCombobox>
          </Box>
        </ContentLayout>
      </Layout>
    </Box>
  );
};

export default withRouter(InsertPage);
