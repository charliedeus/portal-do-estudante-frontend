import React, { useRef, useEffect } from 'react';
import { TimelineLite } from 'gsap';

import Header from '~/components/HeaderV2';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  let bodyRef = useRef(null);

  let tl = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    tl.from(bodyRef, { opacity: 0, duration: 0.5, x: 20 });
  }, [bodyRef]);

  return (
    <Wrapper className="container">
      <Header />
      <div ref={el => (bodyRef = el)}>{children}</div>
    </Wrapper>
  );
}
