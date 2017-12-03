// @flow
import request from 'util/fetch';
import { displayMessage, HEADER_LOCATION } from '../Message/actions';
import { API_VOTERS } from '../../api';

export const GET_VOTERS = 'GET_VOTERS';

function receiveVoters(voters) {
  return {
    type: GET_VOTERS,
    voters
  };
}

export function getVoters() {
  return (dispatch: Function) => {
    return request(API_VOTERS)
      .then(voters => dispatch(receiveVoters(voters)))
      .catch(error => {
        Promise.resolve(error).then(err => {
          dispatch(displayMessage(err, HEADER_LOCATION));
        });
      });
  };
}
