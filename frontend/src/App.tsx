import React from 'react';
import CardLayout from 'components/CardLayout';
import Congratulation from 'components/Congratulation';
import ICard, { SUITE_CLOVER, SUITE_DIAMOND, SUITE_HEART, SUITE_SPADE } from 'components/Interface';
import Statistics from 'components/Statistics';

const randomCards = () => {
  const suits = [SUITE_SPADE, SUITE_HEART, SUITE_DIAMOND, SUITE_CLOVER];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  // empty array to contain cards
  const deck: ICard[] = [];

  // create a deck of cards
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      const card = { value: values[x], suit: suits[i] };
      deck.push(card);
    }
  }

  // shuffle the cards
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp: ICard = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }

  return deck;
};
const calculateAceLeft = (cards: ICard[], countDealtCards: number) => {
  let count = 0;
  for (let i = countDealtCards; i < cards.length; i++) {
    if (cards[i].value === 'A') count += 1;
  }
  return count;
};

let generatedCards = randomCards();
let previousAceLeft = 4;

const App: React.FC = () => {
  const [cards, setCards] = React.useState<ICard[]>(generatedCards);
  const [countDealtCards, setCountDealtCards] = React.useState<number>(5);

  // handlers
  const handleReset = () => {
    generatedCards = randomCards();
    setCountDealtCards(5);
    setCards(generatedCards);
  };
  const handleDeal = () => {
    // calculate left cards
    const newDealt = countDealtCards + 5;
    if (newDealt >= 52) {
      setCountDealtCards(52);
    } else {
      setCountDealtCards(newDealt);
    }
  };

  // game status
  const isGameOver = countDealtCards > 50;
  const isWin = isGameOver && previousAceLeft >= 1;
  const aceLeft = calculateAceLeft(cards, countDealtCards);
  previousAceLeft = aceLeft;

  return (
    <div className="h-screen bg-gradient-to-b from-bgpattern to-black">
      <Statistics left={52 - countDealtCards} aceLeft={aceLeft} />
      <CardLayout cards={cards} countDealtCards={countDealtCards} />
      {!isGameOver && (
        <div className="fixed w-full left-0 bottom-28 sm:bottom-32 flex justify-center z-50">
          <button
            type="button"
            className="w-48 h-16 text-xxl sm:w-72 sm:h-24 sm:text-xxxl bg-btncolor rounded-2xl font-main text-center cursor-pointer text-black"
            onClick={handleDeal}
          >
            DEAL
          </button>
        </div>
      )}
      {!isGameOver && (
        <div className="fixed w-full left-0 bottom-12 flex justify-center sm:justify-end pr-0 sm:pr-9 z-50">
          <button
            type="button"
            className="w-32 h-12 text-btncolor border-2 border-cardborder rounded-xl text-xl cursor-pointer font-main"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      )}
      {isGameOver && (
        <div className="fixed w-full left-0 bottom-20 flex justify-center z-50">
          <button
            type="button"
            className="pr-4 pl-4 h-12 text-btncolor border-2 border-cardborder rounded-xl text-xl cursor-pointer font-main"
            onClick={handleReset}
          >
            Play Again
          </button>
        </div>
      )}
      {isGameOver && !isWin && (
        <div className="fixed w-full left-0 bottom-36 font-secondary text-xl sm:text-xxl text-center font-normal text-white">
          You lose.
          <br />
          Better luck next time!
        </div>
      )}
      {isGameOver && isWin && <Congratulation />}
    </div>
  );
};

export default App;
