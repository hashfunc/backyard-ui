import type { Meta, StoryObj } from "@storybook/react";

import VPCNode from "./VPCNode.tsx";

const meta = {
  title: "Node/VPCNode",
  component: VPCNode,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VPCNode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: "Name of VPC",
    },
  },
};
