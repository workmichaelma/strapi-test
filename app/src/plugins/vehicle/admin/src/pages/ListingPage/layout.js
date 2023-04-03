/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState, useContext } from "react";
// import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import { ListingPageContext } from "./context";
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
import ListingPageTabs from "./tabs";
import ConfirmModal from "./confirm-modal";

const ListingPageLayout = ({ history, id }) => {
  const [showModal, setShowModal] = useState(false);
  const { isLoading, vehicle, editedFields, submit } =
    useContext(ListingPageContext);

  const closeModal = () => {
    setShowModal(false);
  };

  if (isLoading) return <LoadingIndicatorPage />;
  if (vehicle === null) return <LoadingIndicatorPage />;
  return (
    <Box>
      <Layout>
        <Box background="neutral100">
          <BaseHeaderLayout
            primaryAction={
              <Button
                startIcon={<Check />}
                disabled={Object.keys(editedFields).length === 0}
                onClick={async (e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
              >
                Save
              </Button>
            }
            title={vehicle.name}
            as="h2"
          />
        </Box>
        <ContentLayout>
          <ListingPageTabs />
          {showModal && <ConfirmModal closeModal={closeModal} />}
        </ContentLayout>
      </Layout>
    </Box>
  );
};

export default withRouter(ListingPageLayout);
