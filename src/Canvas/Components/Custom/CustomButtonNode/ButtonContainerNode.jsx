import React from 'react'
import { Handle, Position } from '@xyflow/react'
import ButtonNode from './ButtonNode'
import useCanvasStore from '../../../../store'
import { updatedBtnNode } from '../../../data'

const ButtonContainerNode = ({ data: old }) => {
  const storeNode = useCanvasStore((store) => store.getNodeById(old.id))
  const updateNode = useCanvasStore((store) => store.updateNodeById)
  const handleButtonClick = () => {
    updateNode(old.id, updatedBtnNode)
  }
  const { data } = storeNode || {}
  console.log(data)
  return (
    <div className='bg-white border border-blue-500 rounded-lg py-4 flex flex-col items-center w-48'>
      <Handle
        id='s-1'
        type='target'
        isConnectable={true}
        position={Position.Left}
      />
      <div className='flex flex-col items-center w-full'>
        <strong className='text-lg mb-2'>{data?.label}</strong>
        <p className='text-xs'>{data.info}</p>
        <div className='flex flex-col gap-2 w-full'>
          {data?.buttons?.map((buttonData, index) => (
            <ButtonNode
              key={index}
              data={buttonData}
            />
          ))}
          {!data?.updated && !data?.hideAddButton && (
            <ButtonNode
              hideHandle
              data={{ label: 'Add No Button', onclick: handleButtonClick }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ButtonContainerNode
