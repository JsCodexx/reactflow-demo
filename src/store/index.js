import { create } from 'zustand'
import { CURRENT_EDGE_TYPE } from '../Canvas/data'
const initialNodes = [
  {
    id: 'start',
    data: {
      label: 'Start Node',
      button: 1,
      id: 'start',
      nextAction: {
        actionType: 'process-next-node',
        nextNodeIds: ['confirm'],
      },
    },
    type: 'start',
    position: { x: 0, y: 0 },
  },
]

const initialEdges = [
  // {
  //   id: 'edge-2',
  //   source: 'confirm',
  //   target: 'no',
  //   reconnectable: 'source',
  //   sourceHandle: 'btn-yes',
  // },
]

const initialState = {
  nodes: initialNodes,
  edges: [],
}

const createNodeSlice = (set, get) => ({
  overrideNodes: (nodes) => {
    set((state) => ({ ...state, state, nodes: nodes }))
  },
  addNode: (node, sourceNodeId, sourceHandleId, target) => {
    console.log('add node in store')
    set((state) => {
      const updatedNodes = [...state.nodes, node]
      let updatedEdges = [...state.edges]
      if (sourceNodeId) {
        const newEdge = {
          id: `edge-${sourceNodeId}-${node.id}-${Math.random()}`,
          source: sourceNodeId,
          target: node.id,
          type: CURRENT_EDGE_TYPE,
          animated: true,
          style: { stroke: 'red' },
          ...(sourceHandleId && { sourceHandle: sourceHandleId }),
          ...(target && { target: target }),
        }
        updatedEdges = [...state.edges, newEdge]
      }
      return {
        nodes: updatedNodes,
        edges: updatedEdges,
      }
    })
  },
  updateNodePosition: (position, id) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id ? { ...node, position } : node
      ),
    }))
  },
  getNodeById: (id) => get().nodes.find((node) => node.id === id),

  updateNodeById: (id, updatedNode) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id
          ? { ...node, ...updatedNode, position: node.position }
          : node
      ),
    })),

  removeNodeById: (id) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== id),
    })),
})

const createEdgeSlice = (set, get) => ({
  overrideEdges: (edges) => {
    set((state) => ({ ...state, state, edges: edges }))
  },

  addEdge: (edge) => {
    const e = {
      ...edge,
      type: CURRENT_EDGE_TYPE,
      animated: true,
      style: { stroke: 'red' },
    }
    set((state) => ({
      edges: [...state.edges, e],
    }))
  },

  pushEdge: (edge) => {
    set((state) => ({ edgee: [...state.edges, edge] }))
  },
  getEdgeById: (id) => get().edges.find((edge) => edge.id === id),

  updateEdgeById: (id, updatedEdge) =>
    set((state) => ({
      edges: state.edges.map((edge) =>
        edge.id === id ? { ...edge, ...updatedEdge } : edge
      ),
    })),

  removeEdgeById: (id) =>
    set((state) => ({
      edges: state.edges.filter((edge) => edge.id !== id),
    })),
})

const useCanvasStore = create((set, get) => ({
  ...initialState,
  ...createNodeSlice(set, get),
  ...createEdgeSlice(set, get),
}))

export default useCanvasStore
