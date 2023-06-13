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
  mutation createGame($userId: String!, $countries: [String]) {
    createGame(userId: $userId, countries: $countries) {
      id
      answers
    }
  }
`;

const New = () => {
  const { data } = useSession();
  const { data: countryData } = useQuery(GET_COUNTRIES);
  //   const [createGame, { data: gameData, loading, error }] =
  //     useMutation(CREATE_GAME, {
  //       variables: {
  //         userId: data.user.id,
  //         countries: countryData?.countries,
  //       },
  //     });

  console.log('countryData: ', countryData);
  //   console.log('gameData: ', gameData);
  console.log('data: ', data);
  console.log('typeOf: ', typeof data.user.id);

  return <button className="w-24 h-24 bg-indigo-300">TEST</button>;
};

export default New;

// onClick={createGame}
// const [addHistory] = useMutation(ADD_HISTORY, {
//   refetchQueries: [{ query: GET_HISTORY }],
// });

// const ADD_HISTORY = gql`
//   mutation AddHistory($text: String!) {
//     addHistory(text: $text) {
//       text
//     }
//   }
// `;
