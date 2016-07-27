const assert = require('chai').assert;
const Block = require('../lib/block');
const World = require('../lib/world');

describe('Block in relation to the World', function () {

  it('should know about a world if it is passed in', function () {
    var world = new World(100, 100);
    var block = new Block(0, 0, 10, 10, world);
    assert.equal(block.world, world);
  });

  it('should know about a world if it is created using world.addBlock()', function () {
    var world = new World(100, 100);
    var block = new Block(0, 0, 10, 10);
    world.addBlock(block);
    assert.equal(block.world, world);
  });

});

describe('World in relation to blocks', function () {

  it('should have a method called addBlock()', function () {
    var world = new World(100, 100);
    assert.isFunction(world.addBlock);
  });

  it('should know about the blocks added to the world', function () {
    var world = new World(100, 100);
    var block = new Block(0, 0, 10, 10);

    world.addBlock(block);
    assert.include(world.blocks, block);
  });

  it('should have a method called addEnemy()', function () {
    var world = new World(100, 100);
    assert.isFunction(world.addEnemy);
  });

  it('should know about the enemies added to the world', function () {
    var world = new World(100, 100);
    var enemy = new Block(0, 0, 10, 10);

    world.addEnemy(enemy);
    assert.include(world.enemies, enemy);
  });

  it('should have a rightArrowWasPressed() method', function () {
    var world = new World(100, 100);
    assert.isFunction(world.rightArrowWasPressed);
  });

  it('should move all the blocks right when rightArrowWasPressed() is called', function () {
    var world = new World(100, 100);
    var block = new Block(0, 0, 10, 10);
    world.addBlock(block);

    world.rightArrowWasPressed();

    assert.equal(block.x, 1);
  });

  it('should not move all the enemies right when rightArrowWasPressed() is called', function () {
    var world = new World(100, 100);
    var enemy = new Block(0, 0, 10, 10);
    world.addEnemy(enemy);

    world.rightArrowWasPressed();

    assert.equal(enemy.x, 0);
  });

  it('should have a method called isBlockyColliding()', function () {
    var world = new World(100, 100);
    assert.isFunction(world.isBlockyColliding);
  });

  it('should return the enemy Blocky is colliding with', function () {
    var world = new World(100, 100);
    var blocky = new Block(0, 0, 10, 10);
    var enemy = new Block(1, 1, 10, 10);

    world.addBlock(blocky);
    world.addEnemy(enemy);
    assert.equal(world.isBlockyColliding(), enemy);
  });

  it('should return the undefined if Blocky is not colliding', function () {
    var world = new World(100, 100);
    var blocky = new Block(0, 0, 10, 10);
    var enemy = new Block(90, 90, 10, 10);

    world.addBlock(blocky);
    world.addEnemy(enemy);
    assert.isUndefined(world.isBlockyColliding());
  });

});
