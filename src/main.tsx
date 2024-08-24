import React from "react";
import ReactDOM from "react-dom/client";

import Welcome from "@/components/Welcome";

import "@/styles/global.css";

import "@/globals.css";

// biome-ignore lint: lint/style/noNonNullAssertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
);
