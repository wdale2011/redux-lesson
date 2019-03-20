// ---- Card ----//
// add card to board
export function addCard(text, boardIndex) {
  return {
    type: 'ADD_CARD',
    text,
    boardIndex,
  }
}

// edit card

// remove card
export function removeCard(id) {
  return {
    type: 'REMOVE_CARD',
    id,
  }
}

// transfer card
export function transferCard(destinationBoardIndex, id) {
  return {
    type: 'TRANSFER_CARD',
    destinationBoardIndex,
    id,
  }
}

// ---- Board ----//
// add board
export function addBoard(name) {
  return {
    type: 'ADD_BOARD',
    name,
  }
}

// remove board
export function removeBoard(index) {
  return {
    type: 'REMOVE_BOARD',
    index,
  }
}
