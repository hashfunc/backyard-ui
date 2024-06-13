import type { Meta, StoryObj } from "@storybook/react";

import Node from "./Node";

const meta = {
  title: "Node",
  component: Node,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Node>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Node | Name of node",
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
