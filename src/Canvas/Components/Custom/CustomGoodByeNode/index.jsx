import React from 'react'
import { Handle, Position } from '@xyflow/react'

const CustomGoodByeNode = ({ data }) => {
  return (
    <div className='bg-blue-500 text-white p-4 rounded-lg shadow-lg w-60 text-center'>
      <Handle
        type='target'
        position={Position.Left}
        className='w-2 h-2 bg-white rounded-full'
      />
      <div className='flex flex-col items-center'>
        <p className='text-lg font-bold'>Goodbye Message</p>
        <p className='text-sm mt-2'>{data.message}</p>
      </div>
    </div>
  )
}

export default CustomGoodByeNode
