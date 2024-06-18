import type { Meta, StoryObj } from "@storybook/react";

import NodeBase from "./NodeBase";

const meta = {
  title: "Node/NodeBase",
  component: NodeBase,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NodeBase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "NodeBase | Name of node",
    attributes: [
      {
        title: "title",
        value: "VALUE",
      },
      {
        title: "title",
        value: "VALUE",
      },
    ],
    reference: {
      title: "Reference",
      contents: [
        {
          content: "WITH_SUFFIX",
          suffix: "suffix",
        },
        {
          content: "WITH_OUT_SUFFICE",
        },
      ],
    },
  },
};
