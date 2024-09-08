import React, { useCallback } from 'react'
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Controls,
  reconnectEdge,
  addEdge as addEdgeFlow,
  Background,
  BackgroundVariant,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'
import { edgeType, initialEdges, initialNodes, nodeTypes } from './data'
import useCanvasStore from '../store'
import ContextMenu from './Components/Custom/MenuManager/EdgeMenu'

const ReactFlowCanvas = () => {
  const storeNodes = useCanvasStore((store) => store.nodes)
  const storeEges = useCanvasStore((store) => store.edges)
  const updateNodePosition = useCanvasStore((store) => store.updateNodePosition)
  const [rfInstance, setRfInstance] = React.useState(null)
  const [menu, setMenu] = React.useState(null)
  const ref = React.useRef(null)

  const addEdge = useCanvasStore((store) => store.addEdge)
  const [nodes, setNodes, onNodesChange] = useNodesState(storeNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(storeEges)
  React.useEffect(() => {
    // if (nodes.length !== storeNodes.length) {
    setNodes(storeNodes)
    // }
    // if (storeEges.length !== edges.length) {
    setEdges(storeEges)
    // }
  }, [storeEges, storeNodes])

  // const onReconnect = useCallback((oldEdge, newConnection) => {
  //   const n = reconnectEdge(oldEdge, newConnection, edges)
  //   console.log(oldEdge,)
  //   if (n.length) addEdge(...n)
  //   // console.log(n)

  //   // setEdges(n)
  // }, [])

  const onConnect = useCallback((params) => {
    const n = addEdgeFlow(params, edges)

    addEdge(...n)
    // setEdges(n)
  }, [])

  const onNodeDragStop = useCallback((event, currentNode, finalNode) => {
    updateNodePosition(currentNode.position, currentNode.id)
  }, [])

  const onNodeContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault()

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = ref.current.getBoundingClientRect()
      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom:
          event.clientY >= pane.height - 200 && pane.height - event.clientY,
      })
    },
    [setMenu]
  )
  const onPaneClick = useCallback(() => setMenu(null), [setMenu])
  return (
    <ReactFlow
      nodes={nodes}
      onChange={(a) => {
        console.log(a)
      }}
      ref={ref}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeType}
      onNodesChange={onNodesChange}
      onInit={setRfInstance}
      onEdgesChange={onEdgesChange}
      onEdgeContextMenu={onNodeContextMenu}
      onNodeDragStop={onNodeDragStop}
      snapToGrid
      // onReconnect={onReconnect}

      onConnect={onConnect}
      fitView
      attributionPosition='top-right'
    >
      <Background variant={BackgroundVariant.Dots} />
      {menu && (
        <ContextMenu
          onClick={onPaneClick}
          {...menu}
        />
      )}

      <Controls />
    </ReactFlow>
  )
}

export default ReactFlowCanvas
