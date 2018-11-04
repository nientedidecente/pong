var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.setBaseURL("http://labs.phaser.io");

  this.load.image("sky", "assets/skies/nebula.jpg");
  this.load.image("ball", "assets/sprites/yellow_ball.png");
  this.load.image("white", "assets/particles/white.png");
  this.load.image("bar", "assets/sprites/bluebar.png");
}

var player;

var cursors;

function create() {
  //Background
  this.add.image(500, 300, "sky");

  //Ball
  var particles = this.add.particles("white");
  var emitter = particles.createEmitter({
    speed: 50,
    scale: { start: 0.2, end: 0 },
    blendMode: "ADD"
  });
  var ball = this.physics.add.image(500, 300, "ball");
  ball.setCircle(8);
  ball.setVelocity(300, 300);
  ball.setBounce(1);
  ball.setCollideWorldBounds(true);

  emitter.startFollow(ball);

  //Player
  player = this.physics.add.image(950, 300, "bar");

  player.setAngle(90);
  player.setSize(10, 100, [(center = true)]);

  player.setImmovable(true);
  player.setBounce(0);
  player.setCollideWorldBounds(true);

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(player, ball);
}

function update() {
  if (cursors.up.isDown) {
    player.setVelocityY(-400);
  } else if (cursors.down.isDown) {
    player.setVelocityY(400);
  } else {
    player.setVelocityY(0);
  }
}
