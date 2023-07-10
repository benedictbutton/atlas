import { useState, useEffect, useMemo } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { gql } from '../pages/__generated__/gql';
import { countries } from '../data/countries';

// const GET_COUNTRIES = gql`
//   query Countries {
//     countries {
//       id
//       name
//     }
//   }
// `;

const CREATE_GAME = gql(`
  mutation CreateGame($userId: String!) {
    createGame(userId: $userId) {
      id
      value
      countryName
      gameId
    }
  }
`);

const SAVE_GAME = gql(`
  mutation SaveGame($gameId: String, $answers: [SaveAnswerInput]) {
    saveGame(gameId: $gameId, answers: $answers) {
      id
    }
  }
`);

const useAnswers = () => {
  const { data } = useSession();
  const [answers, setAnswers] = useState(countries);
  const [game, setGame] = useState(null);
  //   const { data: countryData } = useQuery(GET_COUNTRIES);

  const [createGame, { data: gameData, loading, error }] =
    useMutation(CREATE_GAME, {
      variables: {
        userId: data?.user?.id,
      },
    });

  const [saveGame, { data: updatedGame }] = useMutation(SAVE_GAME);

  const handleSaveGame = () => {
    const formedAnswers = [];
    for (const country in answers) {
      formedAnswers.push({
        countryName: country,
        value: answers[country],
      });
    }

    const gameId = game?.id;

    saveGame({
      variables: { gameId: gameId, answers: formedAnswers },
    });
  };

  useEffect(() => {
    if (gameData) {
      setAnswers(() => {
        const countriesObj = {};
        gameData.createGame.map((ans) => {
          countriesObj[ans.countryName] = ans.value;
          return countriesObj;
        });
        return countriesObj;
      });

      setGame(gameData.createGame[0].gameId);
    }
  }, [gameData]);

  return { answers, setAnswers, createGame, handleSaveGame, game };
};

export default useAnswers;
