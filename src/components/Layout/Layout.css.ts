import { style } from "@vanilla-extract/css";

export const Layout = style({
  width: "100dvw",
  height: "100dvh",
  padding: "35px",
});

export const LayoutContent = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  borderWidth: "1px",
  borderColor: "hsl(var(--border))",
  borderStyle: "solid",
  borderRadius: "var(--radius)",
});
