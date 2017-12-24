// @flow
import request from 'util/fetch';
import { displayMessage, HEADER_LOCATION } from '../Message/actions';
import { API_VOTERS, API_DISHES, API_IMAGE } from '../../api';

export const GET_VOTERS = 'GET_VOTERS';
export const GET_DISHES = 'GET_DISHES';

function receiveVoters(voters) {
  return {
    type: GET_VOTERS,
    voters
  };
}

function receiveDishes(dishes) {
  return {
    type: GET_DISHES,
    dishes
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

export function saveVoters(voters: Array<Object>) {
  return (dispatch: Function) => {
    return request(API_VOTERS, {
      method: 'POST',
      body: JSON.stringify(voters)
    }).catch(error => {
      Promise.resolve(error).then(err => {
        dispatch(displayMessage(err, HEADER_LOCATION));
      });
    });
  };
}

export function getDishes() {
  return (dispatch: Function) => {
    return request(API_DISHES)
      .then(dishes => dispatch(receiveDishes(dishes)))
      .catch(error => {
        Promise.resolve(error).then(err => {
          dispatch(displayMessage(err, HEADER_LOCATION));
        });
      });
  };
}

export function saveDishes(dishes: Array<Object>) {
  return (dispatch: Function) => {
    return request(API_DISHES, {
      method: 'POST',
      body: JSON.stringify(dishes)
    }).catch(error => {
      Promise.resolve(error).then(err => {
        dispatch(displayMessage(err, HEADER_LOCATION));
      });
    });
  };
}

export function uploadImage(id: number, file: File) {
  var formData = new FormData();
  formData.append('file', file);

  return (dispatch: Function) => {
    return request(`${API_IMAGE}/${id}`, {
      headers: {},
      method: 'POST',
      body: formData
    }).catch(error => {
      Promise.resolve(error).then(err => {
        dispatch(displayMessage(err, HEADER_LOCATION));
      });
    });
  };
}
