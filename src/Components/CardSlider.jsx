import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardNews } from './CardNews';

export const CardSlider = ({ cards }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 350, // Менять настройки для экранов шириной 768px и меньше
        settings: {
          slidesToShow: 1.1, // Изменить количество видимых слайдов на мобильных экранах
        },
      },
      {
        breakpoint: 420, // Менять настройки для экранов шириной 768px и меньше
        settings: {
          slidesToShow: 1.3, // Изменить количество видимых слайдов на мобильных экранах
        },
      },
      {
        breakpoint: 499, // Менять настройки для экранов шириной 768px и меньше
        settings: {
          slidesToShow: 1.6, // Изменить количество видимых слайдов на мобильных экранах
        },
      },
      {
        breakpoint: 600, // Менять настройки для экранов шириной 768px и меньше
        settings: {
          slidesToShow: 2, // Изменить количество видимых слайдов на мобильных экранах
        },
      },
      {
        breakpoint: 718, // Менять настройки для экранов шириной 768px и меньше
        settings: {
          slidesToShow: 2.4, // Изменить количество видимых слайдов на мобильных экранах
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <CardNews card={card} key={card.newsId} />
      ))}
    </Slider>
  );
};
