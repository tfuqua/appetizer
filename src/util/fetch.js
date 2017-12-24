// @flow
import fetch from 'isomorphic-fetch';

/**
 * Requests a URL, returning a promise
 */
export default function request(url: string, options?: Object) {
  if (options) {
    if (typeof options.headers === 'undefined') {
      options = {
        ...options,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };
    } else {
      console.log(options);
    }
  } else {
    options = {};
  }

  console.log(options);

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  });
}
