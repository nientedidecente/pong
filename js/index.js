var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  physics: {
    default: "arcade"
  },
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.setBaseURL("http://labs.phaser.io");

  this.load.image("sky", "assets/skies/nebula.jpg");
  this.load.image("ball", "assets/sprites/yellow_ball.png");
  this.load.image("white", "assets/particles/white.png");
}

function create() {
  this.add.image(500, 300, "sky");

  var particles = this.add.particles("white");

  var emitter = particles.createEmitter({
    speed: 50,
    scale: { start: 0.2, end: 0 },
    blendMode: "ADD"
  });

  var ball = this.physics.add.image(300, 100, "ball");

  ball.setVelocity(450, 450);
  ball.setBounce(1, 1);
  ball.setCollideWorldBounds(true);

  emitter.startFollow(ball);
  emitter2.startFollow(ball);
  emitter3.startFollow(ball);
}
