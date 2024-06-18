import { useMemo } from "react";

import NodeBase from "../NodeBase";

export type Props = {
  data: {
    name: string;
    status?: "NORMAL" | "ALLOW" | "DENY" | "PASS";
  };
};

export default function RuleGroup({
  data: { name, status = "NORMAL" },
}: Props) {
  const attributes = useMemo(
    () => [
      {
        title: "Name",
        value: name,
      },
    ],
    [name],
  );

  return (
    <NodeBase title="Rule Group" attributes={attributes} status={status} />
  );
}
