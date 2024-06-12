import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const RuleNode = recipe({
  base: {
    boxSizing: "border-box",
    width: 300,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
  variants: {
    status: {
      NORMAL: {
        borderColor: "#d4d4d4",
        boxShadow: "1px 1px 4px 1px #d4d4d42f, -1px -1px 4px 1px #d4d4d42f",
      },
      ALLOW: {
        borderColor: "#0264ff",
        boxShadow: "1px 1px 4px 1px #0264ff2f, -1px -1px 4px 1px #0264ff2f",
      },
      DENY: {
        borderColor: "#f23232",
        boxShadow: "1px 1px 4px 1px #f232322f, -1px -1px 4px 1px #f232322f",
      },
      PASS: {
        borderColor: "#0f9d25",
        boxShadow: "1px 1px 4px 1px #0f9d252f, -1px -1px 4px 1px #0f9d252f",
      },
    },
  },
});

export const Header = style({
  boxSizing: "border-box",
  padding: "20px 16px 0 16px",
});

export const Title = style({
  fontSize: 14,
});

export const Attribute = style({
  display: "flex",
  gap: 45,
  boxSizing: "border-box",
  padding: "0 16px",
  margin: "24px 0 20px 0",
});

export const AttributeTitle = style({
  fontSize: 12,
});

export const AttributeValue = style({
  fontSize: 24,
  fontWeight: "bold",
});

export const Domain = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  boxSizing: "border-box",
  padding: "16px 16px 12px 16px",
  borderTop: "1px solid #d4d4d4",
  fontSize: 14,
});

export const DomainCount = style({
  fontSize: 20,
  fontWeight: "bold",
});
