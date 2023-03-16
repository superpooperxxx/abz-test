import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const requests = {
  get: (pathName: string) => axios.get(`${BASE_URL}${pathName}`),
};

export const getUsers = (query: string) => {
  return requests.get(`/users?${query}`);
};

export const getPositions = () => requests.get('/positions');
