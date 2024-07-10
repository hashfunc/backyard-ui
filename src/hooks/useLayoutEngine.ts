import dagre from "@dagrejs/dagre";
import { useCallback, useMemo } from "react";
import { type Edge, type Node, Position } from "reactflow";

import type { NodeProperty } from "components/Node";

export default function useLayoutEngine() {
  const graph = useMemo(() => {
    const _graph = new dagre.graphlib.Graph();

    _graph.setDefaultEdgeLabel(() => ({}));
    _graph.setGraph({});

    return _graph;
  }, []);

  const render = useCallback(
    <T>(nodeProperties: NodeProperty<T>[], edges: Edge[]) => {
      for (const node of nodeProperties) {
        graph.setNode(node.id, { width: node.width, height: node.height });
      }

      for (const edge of edges) {
        graph.setEdge(edge.source, edge.target);
      }

      dagre.layout(graph);

      const renderedNodes = nodeProperties.map((nodeProperty) => {
        const position = graph.node(nodeProperty.id);

        const node: Node = {
          id: nodeProperty.id,
          type: nodeProperty.type,
          targetPosition: Position.Top,
          sourcePosition: Position.Bottom,
          position: { x: position.x, y: position.y },
          data: nodeProperty.data,
        };

        return node;
      });

      return { nodes: renderedNodes, edges };
    },
    [graph],
  );

  return { render };
}
