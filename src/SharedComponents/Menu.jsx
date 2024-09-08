import { buttonNode, exitButton, finalNode, genericNode } from '../Canvas/data'
import useCanvasStore from '../store'

export default function MenuBar({ close, source, handleID, target }) {
  const addNode = useCanvasStore((store) => store.addNode)

  const onButtonClick = () => {
    addNode(exitButton, source, handleID, target)
    close()
  }
  const onGoodByeClick = () => {
    addNode(finalNode, source, handleID, target)
    close()
  }
  const handleGenericAdd = () => {
    addNode(genericNode, source, handleID, target)
    close()
  }
  return (
    <div className='bg-slate-500 p-1 rounded-lg shadow-md text-black'>
      <div className='flex justify-end'>
        <div
          onClick={close}
          className='cursor-pointer text-sm font-semibold bg-white text-gray-500 hover:text-gray-700 transition'
        >
          ✕
        </div>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <h2 className='font-bold text-lg'>Select</h2>
      </div>

      <nav>
        <ul className='space-y-2'>
          <li onClick={onButtonClick}>
            <div className='w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer flex justify-start items-center gap-2'>
              <span>Button</span>
            </div>
          </li>
          <li onClick={onGoodByeClick}>
            <div className='w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer flex justify-start items-center gap-2'>
              <span>GoodByeMessage</span>
            </div>
          </li>
          <li onClick={handleGenericAdd}>
            <div className='w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer flex justify-start items-center gap-2'>
              <span>Generic</span>
            </div>
          </li>
          <li>
            <div className='w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer flex justify-start items-center gap-2'>
              <span>Contacts</span>
            </div>
          </li>
          <li>
            <div className='w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer flex justify-start items-center gap-2'>
              <span>Settings</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
