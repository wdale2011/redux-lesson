import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addCard, removeCard, transferCard } from '../actions'
import AddCardForm from '../components/AddCardForm'
import Card from '../components/Card'

class Board extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    removeCard: PropTypes.func,
    transferCard: PropTypes.func,
  }

  handleDrop = e => {
    e.preventDefault()
    const cardId = e.dataTransfer.getData('cardId')
    this.props.transferCard(this.props.index, cardId)
  }

  render() {
    const { index, name, addCard, cards, removeCard } = this.props
    return (
      <div
        className="board"
        style={{
          flex: '0 0 300px',
          margin: '15px',
          padding: '15px',
          borderRadius: '5px',
          backgroundColor: '#E3E4E6',
          boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.1)',
        }}
        onDragOver={e => e.preventDefault()}
        onDrop={this.handleDrop}
      >
        <h2 style={{ margin: '0', marginBottom: '1rem' }}>{name}</h2>

        {cards.map((card, i) => (
          <Card key={i} card={card} removeCard={removeCard} />
        ))}

        <AddCardForm addCard={addCard} boardIndex={index} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  cards: state.cards.filter(card => card.board === ownProps.index),
})

// const mapDispatchToProps = dispatch => ({
//   addCard: (text, boardIndex) => dispatch(addCard(text, boardIndex)),
// })
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ addCard, transferCard }, dispatch)
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addCard, removeCard, transferCard }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
