import { useMemo } from "react";

import NodeBase from "../NodeBase";

type Props = {
  data: { name: string };
};

export default function VPCNode({ data: { name } }: Props) {
  const attributes = useMemo(
    () => [
      {
        title: "Name",
        value: name,
      },
    ],
    [name],
  );

  return <NodeBase title={"VPC"} attributes={attributes} />;
}
