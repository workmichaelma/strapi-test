/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";

import HomePageTable from "./table";
import {
  Box,
  Layout,
  HeaderLayout,
  Button,
  Flex,
  ContentLayout,
} from "@strapi/design-system";
import { Plus, CarretDown } from "@strapi/icons";
import { api } from "../../api";
import { HomePageContextProvider } from "./context";
import HomePageFilter from "./filter";

const HomePage = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <LoadingIndicatorPage />;
  return (
    <HomePageContextProvider>
      <Box>
        <Layout>
          <HeaderLayout
            primaryAction={
              <Button
                startIcon={<Plus />}
                onClick={() => history.push("/plugins/vehicle/insert")}
              >
                Add an entry
              </Button>
            }
            title="Vehicle"
          />
          <ContentLayout>
            <HomePageFilter />
            <HomePageTable />
          </ContentLayout>
        </Layout>
      </Box>
    </HomePageContextProvider>
  );
};

export default withRouter(HomePage);
