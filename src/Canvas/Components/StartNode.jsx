import { Handle, Position } from '@xyflow/react'
import React from 'react'
import MenuBar from '../../SharedComponents/Menu'
import CustomHandleWithButton from './Custom/CustomHandleWithButton'
import MenuManager from './Custom/MenuManager'

export default React.memo(({ data }) => {
  return (
    <div
      style={{ position: 'relative' }}
      className='nodrag nopan'
    >
      <MenuManager
        sourceID='start'
        handleType='source'
      >
        <div
          style={{
            fontSize: '5px',
            background: 'lightblue',
            padding: '10px',
            border: '1px solid gray',
          }}
        >
          <h4 className='font-bold text-sm'>Start</h4>
          Add a flow using plus + button
        </div>
      </MenuManager>
    </div>
  )
})
