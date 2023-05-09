'use client'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode
}

const FadeUp = ({children}:Props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up"
    data-aos-once="true"
    >
      {children}
    </div>
  )
}

const FadeLeft = ({children}:Props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-left"
    data-aos-offset="300"
    data-aos-once="true"
    >
      {children}
    </div>
  )
}

const FadeRight = ({children}:Props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-once="true"
    >
      {children}
    </div>
  )
}

export { FadeUp, FadeLeft, FadeRight };