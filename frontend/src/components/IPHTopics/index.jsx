import React, { useEffect, useState } from 'react';

import { Container, Text, View, Content } from './styles';

import missaoImg from '../../assets/topics-missao.png';
import missaoIco from '../../assets/target.svg';

import visaoIco from '../../assets/bulb.svg';
import valoresIco from '../../assets/handshake.svg';

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
      icon: missaoIco,
    },
    {
      id: 1,
      view: 'Visão',
      subject: 'Nossa Visão',
      title: 'Alterar visão',
      text: 'alterar texto do assunto visão',
      image: missaoImg,
      icon: visaoIco,
    },
    {
      id: 2,
      view: 'Valores',
      subject: 'Nossos Valores',
      title: 'Alterar valores',
      text: 'alterar texto do assunto valores',
      image: missaoImg,
      icon: valoresIco,
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
  }, [currentIndex, topics.length]);

  return (
    <Container>
      {topics
        .filter((item, index) => index === currentIndex)
        .map(item => (
          <Content id={'view' + item.id} key={item.id}>
            <View control={currentIndex} bg={item.image}>
              <div className="current-text">
                <img src={item.icon} alt="Target" />
                {item.view}
              </div>
              <div className="controller">
                <div
                  id="controller-0"
                  onClick={() => setCurrentIndex(0)}
                  className="topic-select"
                ></div>
                <div
                  id="controller-1"
                  onClick={() => setCurrentIndex(1)}
                  className="topic-select"
                ></div>
                <div
                  id="controller-2"
                  onClick={() => setCurrentIndex(2)}
                  className="topic-select"
                ></div>
              </div>
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
