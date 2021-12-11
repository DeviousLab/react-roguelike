import Entity from "./entity";

class Loot extends Entity {
  action(verb, world) {
    if (verb === "take") {
      world.entities[0].addItem(this);
      world.removeEntity(this);
    }
    if (verb === "drop") {
      console.log("You see a ", this);
    }
  }
}

export default Loot;