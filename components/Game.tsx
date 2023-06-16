import { gql, useQuery, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      id
    }
  }
`;

const CREATE_GAME = gql`
  mutation createGame($userId: String!, $countries: [CountryInput]) {
    createGame(userId: $userId, countries: $countries) {
      id
      answers {
        countryId
        value
      }
    }
  }
`;

const Game = () => {
  const { data } = useSession();
  const { data: countryData } = useQuery(GET_COUNTRIES);

  const [createGame, { data: gameData, loading, error }] =
    useMutation(CREATE_GAME, {
      variables: {
        userId: data.user.id,
        countries: countryData?.countries,
      },
    });

  return (
    <button className="w-24 h-24 bg-indigo-300" onClick={createGame}>
      TEST
    </button>
  );
};

export default Game;
