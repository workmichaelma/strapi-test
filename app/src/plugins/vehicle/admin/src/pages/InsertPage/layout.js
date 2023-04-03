/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState, useContext } from "react";
// import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import { InsertPageContext, InsertPageContextProvider } from "./context";
import pluginId from "../../pluginId";

import {
  BaseHeaderLayout,
  Box,
  Layout,
  HeaderLayout,
  Button,
  ContentLayout,
} from "@strapi/design-system";
import { Check } from "@strapi/icons";
import { api } from "../../api";
import InsertPageTabs from "./tabs";

const InsertPageLayout = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { vehicle, submit } = useContext(InsertPageContext);

  if (isLoading) return <LoadingIndicatorPage />;
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
            title="Add New Vehicle"
            as="h2"
          />
        </Box>
        <ContentLayout>
          <InsertPageTabs />
        </ContentLayout>
      </Layout>
    </Box>
  );
};

export default withRouter(InsertPageLayout);
