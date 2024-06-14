import type { Meta, StoryObj } from "@storybook/react";

import RuleGroupNode from "./RuleGroupNode";

const meta = {
  title: "RuleGroupNode",
  component: RuleGroupNode,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RuleGroupNode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Name of rule group",
  },
};
