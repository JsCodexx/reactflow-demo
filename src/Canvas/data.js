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
    info: '  Question:Are you willing to enter your details?',
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
    info: '  Question:Are you willing to enter your details?',
    buttons: [
      { label: 'Yes', action: 'process-yes-node', id: 'btn-yes' },

      { label: 'Any Options', action: 'continue', id: 'placeholder' },
    ],
  },
  position: { x: 200, y: 0 },
}
export const exitButton = {
  id: 'exit',
  type: 'buttonNode',
  data: {
    id: 'exit',
    nextAction: {
      actionType: 'user-confirmation',
      nodeId: ['yes', 'no'],
    },
    hideAddButton: true,
    label: 'Exit Survey?',
    info: 'Do you want to exit survey?',
    buttons: [
      { label: 'Yes', action: 'process-exit-yes-node', id: 'btn-exit-yes' },

      { label: 'No', action: 'process-exit-no-node', id: 'btn-exit-no' },
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
