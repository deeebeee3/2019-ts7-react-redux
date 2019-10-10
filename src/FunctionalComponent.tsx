import React from 'react';

interface AppProps {
  color?: string
}

const FunctionalComponent = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>
};

export default FunctionalComponent;