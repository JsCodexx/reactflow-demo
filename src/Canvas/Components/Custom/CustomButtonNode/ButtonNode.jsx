import React from 'react'

import MenuManager from '../MenuManager'

const ButtonNode = ({ data, hideHandle = false }) => {
  return (
    <div
      className='bg-blue-500 text-white rounded-md p-2  flex justify-center items-center text-xs relative'
      onClick={() => data.onclick && data.onclick()}
    >
      <div className='text-center'>{data.label}</div>
      {!hideHandle && (
        <MenuManager
          children={''}
          sourceID={'confirm'}
          handleType='source'
          handleID={data.id}
        />
      )}
    </div>
  )
}

export default ButtonNode
