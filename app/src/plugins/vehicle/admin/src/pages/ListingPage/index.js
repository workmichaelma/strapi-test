/*
 *
 * HomePage
 *
 */

import React from "react";
import { useParams, useLocation } from "react-router-dom";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import Layout from "./layout";

import { ListingPageContextProvider } from "./context";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ListingPage = (props) => {
  const { id } = useParams();
  const query = useQuery();

  console.log({ id, props });

  return (
    <ListingPageContextProvider id={id}>
      <Layout />
    </ListingPageContextProvider>
  );
};

export default ListingPage;
