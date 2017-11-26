// @flow
import fetch from 'isomorphic-fetch';

/**
 * Requests a URL, returning a promise
 */
export default function request(url: string, options?: Object) {
  if (typeof options === 'undefined') {
    options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
  } else {
    options.headers = {
      ...options.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  }

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  });
}
