import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "@/components/Layout";
import Workspace from "@/pages/Workspace";

import "@/styles/global.css";

import "@/globals.css";

// biome-ignore lint: lint/style/noNonNullAssertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Workspace />
    </Layout>
  </React.StrictMode>,
);
