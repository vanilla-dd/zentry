import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Button = ({
  title,
  leftIcon,
  id,
  rightIcon,
  containerClass,
}: {
  title: string;
  leftIcon?: React.ReactNode;
  id?: string;
  rightIcon?: React.ReactNode;
  containerClass?: string;
}) => {
  const divRef1 = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(
      divRef1.current,
      { y: '-100%', opacity: 0, duration: 0.15 },
      0
    ).fromTo(
      divRef2.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.15 },
      0
    );

    buttonRef.current?.addEventListener('mouseenter', () => {
      tl.play();
    });
    buttonRef.current?.addEventListener('mouseleave', () => {
      tl.reverse();
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-6 py-3 text-black ${containerClass}`}
    >
      {/* Default text (visible initially) */}
      <div ref={divRef1} className="flex gap-1">
        {leftIcon}
        <span className="relative inline-flex flex-col overflow-hidden font-general text-xs uppercase">
          {title}
        </span>
        {rightIcon}
      </div>

      {/* Hover text (hidden initially) */}
      <div
        ref={divRef2}
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 opacity-0"
      >
        {leftIcon}
        <span className="relative inline-flex flex-col overflow-hidden font-general text-xs uppercase">
          {title}
        </span>
        {rightIcon}
      </div>
    </button>
  );
};

export default Button;
