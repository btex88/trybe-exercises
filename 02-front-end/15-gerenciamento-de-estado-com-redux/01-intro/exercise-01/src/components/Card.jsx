import Button from './Button';

const Card = ({ color, previous, next }) => {
  return (
    <div>
      <span>Color: {color}</span>
      <Button clickFn={previous} name="Previous color" />
      <Button clickFn={next} name="Next color" />
    </div>
  );
};

export default Card;
