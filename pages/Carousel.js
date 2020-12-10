import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.bouygues-es.com/sites/world/files/styles/image_background/public/2017-10/CORPORATE-ENVIRONNEMENT.jpg?itok=7WQAYci7',
   
    
    key: '1'
  },
  {
    src: 'https://wallpapercrafter.com/desktop/290285-industrial-security-logistic-work-clothes.jpg',
   
    key: '2'
  },
  {
    src: 'https://www.arabnet.me/ContentFiles/1871Image.jpg?w=732&mode=fit&scale=both',
    
    key: '3'
  },
  {
    src: 'https://constructech.com/wp-content/uploads/2018/11/News_Analysis_infra_11_18.jpg',
    
    key: '4'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
