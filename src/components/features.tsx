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
}: {
  src: string;
  title: React.ReactNode;
  description: string;
}) => {
  return (
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
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const cardsRef = useRef<HTMLDivElement[] | null[]>([]);

  useGSAP(() => {
    cardsRef.current.forEach((card) => {
      gsap.set(card, {
        opacity: 0,
        y: 100,
        rotateX: -40,
        transformPerspective: 1000,
        transformOrigin: 'center top',
      });

      // Create animation
      gsap.to(card, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      });
    });
  }, []);

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

        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-lg md:h-[65vh]"
        >
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="row-span-1 md:col-span-1 md:row-span-2"
          >
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </div>

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="row-span-1 ms-32 md:col-span-1 md:ms-0"
          >
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction."
            />
          </div>

          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="me-14 md:col-span-1 md:me-0"
          >
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </div>

          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="rounded-lg bg-violet-300"
          >
            <div className="flex size-full flex-col justify-between p-5">
              <h1 className="bento-title special-font max-h-64 text-black">
                Mor<b>e</b> co<b>m</b>ing so<b>o</b>n
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div
            ref={(el) => (cardsRef.current[5] = el)}
            className="overflow-hidden rounded-lg"
          >
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
