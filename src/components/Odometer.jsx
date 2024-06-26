'use client'

import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';
import { useInView } from 'react-intersection-observer';
import 'odometer/themes/odometer-theme-default.css';

const OdometerComponent = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false, 
  });

  useEffect(() => {
    if (inView) {
      setDisplayValue(value);
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      <Odometer value={displayValue} format="d" theme="default" duration={2500}  />
    </div>
  );
};

export default OdometerComponent;
