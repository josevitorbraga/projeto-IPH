import React, { useCallback, useEffect, useState } from 'react';

import { Container, Slider, Text } from './styles';

const ComponenteValores = () => {
  const [currentText, setCurrentText] = useState('Texto sobre missão');

  const [currentOrder, setCurrentOrder] = useState([
    { value: 'Missao', text: 'Texto sobre missão' },
    { value: 'Visao', text: 'Texto sobre visão' },
    { value: 'Valores', text: 'Texto sobre valores' },
  ]);

  //Function that recieves an object and adds it to first in currentOrder
  const addToOrder = useCallback(
    (obj, index) => {
      const newOrder = [...currentOrder];
      newOrder.splice(index, 1);
      newOrder.unshift(obj);
      setCurrentOrder(newOrder);
      setCurrentText(obj.text);
    },
    [currentOrder]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('effect hitted');
      const arr = [...currentOrder];
      const firstItem = arr.shift();
      setCurrentOrder([...arr, firstItem]);
      setCurrentText(arr[0].text);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentOrder]);

  return (
    <Container>
      <Text>{currentText}</Text>
      <Slider>
        {currentOrder.map((item, index) => (
          <div
            key={index}
            onClick={() => addToOrder(item, index)}
            className="box"
          >
            {item.value}
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ComponenteValores;
