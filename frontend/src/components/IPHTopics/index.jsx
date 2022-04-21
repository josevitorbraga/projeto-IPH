import React, { useEffect, useState } from 'react';

import { Container, Text, View, Content } from './styles';

import missaoImg from '../../assets/topics-missao.png';

export const IPHTopics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const topics = [
    {
      id: 0,
      view: 'Missão',
      subject: 'Nossa Missão',
      title: 'Instrumentar Indivíduos',
      text: 'à descoberta de sua estrutura de pensamento e à renovação de seu potencial cognitivo.',
      image: missaoImg,
    },
    {
      id: 1,
      view: 'Visão',
      subject: 'Nossa Visão',
      title: 'Alterar visão',
      text: 'alterar texto do assunto visão',
    },
  ];

  useEffect(() => {
    const len = topics.length;
    const interval = setInterval(() => {
      if (currentIndex === len - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Container>
      {topics
        .filter((item, index) => index === currentIndex)
        .map(item => (
          <Content id={item.id} key={item.id}>
            <View bg={item.image}>
              <p>{item.view}</p>
            </View>
            <Text>
              <div className="wrapper">
                <p className="subject">{item.subject}</p>
                <h1 className="title">{item.title}</h1>
                <p className="text">{item.text}</p>
              </div>
            </Text>
          </Content>
        ))}
    </Container>
  );
};

export default IPHTopics;
