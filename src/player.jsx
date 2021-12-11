class Player {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  draw(ctx) {
    ctx.fillStyle = '#0f0';
    ctx.textBaseline = 'hanging'
    ctx.font = '20px Arial';
    ctx.fillText('@', this.x * this.size, this.y * this.size);
  }

  copyPlayer() {
    let newPlayer = new Player();
    Object.assign(newPlayer, this);
    return newPlayer;
  }
}

export default Player;