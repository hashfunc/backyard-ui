import type { Meta, StoryObj } from "@storybook/react";

import VPC from "./VPC";

const meta = {
  title: "Node/VPC",
  component: VPC,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VPC>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: "Name of VPC",
    },
  },
};
