import type { Meta, StoryObj } from "@storybook/react";

import RuleGroup from "./RuleGroup";

const meta = {
  title: "Node/RuleGroup",
  component: RuleGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RuleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: "Name of rule group",
    },
  },
};
