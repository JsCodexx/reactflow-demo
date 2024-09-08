import React from 'react'
import ReactFlowCanvas from './Canvas'
import { ReactFlowProvider } from '@xyflow/react'
import LeftMenu from './SharedComponents/LeftMenu'

const App = () => {
  return (
    <>
      <ReactFlowProvider>
        <LeftMenu />
        <ReactFlowCanvas />
      </ReactFlowProvider>
    </>
  )
}

export default App
