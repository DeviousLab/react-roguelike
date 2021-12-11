import React, { useEffect, useRef, useState } from "react";

import InputManger from "./input-manager";
import Player from "./player";
import World from "./world";

const ReactRogue = ({ width, height, tilesize }) => {
  const canvasRef = useRef();
  const [player, setPlayer] = React.useState(new Player(1, 2, tilesize));
  const [world, setWorld] = React.useState(new World(width, height, tilesize));
  let inputManger = new InputManger();
  const handleInput = (action, data) => {
    console.log(`handle input: ${action} ${JSON.stringify(data)}`);
    let newPlayer = new Player();
    Object.assign(newPlayer, player);
    newPlayer.move(data.x, data.y);
    setPlayer(newPlayer);
  }

  useEffect(() => {
    console.log("bind input");
    inputManger.bindKeys();
    inputManger.subscribe(handleInput);
    return () => {
      inputManger.unbindKeys();
      inputManger.unsubscribe(handleInput);
    }
  });

  useEffect(() => {
    console.log('Draw to canvas');
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, (width * tilesize), (height * tilesize));
    world.draw(ctx);
    player.draw(ctx);
  });

  return (
    <canvas ref={canvasRef} width={width * tilesize} height={height * tilesize} style={{ border: '1px solid black' }} />
  );
};

export default ReactRogue;