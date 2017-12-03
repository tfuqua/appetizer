// @flow
const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || 'http://localhost:8000' : '';

//Login
export const API_LEADERBOARD = `${baseURL}/api/leaderboard`;

export const API_VOTERS = `${baseURL}/api/voters`;
export const API_DISHES = `${baseURL}/api/dishes`;
