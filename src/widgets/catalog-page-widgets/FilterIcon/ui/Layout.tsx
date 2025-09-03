import { useRef } from 'react';
import { gsap } from 'gsap';

export const UiFilterIcon = () => {
  const iconRef = useRef<SVGSVGElement>(null);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);
  const line3Ref = useRef<SVGPathElement>(null);

  const handleMouseEnter = () => {
    // Аницмация линий
    gsap.to(line1Ref.current, { y: 6, duration: 0.3, ease: 'power2.out' });
    gsap.to(line2Ref.current, { y: -4, duration: 0.3, ease: 'power2.out' });
    gsap.to(line3Ref.current, { y: -6, duration: 0.3, ease: 'power2.out' });

    gsap.to(iconRef.current, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    gsap.to([line1Ref.current, line2Ref.current, line3Ref.current], {
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(iconRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <svg
      ref={iconRef}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Вертикальные линии */}
      <path
        d="M12 11V21.875"
        stroke="black"
        strokeWidth="2.5"
        strokeOpacity="1"
      />
      <path
        d="M18.75 3.125V21.875"
        stroke="black"
        strokeWidth="2.5"
        strokeOpacity="1"
      />
      <path
        d="M5.25 3.125V21.875"
        stroke="black"
        strokeWidth="2.5"
        strokeOpacity="1"
      />
      <path
        d="M12 3.125V11"
        stroke="black"
        strokeWidth="2.5"
        strokeOpacity="1"
      />

      {/* Горизонтальные линии */}
      <path
        ref={line1Ref}
        d="M9.75 7.25H14.25"
        stroke="black"
        strokeWidth="2.5"
        strokeOpacity="1"
      />
      <path
        ref={line2Ref}
        d="M3 11.75H7.5"
        stroke="black"
        strokeWidth="2.5"
        strokeOpacity="1"
      />
      <path
        ref={line3Ref}
        d="M16.5 14.75H21"
        stroke="black"
        strokeWidth="2.5"
        strokeOpacity="1"
      />
    </svg>
  );
};
