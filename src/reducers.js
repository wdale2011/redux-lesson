import short from 'shortid'

/* eslint-disable no-case-declarations */
function boards(state = [], action) {
  switch (action.type) {
    case 'ADD_BOARD':
      return [...state, action.name]
    case 'REMOVE_BOARD':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    default:
      return state
  }
}

function cards(state = [], action) {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        { id: short.generate(), text: action.text, board: action.boardIndex },
      ]
    case 'REMOVE_CARD':
      return state.filter(card => card.id !== action.id)
    case 'TRANSFER_CARD':
      const cardIndex = state.findIndex(card => card.id === action.id)
      return [
        ...state.slice(0, cardIndex),
        { ...state[cardIndex], board: action.destinationBoardIndex },
        ...state.slice(cardIndex + 1),
      ]
    default:
      return state
  }
}

function rootReducer(state = {}, action) {
  return {
    boards: boards(state.boards, action),
    cards: cards(state.cards, action),
  }
}

export default rootReducer
