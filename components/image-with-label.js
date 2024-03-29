import React from 'react';
import styled from 'styled-components';

const Label = styled.div([], {
  fontSize: '0.8em'
});

export default ({ children, label }) => (
  <React.Fragment>
    {React.cloneElement(children, { alt: children.label || label })}

    <Label>{label}</Label>
  </React.Fragment>
);
