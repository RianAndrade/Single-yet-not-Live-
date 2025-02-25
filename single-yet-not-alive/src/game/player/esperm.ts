// script/esperm.ts

export default class Esperm {
  private sprite: Phaser.Physics.Arcade.Sprite;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys: any;

  constructor(scene: Phaser.Scene) {
    // Inicializar o sprite do personagem com a primeira imagem
    this.sprite = scene.physics.add.sprite(400, 300, 'sperm-0000');  // Usando a primeira imagem como referência
    this.sprite.setCollideWorldBounds(true);

    this.sprite.setSize(370, 300);
    this.sprite.setOffset(125, 25);
    this.sprite.setScale(0.5);

    // Criar animação com as 7 imagens
    scene.anims.create({
      key: 'walk',
      frames: [
        { key: 'sperm-0000' },
        { key: 'sperm-0001' },
        { key: 'sperm-0002' },
        { key: 'sperm-0003' },
        { key: 'sperm-0004' },
        { key: 'sperm-0005' },
        { key: 'sperm-0006' }
      ],
      frameRate: 10,
      repeat: -1 // Repetir infinitamente
    });

    // Iniciar a animação
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

  // Método para atualizar a movimentação do personagem
  update() {
    const speed = 200; // Velocidade de movimento

    // Reseta a velocidade do personagem
    this.sprite.setVelocity(0);

    let moveX = 0;
    let moveY = 0;

    // Movimento para cima (W ou seta para cima)
    if (this.cursors.up.isDown || this.keys.up.isDown) {
      moveY = -speed;
    }

    // Movimento para baixo (S ou seta para baixo)
    if (this.cursors.down.isDown || this.keys.down.isDown) {
      moveY = speed;
    }

    // Movimento para a esquerda (A ou seta para a esquerda)
    if (this.cursors.left.isDown || this.keys.left.isDown) {
      moveX = -speed;
    }

    // Movimento para a direita (D ou seta para a direita)
    if (this.cursors.right.isDown || this.keys.right.isDown) {
      moveX = speed;
    }

    // Aplica a velocidade ao personagem
    this.sprite.setVelocityX(moveX);
    this.sprite.setVelocityY(moveY);

    // Calcula o ângulo de rotação com base na direção do movimento
    if (moveX !== 0 || moveY !== 0) {
      const angle = Math.atan2(moveY, moveX); // Calcula o ângulo em radianos
      this.sprite.rotation = angle; // Aplica o ângulo de rotação ao personagem
    }
  }

  // Método para acessar o sprite (caso precise em outro lugar)
  getSprite() {
    return this.sprite;
  }
}

