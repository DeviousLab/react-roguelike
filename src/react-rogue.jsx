import React, { useEffect, useRef, useState } from "react";

import InputManger from "./input-manager";
import World from "./world";

const ReactRogue = ({ width, height, tilesize }) => {
  const canvasRef = useRef();
  // const [player, setPlayer] = React.useState(new Player(1, 2, tilesize));
  const [world, setWorld] = React.useState(new World(width, height, tilesize));
  let inputManger = new InputManger();
  const handleInput = (action, data) => {
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.movePlayer(data.x, data.y);
    setWorld(newWorld);
  }

  useEffect(() => {
    inputManger.bindKeys();
    inputManger.subscribe(handleInput);
    return () => {
      inputManger.unbindKeys();
      inputManger.unsubscribe(handleInput);
    }
  });

  useEffect(() => {
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.createCellularMap();
    newWorld.moveToSpace(world.entities[0]);
    setWorld(newWorld);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Draw to canvas');
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, (width * tilesize), (height * tilesize));
    world.draw(ctx);
  });

  return (
    <canvas ref={canvasRef} width={width * tilesize} height={height * tilesize} style={{ border: '1px solid black' }} />
  );
};

export default ReactRogue;