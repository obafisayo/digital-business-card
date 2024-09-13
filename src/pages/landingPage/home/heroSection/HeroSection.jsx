import React from 'react';
import { Button } from 'antd';
// import Vid from "../../../../assets/video/whitevid.mp4"
import Vid from "../../../../assets/video/herovid.mp4"

const HeroSection = () => {
  return (
    <section>
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={Vid} // Replace with your video URL
                autoPlay
                loop
                muted
            />
            <div className="container relative z-10 h-full w-full bg-black/20">
                <div className='flex flex-col items-start justify-center h-full w-1/2 text-white'>
                    <h3 className="text-shadow text-2xl font-semibold mb-1">The Best</h3>
                    <h1 className="text-shadow text-5xl font-bold mb-4">
                        Social Business Card Media
                    </h1>
                    <p className="text-lg text-shadow-sm mb-8">BizIn Brand and Identity enables individuals,
                        small businesses, and enterprise companies to leverage digital business cards,
                        email signatures, and virtual backgrounds to present their brand 
                        consistently and generate and capture leads to grow their business.
                    </p>
                    <div className="flex space-x-4 justify-center items-center">
                        <Button size='large' type="primary">Get Started</Button>
                        <Button size='large' type="default">Contact Sales</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
