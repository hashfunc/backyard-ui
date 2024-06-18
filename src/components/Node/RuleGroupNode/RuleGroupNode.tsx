import { Handle, Position } from "reactflow";

import RuleGroup, { type Props } from "./RuleGroup";

export default function RuleGroupNode({ data }: Props) {
  return (
    <>
      <RuleGroup data={data} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}
