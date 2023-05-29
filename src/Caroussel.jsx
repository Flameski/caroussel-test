import React, { useState } from 'react';
import './index.css';

function Caroussel({ images }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (direction) => {
    let currSlide = activeSlide;
    if (direction === 'next') {
      debugger;
      if (currSlide < images.length - 1) {
        setActiveSlide((prevActSlide) => prevActSlide + 1);
      } else setActiveSlide(0);
    } else {
      if (currSlide === 0) {
        setActiveSlide(images.length - 1);
      } else {
        setActiveSlide((prevActSlide) => prevActSlide - 1);
      }
    }
  };

  // logic for mobile scrolling, i.e. swiping
  const minSwipeDistance = 50;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    e.preventDefault();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;
    if (isUpSwipe || isDownSwipe)
      if (isDownSwipe) {
        changeSlide('next');
      } else {
        changeSlide('prev');
      }
  };
  // end logic for swiping

  const scroll = (e) => {
    if (e.deltaY > 0) {
      changeSlide('next');
    } else {
      changeSlide('prev');
    }
  };

  return (
    <div
      className='main'
      onWheel={scroll}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images.map((image) => {
        const { id, src, alt } = image;
        let slideClass =
          activeSlide === id
            ? 'active-slide'
            : id < activeSlide
            ? 'prev-slide'
            : 'next-slide';
        return (
          <article key={id} className={slideClass}>
            <img src={src} alt={alt} />
          </article>
        );
      })}
    </div>
  );
}

export default Caroussel;
