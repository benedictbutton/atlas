import { useQuery, useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_GAMES = gql`
  query Games {
    games {
      id
    }
  }
`;

const GET_GAME = gql(`
  query Game {
    id
  }
`);

const Games = () => {
  const { data } = useQuery(GET_GAMES);

  return (
    <div className="bg-black border-[10px] border-indigo-300/100 border-double opacity-90">
      TEST
    </div>
  );
};

export default Games;
