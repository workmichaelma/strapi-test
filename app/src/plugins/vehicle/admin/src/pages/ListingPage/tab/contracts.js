/*
 *
 * HomePage
 *
 */
import { withRouter } from "react-router-dom";

import React, { useEffect, useState, useContext } from "react";
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
  TFooter,
  Tag,
  Card,
  Badge,
  Flex,
} from "@strapi/design-system";
import { Plus, CarretDown } from "@strapi/icons";
import { ListingPageContext } from "../context";

const ListingPageContracts = ({ setIsLoading, history }) => {
  const { vehicle } = useContext(ListingPageContext);

  console.log({ vehicle });

  return (
    <Table
      colCount={3}
      rowCount={10}
      footer={
        <TFooter
          icon={<Plus />}
          onClick={() =>
            history.push(`/plugins/contract/insert?vid=${vehicle.id}`)
          }
        >
          Add New Contract
        </TFooter>
      }
    >
      <Thead>
        <Tr>
          <Th
            action={
              <IconButton
                label="Sort on NAME"
                icon={<CarretDown />}
                noBorder
                onClick={() => {}}
              />
            }
          >
            <Typography variant="sigma">Contract Name</Typography>
          </Th>
          <Th>
            <Typography variant="sigma">Start Date</Typography>
          </Th>
          <Th>
            <Typography variant="sigma"></Typography>
          </Th>
          <Th>
            <Typography variant="sigma">Vehicles</Typography>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {vehicle.contracts.map((contract) => (
          <Tr
            key={contract.id}
            onClick={() => {
              // history.push(`/plugins/vehicle/listing/${vehicle.id}`)
            }}
          >
            <Td>
              <Typography>{contract.name}</Typography>
            </Td>
            <Td>
              <Typography>{contract.startDate}</Typography>
            </Td>
            <Td>
              {vehicle?.current_contract?.id === contract?.id && (
                <Badge>ACTIVE</Badge>
              )}
            </Td>
            <Td>
              <Flex direction="column" gap={2} alignItems="flexStart">
                {contract?.vehicles?.map((v) => (
                  <Typography
                    textDecoration="underline"
                    fontWeight="bold"
                    textColor="primary"
                    textAlign="left"
                    key={v.id}
                    onClick={() => {
                      history.push(`/plugins/vehicle/listing/${v.id}`);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {v.name}
                  </Typography>
                ))}
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default withRouter(ListingPageContracts);
