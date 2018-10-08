import React from 'react';
import styled from 'styled-components';

const Label = styled.div([], {
  fontSize: '0.8em'
});

export default ({ children, label }) => (
  <div>
    {React.cloneElement(children, { alt: label })}

    <Label>{label}</Label>
  </div>
);
