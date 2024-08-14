import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SlowMo, Elastic } from 'gsap/all';

gsap.registerPlugin(SlowMo, Elastic);

const GooeyButton = ({ text, onClick }) => {
  const buttonRef = useRef(null);
  const circlesTopLeftRef = useRef([]);
  const circlesBottomRightRef = useRef([]);
  const effectButtonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    const btTl = gsap.timeline({ paused: true });

    tl.to(circlesTopLeftRef.current, {
      duration: 1.2,
      x: -25,
      y: -25,
      scaleY: 2,
      ease: SlowMo.ease.config(0.1, 0.7, false),
    })
      .to(circlesTopLeftRef.current[0], { duration: 0.1, scale: 0.2, x: '+=6', y: '-=2' })
      .to(circlesTopLeftRef.current[1], { duration: 0.1, scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1')
      .to(circlesTopLeftRef.current[2], { duration: 0.1, scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1')
      .to(circlesTopLeftRef.current[0], { duration: 1, scale: 0, x: '-=5', y: '-=15', opacity: 0 })
      .to(circlesTopLeftRef.current[1], { duration: 1, scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1')
      .to(circlesTopLeftRef.current[2], { duration: 1, scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

    tl2.set(circlesBottomRightRef.current, { x: 0, y: 0 })
      .to(circlesBottomRightRef.current, {
        duration: 1.1,
        x: 30,
        y: 30,
        ease: SlowMo.ease.config(0.1, 0.7, false),
      })
      .to(circlesBottomRightRef.current[0], { duration: 0.1, scale: 0.2, x: '-=6', y: '+=3' })
      .to(circlesBottomRightRef.current[1], { duration: 0.1, scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1')
      .to(circlesBottomRightRef.current[2], { duration: 0.1, scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2')
      .to(circlesBottomRightRef.current[0], { duration: 1, scale: 0, x: '+=5', y: '+=15', opacity: 0 })
      .to(circlesBottomRightRef.current[1], { duration: 1, scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1')
      .to(circlesBottomRightRef.current[2], { duration: 1, scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');

    btTl.add(tl);
    btTl.to(effectButtonRef.current, { duration: 0.8, scaleY: 1.1 }, 0.1);
    btTl.add(tl2, 0.2);
    btTl.to(effectButtonRef.current, {
      duration: 1.8,
      scale: 1,
      ease: Elastic.easeOut.config(1.2, 0.4),
    }, 1.2);

    btTl.timeScale(2.6);

    const handleMouseOver = () => {
      btTl.restart();
    };

    const buttonElement = buttonRef.current;
    buttonElement.addEventListener('mouseover', handleMouseOver);

    return () => {
      buttonElement.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="gooey-container">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <span className="button--bubble__container">
        <button ref={buttonRef} onClick={onClick} className="button button--bubble ">
          {text}
        </button>
        <span className="button--bubble__effect-container">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              ref={(el) => (circlesTopLeftRef.current[i] = el)}
              className="circle top-left"
            />
          ))}
          <span ref={effectButtonRef} className="button effect-button" />
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              ref={(el) => (circlesBottomRightRef.current[i] = el)}
              className="circle bottom-right"
            />
          ))}
        </span>
      </span>
    </div>
  );
};

export default GooeyButton;
