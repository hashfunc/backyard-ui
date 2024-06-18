import { useMemo } from "react";

import Node from "../Node";

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

  return <Node title={"VPC"} attributes={attributes} />;
}
