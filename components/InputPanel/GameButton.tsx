const GameButton = ({ createGame, saveGame, game }) => {
  return (
    <div className="w-full mt-3 text-center">
      {game && (
        <button
          className="w-32 h-16 bg-black border-[10px] border-indigo-300/100 border-double"
          onClick={saveGame}
        >
          <span className="text-[#1b83ff]">Save</span>
          <span className="text-[#df001d]"> Game</span>
        </button>
      )}
      {!game && (
        <button
          className="w-32 h-16 bg-black border-[10px] border-indigo-300/100 border-double"
          onClick={createGame}
        >
          <span className="text-[#1b83ff]">New</span>
          <span className="text-[#df001d]"> Game</span>
        </button>
      )}
    </div>
  );
};

export default GameButton;
