import ButtonContainerNode from './Components/Custom/CustomButtonNode/ButtonContainerNode'
import GenericNodeWithHandles from './Components/Custom/CustomGenericNode'
import CustomGoodByeNode from './Components/Custom/CustomGoodByeNode'
import Edge from './Components/Edge'
import StartNode from './Components/StartNode'

export const finalNode = {
  id: 'no',
  type: 'finalMessageNode',
  data: {
    label: 'Goodbye Message',
    finalMessage: 'Thank you for chatting! Goodbye!',
    nextAction: {
      actionType: 'end-chat',
      userInput: '',
      nodeId: [],
    },
  },
  position: { x: 250, y: 250 },
}
export const updatedBtnNode = {
  id: 'confirm',
  type: 'buttonNode',
  data: {
    id: 'confirm',
    updated: true,
    nextAction: {
      actionType: 'user-confirmation',
      nodeId: ['yes', 'no'],
    },
    label: 'User Confirmation',
    buttons: [
      { label: 'Yes', action: 'process-yes-node', id: 'btn-yes' },
      { label: 'No', action: 'process-no-node', id: 'btn-no' },
      { label: 'Any Options', action: 'continue', id: 'placeholder' },
    ],
  },
  position: { x: 200, y: 0 },
}
export const buttonNode = {
  id: 'confirm',
  type: 'buttonNode',
  data: {
    id: 'confirm',
    nextAction: {
      actionType: 'user-confirmation',
      nodeId: ['yes', 'no'],
    },
    label: 'User Confirmation',
    buttons: [
      { label: 'Yes', action: 'process-yes-node', id: 'btn-yes' },

      { label: 'Any Options', action: 'continue', id: 'placeholder' },
    ],
  },
  position: { x: 200, y: 0 },
}
export const genericNode = {
  id: 'message',
  type: 'generic',
  data: {
    contentType: 'customMessage',
    label: 'Message Node',
    message: 'Hello! How can I help you?',
    nextAction: {
      actionType: 'end-chat',
      nodeId: [],
    },
  },
  position: { x: 300, y: 100 },
}
// export const initialNodes = [
//   {
//     id: 'start',
//     data: {
//       label: 'Start Node',
//       button: 1,
//       id: 1,
//       nextAction: {
//         actionType: 'process-next-node',
//         nextNodeIds: ['confirm'],
//       },
//     },
//     type: 'start',
//     position: { x: 0, y: 0 },
//   },

//   // {
//   //   id: 'yes',
//   //   type: 'inputNode',
//   //   data: {
//   //     label: 'Input Your Name',
//   //     inputType: 'text',
//   //     placeholder: 'Enter your first name',
//   //     nextAction: {
//   //       actionType: 'user-input-save',
//   //       userInput: '',
//   //       nodeId: ['message'],
//   //     },
//   //   },
//   //   position: { x: 600, y: 100 },
//   // },
//   // {
//   //   id: 'no',
//   //   type: 'finalMessageNode',
//   //   data: {
//   //     label: 'Goodbye Message',
//   //     finalMessage: 'Thank you for chatting! Goodbye!',
//   //     nextAction: {
//   //       actionType: 'end-chat',
//   //       userInput: '',
//   //       nodeId: [],
//   //     },
//   //   },
//   //   position: { x: 450, y: 100 },
//   // },
//   // {
//   //   id: 'message',
//   //   type: 'messageNode',
//   //   data: {
//   //     label: 'Message Node',
//   //     message: 'Hello! How can I help you?',
//   //     nextAction: {
//   //       actionType: 'end-chat',
//   //       nodeId: [],
//   //     },
//   //   },
//   //   position: { x: 300, y: 100 },
//   // },
// ]

// export const initialNodes = [
//   {
//     id: '1',
//     type: 'input',
//     data: {
//       label: 'Start Node',
//       button: 1,
//       id: 1,
//     },
//     type: 'start',
//     position: { x: 0, y: 0 },
//   },
// ]

export const initialEdges = [
  {
    id: 'edge-1',
    source: '1',
    target: '2',
    label: 'This edge can only be updated from source',
    reconnectable: 'source',
  },
  {
    id: 'edge-2',
    source: '1',
    target: '2',
    label: 'This edge can only be updated from source',
    reconnectable: 'source',
  },
]

export const edgeType = {
  custom: Edge,
}
export const CURRENT_EDGE_TYPE = 'custom'

export const nodeTypes = {
  link: Edge,
  start: StartNode,
  buttonNode: ButtonContainerNode,
  finalMessageNode: CustomGoodByeNode,
  generic: GenericNodeWithHandles,
}
