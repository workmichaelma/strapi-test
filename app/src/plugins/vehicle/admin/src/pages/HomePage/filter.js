import React, { useEffect, useState, useContext } from "react";

import {
  Box,
  Layout,
  HeaderLayout,
  Button,
  ContentLayout,
  Flex,
  Field,
  FieldLabel,
  FieldInput,
  TextInput,
} from "@strapi/design-system";
import { Plus, CarretDown } from "@strapi/icons";
import { HomePageContext } from "./context";

const HomePageFilter = ({}) => {
  const { addFilter, filterBy, submit, clear } = useContext(HomePageContext);
  return (
    <Box background="#eee" shadow="filterShadow" padding={[6]}>
      <Flex direction="column" gap={4} alignItems="flex-start">
        <Flex direction="row" gap={8}>
          <Box>
            <TextInput
              label="Name"
              hint="Filter By Name"
              value={filterBy?.name || ""}
              onChange={(e) => {
                e.preventDefault();
                addFilter("name", e.target.value);
              }}
            />
          </Box>
          <Box>
            <TextInput
              label="Color"
              hint="Filter By Color"
              value={filterBy?.color || ""}
              onChange={(e) => {
                e.preventDefault();
                addFilter("color", e.target.value);
              }}
            />
          </Box>
        </Flex>
        <Flex gap={4}>
          <Button
            onClick={() => {
              submit();
            }}
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              clear();
            }}
          >
            Clear
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomePageFilter;
