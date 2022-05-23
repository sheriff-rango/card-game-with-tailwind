import React from 'react';
import Clover from '../assets/Clover.svg';
import Diamond from '../assets/Diamond.svg';
import Heart from '../assets/Heart.svg';
import Spade from '../assets/Spade.svg';
import ICard, { SUITE_DIAMOND, SUITE_HEART, SUITE_SPADE } from './Interface';

type CardLayoutProps = {
  cards: ICard[];
  countDealtCards: number;
};

const CardLayout: React.FC<CardLayoutProps> = ({ cards, countDealtCards }) => {
  const visibleCards: ICard[] = [];
  const count = countDealtCards <= 50 ? 5 : 2;
  const startPos = countDealtCards - count;
  for (let i = 0; i < count; i++) {
    visibleCards.push(cards[startPos + i]);
  }
  const html = visibleCards.map((card: ICard, index: number) => {
    let img = Clover;
    let isRed = false;
    switch (card.suit) {
      case SUITE_SPADE:
        img = Spade;
        break;
      case SUITE_HEART:
        img = Heart;
        isRed = true;
        break;
      case SUITE_DIAMOND:
        img = Diamond;
        isRed = true;
        break;
      default:
        img = Clover;
        break;
    }
    const key = `${card.suit} ${card.value} ${startPos + index}`;
    const animation = count !== 2 ? `animate-card${index}5` : `animate-card${index}2`;
    const zindex = (4 - index) * 10;
    return (
      <div
        key={key}
        className={`absolute -m-12 w-24 h-32 sm:-m-24 sm:w-48 sm:h-64 text-white bg-white font-bold text-lg rounded-xl sm:rounded-3xl text-center left-1/2 -top-60 z-${zindex} ${animation}m sm:${animation}`}
      >
        <div
          className={`absolute left-2 top-0 sm:left-6 sm:top-2 font-secondary font-bold text-xxl sm:text-card tracking-tighter
            ${isRed ? 'text-cardred' : 'text-black'}
          `}
        >
          {card.value}
        </div>
        <img
          className="absolute w-4 left-4 top-12 sm:w-8 sm:left-9 sm:top-24"
          src={img}
          alt="small"
        />
        <img
          className="absolute w-12 left-6 top-16 sm:w-28 sm:left-11 sm:top-32"
          src={img}
          alt="large"
        />
      </div>
    );
  });

  return <div className="relative top-0 left-0 w-full h-full">{html}</div>;
};

export default CardLayout;
