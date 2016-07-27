function Block(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

Block.prototype.moveRight = function () {
  this.x++;
  return this;
};

Block.prototype.moveLeft = function () {
  this.x--;
  return this;
};

Block.prototype.moveDown = function () {
  this.y++;
  return this;
};

Block.prototype.moveUp = function () {
  this.y--;
  return this;
};

Block.prototype.getFatter = function () {
  this.width++;
  return this;
};

Block.prototype.getSkinnier = function () {
  this.width--;
  return this;
};

Block.prototype.getTaller = function () {
  this.height++;
  return this;
};

Block.prototype.getShorter = function () {
  this.height--;
  return this;
};

Block.prototype.grow = function () {
  this.getFatter().getTaller();
  return this;
};

Block.prototype.shrink = function () {
  this.getSkinnier().getShorter();
  return this;
};

Block.prototype.topLeft = function () {
  return {
    x: this.x,
    y: this.y
  };
};

Block.prototype.topRight = function () {
  return {
    x: this.x + this.width,
    y: this.y
  };
};

Block.prototype.bottomLeft = function () {
  return {
    x: this.x,
    y: this.y + this.height
  };
};

Block.prototype.bottomRight = function () {
  return {
    x: this.x + this.width,
    y: this.y + this.height
  };
};

Block.prototype.isCollidingWith = function (block) {
  var isWithinTheWidth = block.x >= this.x && block.x <= this.bottomRight().x;
  var isWithinTheHeight = block.y >= this.y && block.y <= this.bottomRight().y;
  return isWithinTheWidth && isWithinTheHeight;
};


module.exports = Block;
