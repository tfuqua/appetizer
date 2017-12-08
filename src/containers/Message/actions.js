// @flow
//MESSAGE LOCATIONS
export const TOAST_RIGHT = 'TOAST_RIGHT';
export const HEADER_LOCATION = 'HEADER_LOCATION';

export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export function showMessage(message: string, container: string) {
  return {
    type: SHOW_MESSAGE,
    message,
    container
  };
}

export function hideMessage() {
  return {
    type: HIDE_MESSAGE
  };
}

export function displayMessage(message: string, container: string) {
  return (dispatch: Function) => {
    dispatch(showMessage(message, container));
  };
}
