import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const requests = {
  get: (pathName: string) => axios.get(`${BASE_URL}${pathName}`),
};

export const getUsers = (query: string) => {
  return requests.get(`/users?${query}`);
};

export const getPositions = () => requests.get('/positions');

export const getToken = () => requests.get('/token');

export const postNewUser = (newUser: FormData, token: string) =>
  fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: newUser,
    headers: { Token: token },
  });
