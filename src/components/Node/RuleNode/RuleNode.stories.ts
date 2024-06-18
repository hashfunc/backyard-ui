import type { Meta, StoryObj } from "@storybook/react";

import RuleNode from "./RuleNode.tsx";

const meta = {
  title: "Node/RuleNode",
  component: RuleNode,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RuleNode>;

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
