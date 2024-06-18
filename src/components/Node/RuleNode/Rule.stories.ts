import type { Meta, StoryObj } from "@storybook/react";

import Rule from "./Rule";

const meta = {
  title: "Node/Rule",
  component: Rule,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Rule>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: "Name of rule",
      action: "ALLOW",
      priority: 100,

      domain: {
        name: "Name of domain list",
        count: 25,
      },

      status: "NORMAL",
    },
  },
};
