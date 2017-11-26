// @flow
import React from 'react';
import glamorous from 'glamorous';
import { CircularProgress } from 'material-ui/Progress';

export default function Loader(props: Object) {
  return (
    <LoaderWrapper {...props}>
      <CircularProgress size={80} />
    </LoaderWrapper>
  );
}

export function PageLoader() {
  return (
    <LoaderWrapper>
      <CircularProgress size={80} />
    </LoaderWrapper>
  );
}

type Props = {
  isLoading: boolean,
  error: Error | null,
  pastDelay: boolean
};
export const LoadingComponent = ({ isLoading, error, pastDelay }: Props) => {
  if (isLoading) {
    return pastDelay ? <PageLoader /> : null;
  } else if (error) {
    console.log(error);
    return <div>Error! Component failed to load</div>;
  } else {
    return null;
  }
};

const LoaderWrapper = glamorous.div(
  {
    top: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    zIndex: -1
  },
  ({ inline }) => ({
    position: inline ? 'static' : 'absolute'
  })
);
