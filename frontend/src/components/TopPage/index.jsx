import React from 'react';
import { Box, Container, Content, Background, Decoration } from './style';

const TopPage = ({
  bgColor,
  secondaryColor,
  BoxComponent,
  ContentComponent,
}) => {
  return (
    <Container backGround={bgColor}>
      {secondaryColor && (
        <Background primary={bgColor} secondary={secondaryColor}>
          <div className="left"></div>
          <div className="right"></div>
        </Background>
      )}
      {/* <Decoration /> */}

      <Box>{BoxComponent === undefined ? <></> : <BoxComponent />}</Box>
      <Content>
        {ContentComponent === undefined ? <></> : <ContentComponent />}
      </Content>
    </Container>
  );
};

export default TopPage;
