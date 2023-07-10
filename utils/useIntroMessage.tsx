import { useSession } from 'next-auth/react';
import { useMutation } from '@apollo/client';
import { gql } from '../pages/__generated__/gql';

const UPDATE_USER = gql(`
  mutation UpdateUserIntroMessage($inputs: UserInput) {
    updateUserIntroMessage(inputs: $inputs) {
      id
      introMessage
    }
  }
`);

const useIntroMessage = () => {
  const { data: userData, update } = useSession();
  const [updateUser] = useMutation(UPDATE_USER, {
    variables: {
      inputs: {
        id: userData?.user?.id,
        introMessage: !userData?.user?.introMessage,
      },
    },
    onCompleted: (data) =>
      update({
        introMessage: data?.updateUserIntroMessage?.introMessage,
      }),
  });

  return [userData?.user?.introMessage, updateUser];
};

export default useIntroMessage;
