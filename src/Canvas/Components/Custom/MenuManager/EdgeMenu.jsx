import React, { useCallback } from 'react'
import { useReactFlow } from '@xyflow/react'
import MenuBar from '../../../../SharedComponents/Menu'

export default function ContextMenu({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}) {
  const { getNode, setNodes, addNodes, setEdges, getEdge } = useReactFlow()

  //   // Duplicate node functionality
  //   const duplicateNode = useCallback(() => {
  //     const node = getNode(id)
  //     const position = {
  //       x: node.position.x + 50,
  //       y: node.position.y + 50,
  //     }

  //     addNodes({
  //       ...node,
  //       selected: false,
  //       dragging: false,
  //       id: `${node.id}-copy`,
  //       position,
  //     })
  //   }, [id, getNode, addNodes])

  //   // Delete node functionality
  //   const deleteNode = useCallback(() => {
  //     setNodes((nodes) => nodes.filter((node) => node.id !== id))
  //     setEdges((edges) => edges.filter((edge) => edge.source !== id))
  //   }, [id, setNodes, setEdges])

  return (
    <div
      style={{ top, left, right, bottom }}
      className='absolute bg-white border border-gray-300 shadow-md z-10 p-2'
      {...props}
    >
      delete edge
      <MenuBar close={props.onClick} />
    </div>
  )
}
