const canvas = document.getElementById('blocky-game');
const context = canvas.getContext('2d');

const Block = require('./block');
const World = require('./world');

var world = new World(canvas.width, canvas.height);
world.addBlock(new Block(10, 10, 25, 25));

for (var i = 0; i < 5; i++) {
  var enemy = new Block(
    Math.floor(Math.random() * canvas.width),
    Math.floor(Math.random() * canvas.height),
    10,
    10
  );
  world.addEnemy(enemy);
}

function renderWorld(context, world) {
  context.clearRect(0, 0, world.width, world.height);

  world.blocks.forEach(function (block) {
    context.fillRect(block.x, block.y, block.width, block.height);
  });

  world.enemies.forEach(function (enemy) {
    context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  });
}

function tick(world) {
  world.tick();
  if (world.isBlockyColliding()) {
    alert('YOU LOSE.')
    world.blocks[0].x = 0;
  }
}

requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  tick(world);
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrowWasPressed(); }
});
