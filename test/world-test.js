const assert = require('chai').assert;
const World = require('../lib/world');

describe('World', function () {

  it('should be a function', function () {
    assert.isFunction(World);
  });

  it('should instantiate an object', function () {
    var world = new World();
    assert.isObject(world);
  });

  it('should take take the first argument and set it as the "width" property of the instantiated object', function () {
    var world = new World(50, 100);
    assert.equal(world.width, 50);
  });

  it('should take take the second argument and set it as the "height" property of the instantiated object', function () {
    var world = new World(50, 100);
    assert.equal(world.height, 100);
  });

  it('should have a "blocks" property, which starts out as an empty array', function () {
    var world = new World(100, 100);
    assert.isArray(world.blocks);
    assert.deepEqual(world.blocks, []);
  });

  it('should have a "enemies" property, which starts out as an empty array', function () {
    var world = new World(100, 100);
    assert.isArray(world.enemies);
    assert.deepEqual(world.enemies, []);
  });

});
