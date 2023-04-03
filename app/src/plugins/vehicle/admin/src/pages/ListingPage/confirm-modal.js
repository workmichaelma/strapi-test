/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState, useContext } from "react";
// import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { ListingPageContext } from "./context";
import pluginId from "../../pluginId";

import {
  BaseHeaderLayout,
  Box,
  Layout,
  HeaderLayout,
  Button,
  ContentLayout,
  ModalLayout,
  ModalHeader,
  Typography,
  ModalBody,
  ModalFooter,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@strapi/design-system";
import { Check } from "@strapi/icons";

const ListingPageConfirmModal = ({ history, closeModal }) => {
  const { vehicle, editedFields, submit } = useContext(ListingPageContext);

  return (
    <ModalLayout onClose={closeModal}>
      <ModalHeader>
        <Typography>{vehicle.name}</Typography>
      </ModalHeader>
      <ModalBody>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <Typography>Field</Typography>
              </Th>
              <Th>
                <Typography>From</Typography>
              </Th>
              <Th>
                <Typography>To</Typography>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(editedFields).map((k) => (
              <Tr key={k}>
                <Td>
                  <Typography>{k}</Typography>
                </Td>
                <Td>
                  <Typography>{vehicle[k]}</Typography>
                </Td>
                <Td>
                  <Typography>{editedFields[k]}</Typography>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ModalBody>
      <ModalFooter
        endActions={
          <Button
            onClick={async () => {
              const { id, success } = await submit();
              if (success && id) {
                history.go(0);
              }
            }}
          >
            Submit
          </Button>
        }
      ></ModalFooter>
    </ModalLayout>
  );
};

export default withRouter(ListingPageConfirmModal);
