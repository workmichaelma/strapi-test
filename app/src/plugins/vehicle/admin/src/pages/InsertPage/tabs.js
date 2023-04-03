/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';

import {
  Box,
  Tab,
  Tabs,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@strapi/design-system";
import GeneralInformation from "./tab/general-information";

const InsertPageTabs = ({}) => {
  return (
    <Box padding={8} background="neutral0">
      <TabGroup
        id="tabs"
        variant="simple"
        initialSelectedTabIndex={0}
        label="TAB"
      >
        <Tabs>
          <Tab>General Information</Tab>
          <Tab>Contract</Tab>
          <Tab>Owner</Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
              <GeneralInformation />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
              Second panel
            </Box>
          </TabPanel>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
              Third panel
            </Box>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Box>
  );
};

export default InsertPageTabs;
