import React from 'react';
import { Box, Container, Content } from './style';

const TopPage = ({ bgColor, BoxComponent, ContentComponent }) => {
  return (
    <Container backGround={bgColor}>
      <Box>{BoxComponent === undefined ? <></> : <BoxComponent />}</Box>
      <Content>
        {ContentComponent === undefined ? <></> : <ContentComponent />}
      </Content>
    </Container>
  );
};

export default TopPage;
