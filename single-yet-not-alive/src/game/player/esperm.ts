export default class Esperm {
  private sprite: Phaser.Physics.Matter.Sprite;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys: any;

  constructor(scene: Phaser.Scene) {
    // Inicializa o sprite do personagem com Matter.js usando a spritesheet
    this.sprite = scene.matter.add.sprite(400, 300, 'sperm-sheet', 0);
    this.sprite.setFixedRotation();
    this.sprite.setScale(0.5);
    this.sprite.setMass(1);
    this.sprite.setFrictionAir(0.05); // Reduz atrito do ar para um movimento mais fluido

    // Criar animação com a spritesheet
    scene.anims.create({
      key: 'walk',
      frames: scene.anims.generateFrameNumbers('sperm-sheet', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });

    this.sprite.anims.play('walk', true);

    // Configuração de controles
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.keys = scene.input.keyboard.addKeys({
      up: 'W',
      down: 'S',
      left: 'A',
      right: 'D'
    });
  }

  update() {
    const force = 0.002; // Força aplicada para movimento suave
    let moveX = 0;
    let moveY = 0;

    if (this.cursors.up.isDown || this.keys.up.isDown) moveY = -force;
    if (this.cursors.down.isDown || this.keys.down.isDown) moveY = force;
    if (this.cursors.left.isDown || this.keys.left.isDown) moveX = -force;
    if (this.cursors.right.isDown || this.keys.right.isDown) moveX = force;

    // Aplica força em vez de setVelocity
    this.sprite.applyForce({ x: moveX, y: moveY });

    // Ajusta a rotação para a direção do movimento
    if (moveX !== 0 || moveY !== 0) {
      const angle = Math.atan2(moveY, moveX) + Math.PI / 2; // Adiciona 90 graus
      this.sprite.setRotation(angle);
    }
  }

  getSprite() {
    return this.sprite;
  }
}
