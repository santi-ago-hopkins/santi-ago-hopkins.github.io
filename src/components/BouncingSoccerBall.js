import React, { useEffect, useRef, useState } from 'react';

const BouncingSoccerBall = () => {
  const sceneRef = useRef(null);
  const [matterLoaded, setMatterLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('matter-js').then((Matter) => {
        const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner } = Matter;

        const engine = Engine.create({
          gravity: { x: 0, y: 1 }
        });

        const render = Render.create({
          element: sceneRef.current,
          engine: engine,
          options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false,
            background: 'transparent'
          }
        });

        const ballSize = 40; // Increased size for better visibility
        const ball = Bodies.circle(window.innerWidth / 2, window.innerHeight / 4, ballSize, {
          restitution: 0.8,
          friction: 0.005,
          density: 0.001,
          render: {
            sprite: {
              texture: 'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Sport-PNG/Soccer_Ball_Transparent_PNG_Clipart.png?m=1629815589',
              xScale: ballSize / 256, // Adjust based on the actual image size
              yScale: ballSize / 256
            }
          }
        });

        // Make walls invisible
        const wallOptions = { 
          isStatic: true, 
          render: { 
            visible: false 
          } 
        };

        const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, wallOptions);
        const leftWall = Bodies.rectangle(0, window.innerHeight / 2, 60, window.innerHeight, wallOptions);
        const rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 60, window.innerHeight, wallOptions);
        const ceiling = Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 60, wallOptions);

        World.add(engine.world, [ball, ground, leftWall, rightWall, ceiling]);

        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: { visible: false }
          }
        });

        World.add(engine.world, mouseConstraint);

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        const handleResize = () => {
          render.canvas.width = window.innerWidth;
          render.canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        setMatterLoaded(true);

        return () => {
          Render.stop(render);
          World.clear(engine.world);
          Engine.clear(engine);
          render.canvas.remove();
          window.removeEventListener('resize', handleResize);
        };
      });
    }
  }, []);

  return (
    <div 
      ref={sceneRef} 
      style={{ 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden',
        visibility: matterLoaded ? 'visible' : 'hidden'
      }} 
    />
  );
};

export default BouncingSoccerBall;
