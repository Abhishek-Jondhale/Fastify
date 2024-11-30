import { User } from '../interfaces/userInterface';


export const createUser = async (user: User) => {
  console.log('User data:', user);
  return {
    message: 'User data is valid',
    user,
  };
};
