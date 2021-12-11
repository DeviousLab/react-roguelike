import React, { useEffect, useRef, useState } from "react";

import InputManger from "./input-manager";

const ReactRogue = ({ width, height, tilesize }) => {
  const canvasRef = useRef();
  const [player, setPlayer] = React.useState({
    x: 0,
    y: 0
  });
  let inputManger = new InputManger();
  const handleInput = (action, data) => {
    console.log(`handle input: ${action} ${JSON.stringify(data)}`);
    let newPlayer = { ...player };
    newPlayer.x += data.x * tilesize;
    newPlayer.y += data.y * tilesize;
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
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, 16,16)
  });

  return (
    <canvas ref={canvasRef} width={width * tilesize} height={height * tilesize} style={{ border: '1px solid black' }} />
  );
};

export default ReactRogue;