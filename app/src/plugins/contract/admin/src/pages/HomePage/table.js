/*
 *
 * HomePage
 *
 */
import { withRouter } from "react-router-dom";

import React, { useEffect, useState } from "react";
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
  Stack,
  Badge,
  Flex,
} from "@strapi/design-system";
import { Plus, CarretDown } from "@strapi/icons";
import { api } from "../../api";

const HomePageTable = ({ setIsLoading, history }) => {
  const [contracts, setContracts] = useState([]);
  const [orderBy, setOrderBy] = useState(null);

  const fetchData = async () => {
    const data = await api.readAllContracts({
      filter: {
        orderBy,
      },
    });
    setContracts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (orderBy === null) return;
    fetchData();
  }, [orderBy]);

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
                  setOrderBy((v) => {
                    return {
                      field: "name",
                      order: v?.order === "DESC" ? "ASC" : "DESC",
                    };
                  });
                }}
              />
            }
          >
            <Typography variant="sigma">Contract Name</Typography>
          </Th>
          <Th
            action={
              <IconButton
                label="Sort on Date"
                icon={<CarretDown />}
                noBorder
                onClick={() => {
                  setOrderBy((v) => {
                    return {
                      field: "startDate",
                      order: v?.order === "DESC" ? "ASC" : "DESC",
                    };
                  });
                }}
              />
            }
          >
            <Typography variant="sigma">Start Date</Typography>
          </Th>
          <Th>
            <Typography variant="sigma">Vehiches</Typography>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {contracts.map((contract) => (
          <Tr
            key={contract.id}
            onClick={() =>
              history.push(`/plugins/contract/listing/${contract.id}`)
            }
          >
            <Td>
              <BaseCheckbox />
            </Td>
            <Td>
              <Typography>{contract.name}</Typography>
            </Td>
            <Td>
              <Typography>{contract.startDate}</Typography>
            </Td>
            <Td>
              <Flex gap={2}>
                {contract?.vehicles?.map((v) => (
                  <Badge key={v.id} padding={2} textAlign="center">
                    {v.name}
                  </Badge>
                ))}
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default withRouter(HomePageTable);
