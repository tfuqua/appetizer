// @flow
import request from 'util/fetch';
import { displayMessage, HEADER_LOCATION } from '../Message/actions';
import { API_VOTE, API_VOTERS, API_DISHES } from '../../api';

export const GET_VOTERS = 'GET_VOTERS';
export const GET_VOTER = 'GET_VOTER';

function receiveVoters(voters) {
  return {
    type: GET_VOTERS,
    voters
  };
}

export function receiveVoter(voter: Object) {
  return {
    type: GET_VOTER,
    voter
  };
}

export function getVoters() {
  return (dispatch: Function) => {
    return request(`${API_VOTERS}?voted=false`)
      .then(voters => dispatch(receiveVoters(voters)))
      .catch(error => {
        Promise.resolve(error).then(err => {
          dispatch(displayMessage(err, HEADER_LOCATION));
        });
      });
  };
}

export function getDishes() {
  return (dispatch: Function) => {
    return request(API_DISHES).catch(error => {
      Promise.resolve(error).then(err => {
        dispatch(displayMessage(err, HEADER_LOCATION));
      });
    });
  };
}

export function getVoterByID(id: number) {
  return (dispatch: Function) => {
    return request(`${API_VOTERS}/${id}`)
      .then(voter => dispatch(receiveVoter(voter)))
      .catch(error => {
        Promise.resolve(error).then(err => {
          dispatch(displayMessage(err, HEADER_LOCATION));
        });
      });
  };
}

export function vote(votes: Array<Object>) {
  return (dispatch: Function) => {
    return request(API_VOTE, {
      method: 'POST',
      body: JSON.stringify(votes)
    }).catch(error => {
      Promise.resolve(error).then(err => {
        dispatch(displayMessage(err, HEADER_LOCATION));
      });
    });
  };
}
