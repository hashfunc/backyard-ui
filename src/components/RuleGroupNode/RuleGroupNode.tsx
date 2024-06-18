import { useMemo } from "react";

import Node from "../Node";

type Props = {
  data: {
    name: string;
    status?: "NORMAL" | "ALLOW" | "DENY" | "PASS";
  };
};

export default function RuleGroupNode({
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

  return <Node title="Rule Group" attributes={attributes} status={status} />;
}
