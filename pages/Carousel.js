import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://lh3.googleusercontent.com/proxy/D3pcHSYuUo7dv_H-kzuTmynzf8-yBltF7cm4GEPXWyYhZd_BzQCCicpTFKcxPO8CoDP2K7zg-vyTcr6MuwKyVXpBCAcr_-3Ta4bTJxMC7CN_V_KC-C_4riVi8OO_d_HlY_PCsQZph_iseTOOJu8QShX83UUOfDmpn7VTITQxBKQdyIVWl1WMTEL3FqEmlsU4rg',
   
    
    key: '1'
  },
  // {
  //   src: 'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
   
  //   key: '2'
  // },
  // {
  //   src: 'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
    
  //   key: '3'
  // }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
