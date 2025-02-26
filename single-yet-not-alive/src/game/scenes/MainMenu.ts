import Phaser from 'phaser';

export default class MainMenu extends Phaser.Scene {
    background: Phaser.GameObjects.Image;
    logo: Phaser.GameObjects.Image;
    title: Phaser.GameObjects.Text;
    playButton: Phaser.GameObjects.Text;
    logoTween: Phaser.Tweens.Tween | null;

    constructor() {
        super('MainMenu');
    }

    preload() {
        this.load.image('background', 'assets/logo.jpg'); // Caminho correto da imagem
    }

    create() {
        // Fundo
        this.background = this.add.image(512, 384, 'background')
            .setOrigin(0.5, 0.5)
            .setDisplaySize(this.scale.width, this.scale.height);
        
        const playButton = this.add.text(512, 460, 'START', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100).setInteractive();

    
       // Adicionando um evento de clique no botão
        playButton.on('pointerdown', () => {
            this.changeScene();
        });

        EventBus.emit('current-scene-ready', this);
    }

        changeScene () {
       this.scene.start('GameScene');
    }
}
