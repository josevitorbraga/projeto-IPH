import React from 'react';
import TopPage from '../../components/TopPage';
import HomeBoxComponent from '../../components/HomeBoxComponent';

const Home = () => {
  return (
    <>
      <TopPage bgColor='#FACD4A' BoxComponent={HomeBoxComponent} />
    </>
  );
};

export default Home;
