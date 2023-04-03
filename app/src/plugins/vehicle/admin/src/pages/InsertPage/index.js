/*
 *
 * HomePage
 *
 */

import React, { useContext } from "react";
import { InsertPageContext, InsertPageContextProvider } from "./context";

import Layout from "./layout";

const InsertPage = ({ history }) => {
  return (
    <InsertPageContextProvider>
      <Layout />
    </InsertPageContextProvider>
  );
};

export default InsertPage;
