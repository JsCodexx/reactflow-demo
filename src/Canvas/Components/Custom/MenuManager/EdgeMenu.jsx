import React, { useCallback } from 'react'
import useCanvasStore from '../../../../store'

export default function ContextMenu({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}) {
  const removeEdgeById = useCanvasStore((store) => store.removeEdgeById)

  const deleteEdge = () => {
    removeEdgeById(id)
  }
  const create = () => {
    //TODO
    //CREATE A NEW EDGE
    //UPDATE EXISING END
    //ADD NODE AS WELL
  }

  return (
    <div
      style={{ top, left, right, bottom }}
      className='absolute bg-white border border-gray-300 shadow-md z-10 p-2'
      {...props}
    >
      <div onClick={deleteEdge}> delete edge</div>
      <div onClick={create}>Add Generic</div>
    </div>
  )
}
