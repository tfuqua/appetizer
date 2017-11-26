// @flow
//MESSAGE LOCATIONS
export const LOGIN_LOCATION = 'LOGIN_LOCATION';
export const TOAST_RIGHT = 'TOAST_RIGHT';
export const TOAST_BOTTOM = 'TOAST_BOTTOM';
export const HEADER_LOCATION = 'HEADER_LOCATION';
export const DIALOG_LOCATION = 'DIALOG_LOCATION';
export const FORM_LOCATION = 'FORM_LOCATION';

export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export function showMessage(message: { type: string, message: string, details: Object }, container: string) {
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

export function displayMessage(message: { type: string, message: string, details: Object }, container: string) {
  return (dispatch: Function) => {
    dispatch(showMessage(message, container));
  };
}
