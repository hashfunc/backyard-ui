import { useMemo } from "react";

import NodeBase from "../NodeBase";

type Props = {
  data: {
    name: string;
    priority: number;
    action: "ALLOW" | "ALERT" | "DENY";
    domain: {
      name: string;
      count: number;
    };
    status?: "NORMAL" | "ALLOW" | "DENY" | "PASS";
  };
};

export default function RuleNode({
  data: { name, priority, action, domain, status = "NORMAL" },
}: Props) {
  const attributes = useMemo(
    () => [
      {
        title: "Priority",
        value: priority,
      },
      {
        title: "Action",
        value: action,
      },
    ],
    [priority, action],
  );

  const references = useMemo(
    () => ({
      title: `Domain List | ${domain.name}`,
      contents: [
        {
          content: domain.count,
          suffix: "domains",
        },
      ],
    }),
    [domain],
  );

  return (
    <NodeBase
      title={`Rule | ${name}`}
      attributes={attributes}
      reference={references}
      status={status}
    />
  );
}
