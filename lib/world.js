function World(width, height) {
  this.width = width;
  this.height = height;
  this.blocks = [];
  this.enemies = [];
}

World.prototype.addBlock = function (block) {
  block.world = this;
  this.blocks.push(block);
};

World.prototype.addEnemy = function (enemy) {
  enemy.world = this;
  this.enemies.push(enemy);
};

World.prototype.rightArrowWasPressed = function () {
  this.blocks.forEach(function (block) {
    block.moveRight();
  });
};

World.prototype.isBlockyColliding = function () {
  var blocky = this.blocks[0];
  return this.enemies.find(function (enemy) {
    return blocky.isCollidingWith(enemy);
  });
};

World.prototype.tick = function () {
  this.enemies.forEach(function (enemy) {
    var direction = Math.ceil(Math.random() * 4);
    if (direction === 1) { enemy.moveUp(); }
    if (direction === 2) { enemy.moveDown(); }
    if (direction === 3) { enemy.moveLeft(); }
    if (direction === 4) { enemy.moveRight(); }
  })
}

module.exports = World;
