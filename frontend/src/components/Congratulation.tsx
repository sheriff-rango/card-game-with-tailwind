import React from 'react';
import IMG_SPARKLE from '../assets/Sparkle.svg';
import IMG_WINNER from '../assets/winner.svg';

type SparkleProps = {
  delay: number;
};
const Sparkle: React.FC<SparkleProps> = ({ delay }) => {
  const [count, setCount] = React.useState(0);
  // React.useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1);
  //   }, 2000);
  //   return () => clearInterval(id);
  // });
  const handleAnimation = () => {
    setCount(count + 1);
  };
  const left = `${Math.floor(Math.random() * 100)}%`;
  const top = `${Math.floor(Math.random() * 100)}%`;
  return (
    <img
      id={`vdg_${count}_${delay}`}
      src={IMG_SPARKLE}
      className="fixed w-28 top-28 left-1/4 animate-congratulation z-50"
      style={{ left, top, animationDelay: `${delay}ms` }}
      alt="sparkle"
      onAnimationIteration={handleAnimation}
    />
  );
};

const Congratulation: React.FC = () => {
  const childs: JSX.Element[] = [];
  for (let i = 0; i < 10; i++) {
    childs.push(<Sparkle key={i} delay={i * 100} />);
  }
  return (
    <div>
      <img className="fixed top-16 w-full p-11 z-50" src={IMG_WINNER} alt="small" />
      {childs}
    </div>
  );
};
export default Congratulation;
