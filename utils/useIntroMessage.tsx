import { useState, useEffect, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { gql, useQuery, useMutation } from '@apollo/client';

const UPDATE_USER = gql`
  mutation UpdateUserIntroMessage($inputs: UserInput) {
    updateUserIntroMessage(inputs: $inputs) {
      id
      introMessage
    }
  }
`;

const useIntroMessage = () => {
  const { data: userData, update } = useSession();
  const [updateUser, { data, loading, error }] = useMutation(
    UPDATE_USER,
    {
      variables: {
        inputs: {
          id: userData.user.id,
          introMessage: !userData.user.introMessage,
        },
      },
      onCompleted: (data) =>
        update({
          introMessage: data?.updateUserIntroMessage?.introMessage,
        }),
    },
  );

  return [userData?.user.introMessage, updateUser];
};

export default useIntroMessage;
