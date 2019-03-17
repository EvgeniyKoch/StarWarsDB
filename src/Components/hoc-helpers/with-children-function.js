import React from 'react';

const withChildrenFunction = (func) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {func}
      </Wrapped>
    )
  };
};

export default withChildrenFunction;
