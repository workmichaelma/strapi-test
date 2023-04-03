/*
 *
 * HomePage
 *
 */
import { withRouter } from "react-router-dom";

import React, { useEffect, useState, useContext } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import {
  Box,
  Layout,
  HeaderLayout,
  Button,
  IconButton,
  ContentLayout,
  Table,
  Tr,
  Th,
  Td,
  Tbody,
  BaseCheckbox,
  Typography,
  Thead,
} from "@strapi/design-system";
import { Plus, CarretDown } from "@strapi/icons";
import { api } from "../../api";
import { HomePageContext } from "./context";

const HomePageTable = ({ setIsLoading, history }) => {
  const { vehicles, sort } = useContext(HomePageContext);

  return (
    <Table colCount={5} rowCount={10}>
      <Thead>
        <Tr>
          <Th>
            <BaseCheckbox aria-label="Select All" />
          </Th>
          <Th
            action={
              <IconButton
                label="Sort on NAME"
                icon={<CarretDown />}
                noBorder
                onClick={() => {
                  sort("name");
                }}
              />
            }
          >
            <Typography variant="sigma">Vehicle Name</Typography>
          </Th>
          <Th>
            <Typography variant="sigma">Color</Typography>
          </Th>
          <Th>
            <Typography variant="sigma">Current Contact Name</Typography>
          </Th>
          <Th>
            <Typography variant="sigma">Current Contact Start Date</Typography>
          </Th>
          <Th>
            <Typography variant="sigma">Owner</Typography>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {vehicles.map((vehicle) => (
          <Tr
            key={vehicle.id}
            onClick={() =>
              history.push(`/plugins/vehicle/listing/${vehicle.id}`)
            }
          >
            <Td>
              <BaseCheckbox />
            </Td>
            <Td>
              <Typography>{vehicle.name}</Typography>
            </Td>
            <Td>
              <Typography>{vehicle.color}</Typography>
            </Td>
            <Td>
              <Typography>{vehicle?.current_contract?.name}</Typography>
            </Td>
            <Td>
              <Typography>{vehicle?.current_contract?.startDate}</Typography>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default withRouter(HomePageTable);
