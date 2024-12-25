import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const AnimatedTitle = ({
  title,
  containerClass,
}: {
  title: string;
  containerClass: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animateWordRefs = useRef<HTMLSpanElement[]>([]);
  useGSAP(() => {
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: '100 bottom',
        end: 'center bottom',
        toggleActions: 'play none none reverse',
      },
    });
    titleAnimation.to(animateWordRefs.current, {
      opacity: 1,
      transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
      ease: 'power2.inOut',
      stagger: 0.02,
    });
  });

  return (
    <div className={`animated-title ${containerClass}`} ref={containerRef}>
      {title.split('<br />').map((line: string, index: number) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(' ').map((word: string, i: number) => (
            <span
              key={i}
              className="animated-word"
              ref={(el) => {
                if (el) animateWordRefs.current.push(el); // Store ref
              }}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
