import { Background, BackgroundVariant, Controls, MiniMap, ReactFlow } from '@xyflow/react';

// 节点的概念
const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];
// 边的概念  -- 连接节点的线 从哪里来 到哪里去
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];
export default function FlowContainer() {
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // const onConnect = useMemoizedFn((params) => {
  //   console.log(params);
  //   setEdges((eds) => addEdge(params, eds));
  // });

  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      // 节点变化
      // onNodesChange={onNodesChange}
      // // 边变化
      // onEdgesChange={onEdgesChange}
      // edges连接边
      // onConnect={onConnect}
    >
      {' '}
      <Controls />
      <MiniMap />
      <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
    </ReactFlow>
  );
}
