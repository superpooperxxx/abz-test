import axios from 'axios';
import { NewUser } from '../types/NewUser';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';
const TOKEN =
  'eyJpdiI6IitHVWR5VXdaZzBMUXo2cGE4eGJOREE9PSIsInZhbHVlIjoicDdCT3lSaXJibWw1ZkphVk1zRHlYZCs1bXhVUXZqZWRCRVlOT0d0K05zYjBvdFFsSkZMdlNjU2hycVI3YVlsTWNLMFR0VVNuZEVsUytwOUJSXC93cEN3PT0iLCJtYWMiOiI2ZTMzYWQzY2ExZTM1NjMzMzYzZjFhMmRiNmM2NjNhYmFkYjg2ODE3OTAxN2RkYzg1ZGE5NTAwNmQ0NjA4Y2Y4In0=';

const requests = {
  get: (pathName: string) => axios.get(`${BASE_URL}${pathName}`),
  post: (pathName: string, formData: NewUser) =>
    axios.post(`${BASE_URL}${pathName}`, formData, {
      headers: {
        Token: TOKEN,
      },
    }),
};

export const getUsers = (query: string) => {
  return requests.get(`/users?${query}`);
};

export const getPositions = () => requests.get('/positions');

export const getToken = () => requests.get('/token');

export const postNewUser = (newUser) =>
  axios.post(`${BASE_URL}/users`, newUser, {
    headers: {
      Token: TOKEN,
    },
  });
