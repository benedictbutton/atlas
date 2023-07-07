import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import WorldMap from './WorldMap';

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      id
      name
    }
  }
`;

const CREATE_GAME = gql`
  mutation createGame($userId: String!, $countries: [CountryInput]) {
    createGame(userId: $userId, countries: $countries) {
      id
      value
      countryName
      gameId
    }
  }
`;

const Game = () => {
  const { data } = useSession();
  const { data: countryData } = useQuery(GET_COUNTRIES);
  const [answers, setAnswers] = useState();

  const [createGame, { data: gameData, loading, error }] =
    useMutation(CREATE_GAME, {
      variables: {
        userId: data.user.id,
      },
    });

  console.log(gameData);

  return <WorldMap />;
};

export default Game;

<div className="w-full mt-3 text-center">
  <button
    className="w-32 h-16 bg-black border-[10px] border-indigo-300/100 border-double"
    onClick={createGame}
  >
    <span className="text-[#1b83ff]">New</span>
    <span className="text-[#df001d]"> Game</span>
  </button>
</div>;
