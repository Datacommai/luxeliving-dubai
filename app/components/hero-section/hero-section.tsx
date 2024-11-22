'use client';
import { PropertySelection } from '../property-selection/property-selection';
import { IconButton } from '../buttons/icon-button';
import { useEffect, useRef, useState } from 'react';
import { openLink } from '@/lib/utils';

export const HeroSection = () => {
 const [isMobile, setIsMobile] = useState<boolean>(false);
 const [isPaused, setIsPaused] = useState<boolean>(false);
 const videoRef = useRef(null);

 useEffect(() => {
  if (videoRef.current) {
   const videoElement = videoRef.current as HTMLVideoElement;
   if (isPaused) {
    videoElement.pause();
   } else {
    videoElement.play();
   }
  }

  const handleResize = () => {
   setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener('resize', handleResize);

  handleResize();

  return () => window.removeEventListener('resize', handleResize);
 }, [isPaused]);

 const onPlayButtonClicked = () => {
  setIsPaused(!isPaused);
 };

 return (
  <section className="relative w-full">
   <video
    ref={videoRef}
    className="w-full"
    preload="metadata"
    autoPlay
    muted
    loop>
    <source src="/assets/videos/hero.mp4#t=0.001" type="video/mp4" />
    Your browser does not support the video tag.
   </video>
   <div className="absolute xs:top-0 xxs:top-0 lg:top-1/4 flex items-center justify-around w-full pointer-events-none lg:my-0 xs:my-8 xxs:my-4">
    <h1
     className="lg:text-7xl lg:mx-0 xxs:mx-10 xs:text-3xl
    text-center drop-shadow-sm text-white font-bold pointer-events-auto">
     All homes are for a lifetime. <br /> This one is once in a lifetime.
    </h1>
    <div className="lg:block lg:top-0 xxs:relative xs:relative xxs:bottom-0 xs:top-24">
     <IconButton
      icon={
       !isPaused
        ? '/assets/icons/play_circle_filled.svg'
        : '/assets/icons/pause-icon.svg'
      }
      description="play"
      width={isMobile ? 80 : 120}
      height={isMobile ? 80 : 120}
      onClick={onPlayButtonClicked}
     />
    </div>
    <section className="lg:flex lg:flex-col xs:grid xs:grid-cols-1 xxs:grid xxs:grid-cols-1 gap-3 items-center">
     <div className="bg-white w-1 h-20 lg:block xs:hidden xxs:hidden"></div>
     {!isMobile && (
      <>
       <IconButton
        icon="/assets/icons/fb-icon.svg"
        description="facebook"
        width={isMobile ? 40 : 50}
        height={isMobile ? 40 : 50}
        onClick={() => openLink('https://www.facebook.com/')}
       />
       <IconButton
        icon="/assets/icons/twitter-icon.svg"
        description="twitter"
        width={isMobile ? 50 : 60}
        height={isMobile ? 50 : 60}
        onClick={() => openLink('https://twitter.com/')}
       />
       <IconButton
        icon="/assets/icons/ig-icon.svg"
        description="isntagram"
        width={isMobile ? 50 : 60}
        height={isMobile ? 50 : 60}
        onClick={() => openLink('https://www.instagram.com/')}
       />
      </>
     )}
     <div className="bg-white w-1 h-20 lg:block xs:hidden xxs:hidden"></div>
    </section>
   </div>
   <div>
    <PropertySelection />
   </div>
  </section>
 );
};
