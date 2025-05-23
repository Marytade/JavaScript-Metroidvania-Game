import { makePlayer } from "../entities/player.js";
import { setBackgroundColor,
   setCameraControls, 
   setCameraZones, 
   setMapColliders 
  } from "./roomUtils.js";

export function room1(k, roomData) {
  setBackgroundColor(k, "#82bfbe");

  k.camScale(4);
  k.camPos(170, 100);
  k.setGravity(1000);
  
  const roomLayers = roomData.layers;

  const map = k.add([k.pos(), k.sprite("room1")]);
  const colliders = [];
  const positions = [];
  const cameras = [];

  for (const layer of roomLayers) {
    if (layer.name === "cameras") {
      cameras.push(...layer.objects);
    }


    if (layer.name === "positions") {
      positions.push(...layer.objects);
      continue;
    }

    if (layer.name === "colliders") {
      colliders.push(...layer.objects);
    }
  }

  setMapColliders(k, map, colliders);
  setCameraZones(k, map, cameras);

  const player = map.add(makePlayer(k));
  setCameraControls(k, player, map, roomData);

  for (const position of positions) {
    if (position.name === "player") {
      player.setPosition(position.x, position.y);
      player.setControls();
      player.setEvents();
      player.enablePassthrough();
    }
  }

}
