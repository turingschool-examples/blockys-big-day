const assert = require('chai').assert;
const Block = require('../lib/block');

describe('Block', function () {

  it('should be a function', function () {
    assert.isFunction(Block);
  });

  it('should instatiate our good friend, Blocky', function () {
    var blocky = new Block();
    assert.isObject(blocky);
  });

  it('should take take the first argument and set it as the "x" property of the instantiated object', function () {
    var blocky = new Block(15);
    assert.equal(blocky.x, 15);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    var blocky = new Block(15, 30);
    assert.equal(blocky.y, 30);
  });

  it('should take take the third argument and set it as the "width" property of the instantiated object', function () {
    var blocky = new Block(15, 30, 45);
    assert.equal(blocky.width, 45);
  });

  it('should take take the fourth argument and set it as the "height" property of the instantiated object', function () {
    var blocky = new Block(15, 30, 45, 100);
    assert.equal(blocky.height, 100);
  });

  describe('blocky', function () {

    describe('moveRight()', function () {

      it('should have a method called "moveRight()', function () {
        var blocky = new Block(15, 30);
        assert.isFunction(blocky.moveRight);
      });

      it('"moveRight()" should increment the "x" property by 1', function () {
        var blocky = new Block(15, 30);
        blocky.moveRight();
        assert.equal(blocky.x, 16);
      });

    });

    describe('moveRight()', function () {

      it('should have a method called "moveRight()', function () {
        var blocky = new Block(15, 30);
        assert.isFunction(blocky.moveRight);
      });

      it('"moveRight()" should increment the "x" property by 1', function () {
        var blocky = new Block(15, 30);
        blocky.moveRight();
        assert.equal(blocky.x, 16);
      });

    });

    describe('moveLeft()', function () {

      it('should have a method called "moveLeft()', function () {
        var blocky = new Block(15, 30);
        assert.isFunction(blocky.moveLeft);
      });

      it('"moveLeft()" should decrement the "x" property by 1', function () {
        var blocky = new Block(15, 30);
        blocky.moveLeft();
        assert.equal(blocky.x, 14);
      });

    });

    describe('moveDown()', function () {

      it('should have a method called "moveDown()', function () {
        var blocky = new Block(15, 30);
        assert.isFunction(blocky.moveDown);
      });

      it('"moveDown()" should increment the "y" property by 1', function () {
        var blocky = new Block(15, 30);
        blocky.moveDown();
        assert.equal(blocky.y, 31);
      });

    });

    describe('moveUp()', function () {

      it('should have a method called "moveUp()', function () {
        var blocky = new Block(15, 30);
        assert.isFunction(blocky.moveUp);
      });

      it('"moveUp()" should decrement the "y" property by 1', function () {
        var blocky = new Block(15, 30);
        blocky.moveUp();
        assert.equal(blocky.y, 29);
      });

    });

    describe('getFatter()', function () {

      it('should have a method called "getFatter()"', function () {
        var block = new Block();
        assert.isFunction(block.getFatter);
      });

      it('"getFatter()" should increment its width by 1', function () {
        var block = new Block(0, 0, 10, 10);
        block.getFatter();
        assert.equal(block.width, 11);
        assert.equal(block.height, 10);
      });

    });

    describe('getSkinnier()', function () {

      it('should have a method called "getSkinnier()"', function () {
        var block = new Block();
        assert.isFunction(block.getSkinnier);
      });

      it('"getSkinnier()" should decrement its width by 1', function () {
        var block = new Block(0, 0, 10, 10);
        block.getSkinnier();
        assert.equal(block.width, 9);
        assert.equal(block.height, 10);
      });

    });

    describe('getTaller()', function () {

      it('should have a method called "getTaller()"', function () {
        var block = new Block();
        assert.isFunction(block.getTaller);
      });

      it('"getTaller()" should increment its height by 1', function () {
        var block = new Block(0, 0, 10, 10);
        block.getTaller();
        assert.equal(block.height, 11);
        assert.equal(block.width, 10);
      });

    });

    describe('getShorter()', function () {

      it('should have a method called "getShorter()"', function () {
        var block = new Block();
        assert.isFunction(block.getShorter);
      });

      it('"getShorter()" should decrement its height by 1', function () {
        var block = new Block(0, 0, 10, 10);
        block.getShorter();
        assert.equal(block.height, 9);
        assert.equal(block.width, 10);
      });

    });

    describe('grow()', function () {

      it('should have a method called "grow()"', function () {
        var block = new Block();
        assert.isFunction(block.grow);
      });

      it('"grow()" should increment its both width and height by 1', function () {
        var block = new Block(0, 0, 10, 10);
        block.grow();
        assert.equal(block.width, 11);
        assert.equal(block.height, 11);
      });

    });

    describe('shrink()', function () {

      it('should have a method called "shrink()"', function () {
        var block = new Block();
        assert.isFunction(block.shrink);
      });

      it('"shrink()" should decrement both its width and height by 1', function () {
        var block = new Block(0, 0, 10, 10);
        block.shrink();
        assert.equal(block.width, 9);
        assert.equal(block.height, 9);
      });

    });

    describe('topLeft()', function () {

      it('should have a method called "topLeft()"', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isFunction(block.topLeft);
      });

      it('should return an object', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isObject(block.topLeft());
      });

      it('should return an object with an "x" property that is a number', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isNumber(block.topLeft().x);
      });

      it('should return an object with a "y" property that is a number', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isNumber(block.topLeft().y);
      });

      it('should return the x coordinate of the topLeft corner of the block', function () {
        var block = new Block(0, 10, 20, 30);
        assert.equal(block.topLeft().x, block.x);
      });

      it('should return the y coordinate of the topLeft corner of the block', function () {
        var block = new Block(0, 10, 20, 30);
        assert.equal(block.topLeft().y, block.y);
      });

    });

    describe('topRight()', function () {

      it('should have a method called "topRight()"', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isFunction(block.topRight);
      });

      it('should return an object', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isObject(block.topRight());
      });

      it('should return an object with an "x" property that is a number', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isNumber(block.topRight().x);
      });

      it('should return an object with a "y" property that is a number', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isNumber(block.topRight().y);
      });

      it('should return the x coordinate of the topRight corner of the block', function () {
        var block = new Block(0, 10, 20, 30);
        assert.equal(block.topRight().x, block.x + block.width);
      });

      it('should return the y coordinate of the topRight corner of the block', function () {
        var block = new Block(0, 10, 20, 30);
        assert.equal(block.topRight().y, block.y);
      });

    });

    describe('bottomLeft()', function () {

      it('should have a method called "bottomLeft()"', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isFunction(block.bottomLeft);
      });

      it('should return an object', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isObject(block.bottomLeft());
      });

      it('should return an object with an "x" property that is a number', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isNumber(block.bottomLeft().x);
      });

      it('should return an object with a "y" property that is a number', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isNumber(block.bottomLeft().y);
      });

      it('should return the x coordinate of the bottomLeft corner of the block', function () {
        var block = new Block(0, 10, 20, 30);
        assert.equal(block.bottomLeft().x, block.x);
      });

      it('should return the y coordinate of the bottomLeft corner of the block', function () {
        var block = new Block(0, 10, 20, 30);
        assert.equal(block.bottomLeft().y, block.y + block.height);
      });

    });

    describe('bottomRight()', function () {

      it('should have a method called "bottomRight()"', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isFunction(block.bottomRight);
      });

      it('should return an object', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isObject(block.bottomRight());
      });

      it('should return an object with an "x" property that is a number', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isNumber(block.bottomRight().x);
      });

      it('should return an object with a "y" property that is a number', function () {
        var block = new Block(0, 0, 10, 10);
        assert.isNumber(block.bottomRight().y);
      });

      it('should return the x coordinate of the bottomRight corner of the block', function () {
        var block = new Block(0, 10, 20, 30);
        assert.equal(block.bottomRight().x, block.x + block.width);
      });

      it('should return the y coordinate of the bottomRight corner of the block', function () {
        var block = new Block(0, 10, 20, 30);
        assert.equal(block.bottomRight().y, block.y + block.height);
      });

    });

  });

  describe('Collision detection', function () {

    it('should have a method called isCollidingWith()', function () {
      var block = new Block(0, 0, 10, 10);
      assert.isFunction(block.isCollidingWith);
    });

    it('should return true if it is colliding with the argument passed in', function () {
      var firstBlock = new Block(0, 0, 10, 10);
      var secondBlock = new Block(1, 1, 10, 10);

      var colliding = firstBlock.isCollidingWith(secondBlock)

      assert.isTrue(colliding);
    });

    it('should return false if it is not colliding with the argument passed in', function () {
      var firstBlock = new Block(0, 0, 10, 10);
      var secondBlock = new Block(1000, 1000, 10, 10);

      var colliding = firstBlock.isCollidingWith(secondBlock)

      assert.isFalse(colliding);
    });

  });

});
