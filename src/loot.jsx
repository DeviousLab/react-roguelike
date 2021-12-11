import Entity from "./entity";

class Loot extends Entity {
  action(verb, world) {
    if (verb === "take") {
      console.log("You take the ", this);
    }
    if (verb === "drop") {
      console.log("You see a ", this);
    }
  }
}

export default Loot;