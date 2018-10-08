import React from 'react';
import styled from 'styled-components';

const Root = styled.div([], {
  width: '100%',
  height: '100%'
});

const Title = styled.div([], {
  textAlign: 'left'
});

export default ({ children }) => {
  const [title, ...rest] = React.Children.toArray(children.props.children);

  return (
    <Root>
      <Title>{title}</Title>
      {rest}
    </Root>
  );
};
