"use client";
import React, { useState, useEffect, useRef } from "react";

const SecondCardDesign = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const totalImagesRef = useRef(5); // Number of image duplicates

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;

    if (!image || !container) return;

    // Get image's natural height
    const imageHeight = image.naturalHeight;
    const containerHeight = container.clientHeight;

    // Total scroll height is multiple images stacked
    const totalScrollHeight = imageHeight * totalImagesRef.current;

    const scrollSpeed = 3; // Pixels per frame

    const animate = () => {
      setScrollProgress((prev) => {
        // If scrolled past total height, reset to 0 but keep scrolling
        const newPosition = (prev + scrollSpeed) % totalScrollHeight;
        return newPosition;
      });

      // Continue animation
      requestAnimationFrame(animate);
    };

    // Start the animation
    const animationFrame = requestAnimationFrame(animate);

    // Cleanup
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-[90%] flex flex-row gap-4 mx-auto">
      <div className="flex w-1/2 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col justify-center items-center text-center  h-full ">
          <h2>Build Your Future</h2>
          <p>Say your names and save future!</p>
        </div>
        <div
          ref={containerRef}
          className="w-full max-w-md  mx-auto  rounded-lg shadow-lg overflow-hidden h-[500px]"
        >
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute w-full"
              style={{
                transform: `translateY(-${scrollProgress}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              {/* Create multiple image instances for infinite scroll */}
              {[...Array(totalImagesRef.current)].map((_, index) => (
                <img
                  key={index}
                  ref={index === 0 ? imageRef : null}
                  src="/1.png"
                  alt={`Scrolling image ${index + 1}`}
                  className="w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h2>Build Your Future</h2>
          <p>Say your names and save future!</p>
        </div>
        <div
          ref={containerRef}
          className="w-full max-w-md  mx-auto  rounded-lg shadow-lg overflow-hidden h-[500px]"
        >
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute w-full"
              style={{
                transform: `translateY(-${scrollProgress}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              {/* Create multiple image instances for infinite scroll */}
              {[...Array(totalImagesRef.current)].map((_, index) => (
                <img
                  key={index}
                  ref={index === 0 ? imageRef : null}
                  src="/1.png"
                  alt={`Scrolling image ${index + 1}`}
                  className="w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCardDesign;
