import './App.css';
import { useState } from 'react';

// Images
import RuyLopez from "./assets/1. Ruy Lopez.png"
import SicilianDefense from "./assets/2. Sicilian.png"
import FrenchDefense from "./assets/3. French Defense.png"
import CaroKannDefense from "./assets/4. Caro-Kann Defense.png"
import PircDefense from "./assets/5. Pirc Defense.png"
import QueensGambit from "./assets/6. Queen\'s Gambit.png"
import ItalianGame from "./assets/7. Italian Game.png"
import ScotchGame from "./assets/8. Scotch Game.png"
import EnglishOpening from "./assets/9. English Opening.png"
import DutchDefense from "./assets/10. Dutch Defense.png"

const App = () => {
  const cards = [
    { id: 1, name: 'Ruy Lopez', moves: '1. e4 e5 2. Nf3 Nc6 3. Bb5', color: 'white', img: RuyLopez },
    { id: 2, name: 'Sicilian Defense', moves: '1. e4 c5', color: 'black', img: SicilianDefense },
    { id: 3, name: 'French Defense', moves: '1. e4 e6', color: 'black', img: FrenchDefense },
    { id: 4, name: 'Caro-Kann Defense', moves: '1. e4 c6', color: 'black', img: CaroKannDefense },
    { id: 5, name: 'Pirc Defense', moves: '1. e4 d6', color: 'black', img: PircDefense },
    { id: 6, name: 'Queen\'s Gambit', moves: '1. d4 d5 2. c4', color: 'white', img: QueensGambit },
    { id: 7, name: 'Italian Game', moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4', color: 'white', img: ItalianGame },
    { id: 8, name: 'Scotch Game', moves: '1. e4 e5 2. Nf3 Nc6 3. d4', color: 'white', img: ScotchGame },
    { id: 9, name: 'English Opening', moves: '1. c4', color: 'white', img: EnglishOpening },
    { id: 10, name: 'Dutch Defense', moves: '1. d4 f5', color: 'black', img: DutchDefense },
  ]


  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)


  const nextCard = () => {
    setFlipped(false)

    let nextIndex = index
    while (nextIndex === index) {
      nextIndex = Math.floor(Math.random() * cards.length)
    }
    setIndex(nextIndex)
  }


  const flip = () => {
    setFlipped(!flipped)
  }

  const card = cards[index]

  return (
    <div className="App">
      <div className="header">
        <h1>Chess Openings</h1>
        <h2>Learn the move order of popular openings</h2>
        <h3>Number of cards: {cards.length}</h3>
        <h5>White cards are for the player with the white pieces, and black cards are for the Black pieces</h5>
      </div>

      <div className="cards">
        <div className = {`card ${card.color}`} onClick={flip}>
          {!flipped ? (
            <div>
              <div className='card-name'>{card.name}</div>
              <img className='card-img' src={card.img}/>
            </div>
          ) : (
            <div>{card.moves}</div>
          )}
        </div>
      </div>

      <button>Previous</button>
      <button onClick={nextCard}>Next</button>

      
    </div>
  )
}

export default App