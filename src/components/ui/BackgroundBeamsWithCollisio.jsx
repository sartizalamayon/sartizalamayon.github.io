"use client";
import { cn } from "@/../lib/utils";
import { motion, AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className
}) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);
  const pathname = usePathname();
  const [mid, setMid] = useState(null);

  const isHomePage = pathname === "/";

  // Beams configuration
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   // Function to update state with the current window width
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   // Add event listener to listen for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // console.log(windowWidth / 2 + 140)

  const gap = 250;
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMid(window?.innerWidth / 2);
    }
  }, []);
  



  const beams = [
    {
      // Align with the 1st vertical line to the right
      id : 1,
      initialX: mid + (gap / 2) + (gap * 0),
      translateX: mid + (gap / 2) + (gap * 0),
      duration: 12,       // Increased duration for slower animation
      repeatDelay: 20,   // Longer repeat delay
      delay: 2,          // Starts almost immediately
    },
    {
      // Align with the 2nd vertical line to the right
      id : 2,
      initialX: mid + (gap / 2) + (gap * 1),
      translateX: mid + (gap / 2) + (gap * 1),
      duration: 15,      // Increased duration for a much slower transition
      repeatDelay: 24,   // Longer repeat delay
      delay: 3,          // Starts with a small delay
    },
    {
      // Align with the 3rd vertical line to the right
      id : 3,
      initialX: mid + (gap / 2) + (gap * 2),
      translateX: mid + (gap / 2) + (gap * 2),
      duration: 13,       // Slower for a smoother effect
      repeatDelay: 16,   // Longer repeat delay
      delay: 3,          // Starts with a noticeable delay
    },
    {
      // Align with the 4th vertical line to the right
      id : 4,
      initialX: mid + (gap / 2) + (gap * 3),
      translateX: mid + (gap / 2) + (gap * 3),
      duration: 14,      // Slower animation
      repeatDelay: 19,   // Balanced repeat delay
      delay: 3,          // Quick start with a very short delay
    },
    {
      // Align with the 1st vertical line to the left
      id : 5,
      initialX: mid - (gap / 2) - (gap * 0),
      translateX: mid - (gap / 2) - (gap * 0),
      duration: 12,      // Slower movement
      repeatDelay: 20,    // Moderate repeat
      delay: 2,          // Medium delay before starting
    },
    {
      // Align with the 2nd vertical line to the left
      id : 6,
      initialX: mid - (gap / 2) - (gap * 1),
      translateX: mid - (gap / 2) - (gap * 1),
      duration: 11,       // Slower duration
      repeatDelay: 15,   // Longer repeat delay
      delay: 3,          // Starts immediately
    },
    {
      // Align with the 3rd vertical line to the left
      id : 7,
      initialX: mid - (gap / 2) - (gap * 2),
      translateX: mid - (gap / 2) - (gap * 2),
      duration: 10,       // Slower for a consistent effect
      repeatDelay: 20,   // Longer repeat delay
      delay: 3,          // Small delay before starting
    },
    {
      // Align with the 4th vertical line to the left
      id : 8,
      initialX: mid - (gap / 2) - (gap * 3),
      translateX: mid - (gap / 2) - (gap * 3),
      duration: 16,      // Slower and smoother
      repeatDelay: 15,   // Longer repeat delay
      delay: 3,          // Starts late for visual variety
    },
  ];
  
  

  return (
    ((isHomePage && mid!==null)? (<div
      ref={parentRef}
      className={cn(
        " relative flex items-center w-full justify-center overflow-hidden",
        // h-screen if you want bigger
        className
      )}>
      {mid!==null && (beams.map((beam, idx) => {
        if(window.innerWidth < 778){
          // 3rd and 4th index
          if(beam.id === 1 || beam.id === 5){
            return (
              <CollisionMechanism
                key={idx}
                parentRef={parentRef}
                containerRef={containerRef}
                beamOptions={beam} />
            );
          }
        }
        else if(window.innerWidth > 778 && window.innerWidth < 1290){
          if(beam.id === 1 || beam.id === 5 || beam.id === 2 || beam.id === 6){
            return (
              <CollisionMechanism
                key={idx}
                parentRef={parentRef}
                containerRef={containerRef}
                beamOptions={beam} />
            );
          }
        }
        else if(window.innerWidth > 1350 && window.innerWidth < 1830){
          if(beam.id === 1 || beam.id === 5 || beam.id === 2 || beam.id === 6 || beam.id === 3 || beam.id === 7){
            return (
              <CollisionMechanism
                key={idx}
                parentRef={parentRef}
                containerRef={containerRef}
                beamOptions={beam} />
            );
          }
        }
        else{
          return (
            <CollisionMechanism
              key={idx}
              parentRef={parentRef}
              containerRef={containerRef}
              beamOptions={beam} />
          );
        }
        
      
}))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}></div>
    </div>):
    (
      <div className="min-h-screen">
        {children}
      </div>
    ))
  );
};

const CollisionMechanism = React.forwardRef(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef(null);
  const [collision, setCollision] = useState({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (<>
    <motion.div
      key={beamKey}
      ref={beamRef}
      animate="animate"
      initial={{
        translateY: beamOptions.initialY || "-200px",
        translateX: beamOptions.initialX || "0px",
        rotate: beamOptions.rotate || 0,
      }}
      variants={{
        animate: {
          translateY: beamOptions.translateY || "1800px",
          translateX: beamOptions.translateX || "0px",
          rotate: beamOptions.rotate || 0,
        },
      }}
      transition={{
        duration: beamOptions.duration || 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: beamOptions.delay || 0,
        repeatDelay: beamOptions.repeatDelay || 0,
      }}
      className={cn(
        "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-accent to-transparent opacity-30",
        beamOptions.className
      )} />
    <AnimatePresence>
      {collision.detected && collision.coordinates && (
        <Explosion
          key={`${collision.coordinates.x}-${collision.coordinates.y}`}
          className=""
          style={{
            left: `${collision.coordinates.x}px`,
            top: `${collision.coordinates.y}px`,
            transform: "translate(-50%, -50%)",
          }} />
      )}
    </AnimatePresence>
  </>);
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({
  ...props
}) => {
  const spans = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    (<div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent blur-md opacity-30"></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-accent to-emerald-600 opacity-30" />
      ))}
    </div>)
  );
};
