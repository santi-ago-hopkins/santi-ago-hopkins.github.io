import React, { useEffect, useRef, useState } from 'react';
import ballImage from '../images/image.png'; // Correctly import the image

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

        const ballSize = 40; // Size of each ball
        const balls = []; // Array to hold multiple balls

        // Create multiple soccer balls
        for (let i = 0; i < 10; i++) {
          const xPosition = Math.random() * (window.innerWidth - ballSize * 2) + ballSize;
          const yPosition = Math.random() * (window.innerHeight - ballSize * 2) + ballSize;

          const ball = Bodies.circle(xPosition, yPosition, ballSize, {
            restitution: 0.8,
            friction: 0.005,
            density: 0.001,
            render: {
              sprite: {
                texture: ballImage,
                xScale: ballSize / 256,
                yScale: ballSize / 256
              }
            }
          });

          balls.push(ball); // Add the ball to the array
        }

        // Make walls invisible
        const wallOptions = { 
          isStatic: true, 
          render: { 
            visible: false 
          } 
        };

        const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 30, window.innerWidth, 60, wallOptions);
        const leftWall = Bodies.rectangle(0, window.innerHeight / 2, 60, window.innerHeight, wallOptions);
        const rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 60, window.innerHeight, wallOptions);
        const ceiling = Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 60, wallOptions);

        World.add(engine.world, [...balls, ground, leftWall, rightWall, ceiling]); // Add all balls and walls to the world

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

          // Update positions of static bodies on resize
          Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight - 30 });
          Matter.Body.setPosition(leftWall, { x: 0 + 30 , y: window.innerHeight / 2 });
          Matter.Body.setPosition(rightWall, { x: window.innerWidth - 30 , y: window.innerHeight / 2 });
          Matter.Body.setPosition(ceiling, { x: window.innerWidth / 2 , y: 30 });
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
