import { useEffect, useRef, useCallback } from 'react';
import Button from './button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ['Nexus', 'Valut', 'Prolouge', 'About', 'Contact'];
const SCROLL_THRESHOLD = 0;
const ANIMATION_DURATION = 0.2;

const AudioIndicator = ({
  isPlaying,
  onClick,
}: {
  isPlaying: boolean;
  onClick: () => void;
}) => {
  return (
    <button className="ml-10 flex items-center space-x-0.5" onClick={onClick}>
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className={`indicator-line ${isPlaying ? 'active' : ''}`}
          style={{ animationDelay: `${bar * 0.1}s` }}
        ></div>
      ))}
    </button>
  );
};

const NavItems = () => {
  return (
    <div className="hidden md:block">
      {navItems.map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
          {item}
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { y: currentScrollY } = useWindowScroll();
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const lastScrollYRef = useRef(0);
  const isNavVisibleRef = useRef(true);
  const isAudioPlayingRef = useRef(false);

  // Handle scroll visibility logic
  const updateNavVisibility = useCallback(() => {
    if (!navContainerRef.current) return;

    const shouldShow =
      currentScrollY === SCROLL_THRESHOLD ||
      currentScrollY < lastScrollYRef.current;

    if (shouldShow !== isNavVisibleRef.current) {
      isNavVisibleRef.current = shouldShow;

      gsap.to(navContainerRef.current, {
        y: shouldShow ? 0 : -100,
        opacity: shouldShow ? 1 : 0,
        duration: ANIMATION_DURATION,
      });

      if (currentScrollY > SCROLL_THRESHOLD) {
        navContainerRef.current.classList.add('floating-nav');
      } else {
        navContainerRef.current.classList.remove('floating-nav');
      }
    }

    lastScrollYRef.current = currentScrollY;
  }, [currentScrollY]);

  // Handle audio toggle
  const toggleAudio = useCallback(() => {
    if (!audioElementRef.current) return;

    isAudioPlayingRef.current = !isAudioPlayingRef.current;

    if (isAudioPlayingRef.current) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, []);

  // Set up scroll effect
  useEffect(() => {
    updateNavVisibility();
  }, [updateNavVisibility]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center gap-1 justify-center"
            />
          </div>

          <div className="flex h-full items-center">
            <NavItems />
            <AudioIndicator
              isPlaying={isAudioPlayingRef.current}
              onClick={toggleAudio}
            />
            <audio
              ref={audioElementRef}
              src="/audio/loop.mp3"
              className="hidden"
              loop
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
