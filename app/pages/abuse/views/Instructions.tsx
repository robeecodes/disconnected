export const Instructions = ({ playGame }: { playGame: () => void }) => {
  return (
    <div>
      <h2>Instructions</h2>
      <h3>Filter out the hate comments</h3>
      <ol>
        <li>Move the mouse to move the black bin</li>
        <li>Catch the hate comments (red)</li>
        <li>Do not catch the normal comments (green)</li>
      </ol>
      <button onClick={playGame}>Continue</button>
    </div>
  );
};

export default Instructions;
