import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Define the start and end matrix3d styles
    const startMatrix =
      '0.956512, 0.231301, 0, -0.0047772, -0.13237, 0.296795, 0, -0.0008992, 0, 0, 1, 0, -97.1099, -36.1549, 0, 1';
    const endMatrix =
      '0.958902, -0.107955, 0, 0.0022296, 0.124904, 0.671775, 0, -0.0008484, 0, 0, 1, 0, 42.268, -17.8806, 0, 1';

    // Apply GSAP animation with ScrollTrigger
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top bottom', // Adjust based on when you want the animation to start
        end: 'top center', // Adjust based on when you want the animation to end
        scrub: true,
      },

      css: {
        custom: `matrix3d(${endMatrix})`,
      },
      ease: 'none',
    });

    // Set the initial matrix
    gsap.set(textRef.current, {
      matrix: `matrix3d(${startMatrix})`,
    });
  }, []);

  return (
    <p
      ref={textRef}
      className="special-font hero-heading text-center !text-[calc(30vw+1rem)]"
    >
      Zentr<b>y</b>
    </p>
  );
};

export default Footer;
