import { Handle, Position } from "reactflow";

import VPC, { type Props } from "./VPC";

export default function VPCNode({ data }: Props) {
  return (
    <>
      <VPC data={data} />
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}
