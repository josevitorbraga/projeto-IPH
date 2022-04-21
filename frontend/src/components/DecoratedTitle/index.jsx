import React from 'react';

import { Container, Content } from './styles';

const DecoratedTitle = ({ pgName, color, children }) => {
  return (
    <Container>
      <div className='pageName'>{pgName}</div>
      <Content color={color}>
        <div className='firstLine'></div>
        {children}
        <div className='lastLine'></div>
      </Content>
    </Container>
  );
};

export default DecoratedTitle;
