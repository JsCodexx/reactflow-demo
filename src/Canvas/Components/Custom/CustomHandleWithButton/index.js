import { Handle, Position } from '@xyflow/react'
import React from 'react'

function CustomHandleWithButton({ setShowMenu, id, type = 'source', hanleID }) {
  return (
    <Handle
      type={type}
      position={Position.Right}
      isConnectable={true}
      id={id}
      className='bg-gray-300 p-2 cursor-pointer z-20 rounded-full'
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <div className='absolute top-[-5px] left-[3px] text-lg pointer-events-none text-white'>
        +
      </div>
    </Handle>
  )
}

export default CustomHandleWithButton
