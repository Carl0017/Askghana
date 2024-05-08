import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Numbers.scss';

function NumberCounter({ end, duration }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(countRef.current);
          }
        });
      },
      {
        threshold: 0.5, // When 50% of the element is visible
      }
    );

    observer.observe(countRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const stepTime = Math.abs(Math.floor(duration / (end - count)));
      const timer = setInterval(() => {
        if (count < end) {
          setCount((prevCount) => prevCount + 1);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, count, end, duration]);

  return (
    <div className="number-counter" ref={countRef}>
      <span>{count}</span>
    </div>
  );
}

export default NumberCounter;
