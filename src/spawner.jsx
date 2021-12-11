import Loot from './loot.jsx';

const lootTable = [
  {
    name: 'Health Potion',
    type: 'potion',
    color: '#ff0000',
    ascii: '%',
    offset: { x: 6, y: 3 }
  },
  {
    name: 'Mana Potion',
    type: 'potion',
    color: '#0000ff',
    ascii: '%',
    offset: { x: 6, y: 3 }
  },
  {
    name: 'Long Sword',
    type: 'weapon',
    color: '#0f3000',
    ascii: '/',
    offset: { x: 6, y: 3 }
  },
  {
    name: 'Gold Coin',
    type: 'coin',
    color: '#ffd700',
    ascii: '$',
    offset: { x: 3, y: 3 }
  },
  {
    name: 'Light Armour',
    type: 'armour',
    color: '#f0f0f0',
    ascii: '#',
    offset: { x: 4, y: 3 }
  }
];

class Spawner {
  constructor(world) {
    this.world = world;
  }
  spawn(spawnCount, createEntity) {
    for (let i = 0; i < spawnCount; i++) {
    let entity = createEntity();
    this.world.addEntity(entity);
    this.world.moveToSpace(entity);
    }
  }

  spawnLoot(spawnCount) {
    this.spawn(spawnCount, () => {
      return new Loot(randNum(this.world.width), randNum(this.world.height), this.world.tilesize, lootTable[randNum(lootTable.length)]);
    });
  }

}

function randNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;