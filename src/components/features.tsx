import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

gsap.registerPlugin(ScrollTrigger);

const BentoCard = ({
  src,
  title,
  description,
  className,
  children,
}: {
  src?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (cardRef.current) {
      gsap.set(cardRef.current, {
        opacity: 0,
        y: 100,
        rotateX: -40,
        transformPerspective: 1000,
        transformOrigin: 'center top',
      });

      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=20',
          end: 'top center',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      });
    }
  }, []);

  return (
    <div className={className} ref={cardRef}>
      <div className="relative size-full overflow-hidden rounded-lg">
        {src && (
          <video
            src={src}
            loop
            autoPlay
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        )}
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
              <p className="mt-3 max-w-64 text-sm opacity-90 transition-opacity duration-300 hover:opacity-100 md:text-base">
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe. Where a
            vibrant happy array of products converge into an interconnected
            overlay experience on your world.
          </p>
        </div>

        <div className="grid grid-rows-9 gap-4 md:grid-cols-2 md:grid-rows-[repeat(9,minmax(200px,1fr))]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            className="col-span-2 overflow-hidden rounded-lg border border-white/40 md:row-span-3"
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />

          <BentoCard
            src="/videos/feature-2.mp4"
            title={
              <>
                zig<b>m</b>a
              </>
            }
            className="col-span-2 row-span-4 overflow-hidden rounded-lg border border-white/40 md:col-span-1"
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
          />

          <BentoCard
            src="/videos/feature-3.mp4"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            className="col-span-2 row-span-2 ms-14 rounded-lg border border-white/40 md:col-span-1 md:ms-0"
            description="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction."
          />

          <BentoCard
            src="/videos/feature-4.mp4"
            title={
              <>
                az<b>u</b>l
              </>
            }
            className="col-span-2 row-span-2 me-20 overflow-hidden rounded-lg border border-white/40 md:col-span-1 md:me-0"
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
          />

          <BentoCard
            title={
              <div className="bento-title special-font text-black">
                Mor<b>e</b> co<b>m</b>ing so<b>o</b>n
              </div>
            }
            className="col-span-2 overflow-hidden rounded-lg bg-violet-300 p-5 md:col-span-1 md:row-span-2"
          >
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </BentoCard>

          <BentoCard
            src="/videos/feature-5.mp4"
            title=""
            className="col-span-1 row-span-2 hidden overflow-hidden rounded-lg md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
