import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { gql } from '../__generated__/gql';

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

const useAnswers = (answerData: AnswersObject) => {
  const { data } = useSession();
  const [answers, setAnswers] = useState<AnswersObject>(answerData);
  const [game, setGame] = useState<string | null | undefined>(null);
  //   const { data: countryData } = useQuery(GET_COUNTRIES);

  const [createGame, { data: gameData, loading, error }] =
    useMutation(CREATE_GAME, {
      variables: {
        userId: data?.user?.id ?? '',
      },
    });

  const [saveGame, { data: updatedGame }] = useMutation(SAVE_GAME);

  const handleSaveGame = () => {
    const convertNumToBoolean: { [key: string]: boolean | null } = {
      '-1': false,
      '0': null,
      '1': true,
    };
    const formedAnswers = [];
    for (const country in answers) {
      const valueKey = answers[country as keyof typeof answers] + '';
      formedAnswers.push({
        countryName: country,
        value: convertNumToBoolean[valueKey],
      });
    }

    const gameId = game;

    saveGame({
      variables: { gameId: gameId, answers: formedAnswers },
    });
  };

  useEffect(() => {
    if (gameData && gameData.createGame) {
      const answersObj: AnswersObject = {};
      gameData.createGame.map(
        (
          ans: {
            value?: boolean | null | number;
            countryName?: string | null | number;
          } | null,
        ) => {
          if (ans?.countryName)
            answersObj[ans.countryName] = ans?.value;
          return answersObj;
        },
      );
      setAnswers(answersObj);

      setGame(gameData?.createGame[0]?.gameId);
    }
  }, [gameData]);

  return {
    answers,
    setAnswers,
    createGame,
    handleSaveGame,
    game,
  };
};

export default useAnswers;
