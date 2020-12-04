import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/img/logo/irada.jpg',
    
    key: '1'
  },
  {
    src: '/img/logo/irada1.jpg',
    
    key: '2'
  },
  {
    src: '/img/logo/irada2.jpg',
    
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
