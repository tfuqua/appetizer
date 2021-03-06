// @flow
const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || 'http://localhost:8000' : '';

export const API_LEADERBOARD = `${baseURL}/api/leaderboard`;
export const API_VOTE = `${baseURL}/api/vote`;
export const API_VOTERS = `${baseURL}/api/voters`;
export const API_DISHES = `${baseURL}/api/dishes`;
export const API_IMAGE = `${baseURL}/api/image`;
