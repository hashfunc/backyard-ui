import { style } from "@vanilla-extract/css";

export const PageLayout = style({
  boxSizing: "border-box",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Welcome = style({
  boxSizing: "border-box",
  width: "400px",
});
