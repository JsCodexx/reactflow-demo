import React from 'react'
import { Handle, Position } from '@xyflow/react'

const GenericNodeWithHandles = ({ data }) => {
  return (
    <div className='relative bg-white border border-gray-300 rounded-lg shadow-sm p-3 w-40'>
      <Handle
        type='source'
        position={Position.Right}
        style={{
          background: '#e3e3e3',
          width: 10,
          height: 10,
          borderRadius: '50%',
        }}
      />

      <Handle
        type='target'
        position={Position.Left}
        style={{
          background: '#e3e3e3',
          width: 10,
          height: 10,
          borderRadius: '50%',
        }}
      />

      <div className='flex flex-col items-center'>
        <h3 className='text-xs font-semibold text-gray-700 mb-1 truncate'>
          {data.label}
        </h3>
        <p className='text-xs text-gray-500 truncate'>{data.message}</p>
      </div>
    </div>
  )
}

export default GenericNodeWithHandles
