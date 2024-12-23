import { useRef } from 'react';
import AnimatedTitle from './animated-title';
import Button from './button';

const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  return (
    <div id="story" className="min-h-dvh w-full bg-black text-blue-50">
      <div className="flex size-full flex-col items-center p-24 py-10">
        <p className="font-general text-sm uppercase md:text-xs">
          The multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br /> a hidden real<b>m<b/>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              oppurtunities.
            </p>
            <Button
              id="realm-button"
              title="Discover Prolouge"
              containerClass="mt-5"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
