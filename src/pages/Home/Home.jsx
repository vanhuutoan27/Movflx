import React from 'react';

import Hero from './Hero/Hero';
import Upcoming from './Upcoming/Upcoming';
import Service from './Service/Service';
import Top from './Top/Top';
import Live from './Live/Live';
import TV from './TV/TV';
import News from './News/News';

function Home() {
  return (
    <>
      <Hero />
      <Upcoming />
      <Service />
      <Top />
      <Live />
      <TV />
      <News />
    </>
  );
}

export default Home;
