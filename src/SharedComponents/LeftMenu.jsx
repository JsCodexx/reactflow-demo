import React from 'react'
import useCanvasStore from '../store'
import { buttonNode, finalNode, genericNode } from '../Canvas/data'

const LeftMenu = () => {
  const addNode = useCanvasStore((state) => state.addNode)

  const handleAddButtonNode = () => {
    addNode(buttonNode)
  }
  const handleGBMessage = () => {
    addNode(finalNode)
  }

  const handleGenericAdd = () => {
    addNode(genericNode)
  }

  return (
    <div className='p-5 bg-blue-200 absolute top-0 left-0 w-full flex flex-col items-center space-y-4 z-10'>
      <div className='text-gray-700 font-semibold'>
        Select any option from the list to add to canvas
      </div>
      <div className='flex gap-4'>
        <button
          onClick={handleAddButtonNode}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
        >
          Add Confirmation node
        </button>
        <button
          onClick={handleGBMessage}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
        >
          Good Bye Message
        </button>
        <button
          onClick={handleGenericAdd}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
        >
          Generic
        </button>
      </div>
    </div>
  )
}

export default LeftMenu
