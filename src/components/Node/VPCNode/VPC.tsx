import { useMemo } from "react";

import NodeBase from "../NodeBase";

export type Props = {
  data: { name: string };
};

export default function VPC({ data: { name } }: Props) {
  const attributes = useMemo(
    () => [
      {
        title: "Name",
        value: name,
      },
    ],
    [name],
  );

  return <NodeBase title="VPC" attributes={attributes} />;
}
