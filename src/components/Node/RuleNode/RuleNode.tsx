import { Handle, Position } from "reactflow";

import Rule, { type Props } from "./Rule";

export default function RuleNode({ data }: Props) {
  return (
    <>
      <Rule data={data} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}
