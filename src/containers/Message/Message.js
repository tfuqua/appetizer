// @flow
import React from 'react';
import WarningIcon from 'material-ui-icons/Warning';
import glamorous from 'glamorous';

type Props = {
  message: { type: string, message: string, details: Object },
  close?: boolean,
  hideMessage: Function,
  className?: string
};

function Message(props: Props) {
  let type = props.message.type || 'ERROR';

  return (
    <StyledMessage type={type}>
      {props.close ? (
        <Close className="close" onClick={() => props.hideMessage()} type="button">
          <span aria-hidden="true">×</span>
        </Close>
      ) : null}

      <MessageText type={type}>
        {type === 'ERROR' ? <WarningIcon /> : null}

        <div>
          {props.message.details && Object.keys(props.message.details).length > 0
            ? Object.keys(props.message.details).map((k, i) => <div key={i}>{props.message.details[k]}</div>)
            : props.message.message}
        </div>
      </MessageText>
    </StyledMessage>
  );
}
export default Message;

const StyledMessage = glamorous.div(
  {
    margin: '0 auto',
    padding: '15px 20px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px'
  },
  ({ type }) =>
    type === 'ERROR'
      ? {
          color: '#d60100',
          backgroundColor: '#fbe9e7',
          '& .close': { color: '#d60100' }
        }
      : {
          //SUCCESS
          color: '#fff',
          backgroundColor: '#4caf50',
          '& .close': { color: '#fff' }
        }
);

const Close = glamorous.button({
  float: 'right',
  fontSize: '21px',
  lineHeight: 1,
  fontWeight: 400,
  padding: 0,
  cursor: 'pointer',
  background: 'transparent',
  border: 0,
  appearance: 'none'
});

const MessageText = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  '& > div': {
    padding: '8px'
  },
  '& svg': {
    color: '#FF504D'
  }
});
