const TypingText = ({ main, span }) => {
  return (
    <span className=" largeFont">
      {main}
      <span className="underline">{span}</span>
      <span className="blink">|</span>
    </span>
  );
};
export default TypingText;
