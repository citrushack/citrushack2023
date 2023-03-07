/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Carousel from 'framer-motion-carousel';

export default function CarouselSponsor() {
  return (
    <div style={{ width: 1386, height: 800 }}>
      <Carousel autoPlay={true} interval={3000} loop={true}>
        {['sponsor1', 'sponsor2', 'sponsor3'].map((item, i) => (
          <img
            draggable="false"
            src={`/assets/${item}.svg`}
            key={i}
            width="100%"
            alt=""
          />
        ))}
      </Carousel>
    </div>
  );
}
