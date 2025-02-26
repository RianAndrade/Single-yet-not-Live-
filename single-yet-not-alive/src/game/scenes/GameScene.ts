import Esperm from '../player/esperm';

export default class GameScene extends Phaser.Scene {
    private esperm: Esperm;
    private gameWidth: number;
    private gameHeight: number;
    private obstacleThickness: number = 20;
    private wallTexture: string = 'wall';

    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.spritesheet('sperm-sheet', '/assets/Sprite-SPerm01-100.png', {
            frameWidth: 100,
            frameHeight: 100
        });

        this.load.image('wall', '/assets/parede.png');
        this.load.image('wall2', '/assets/parede2.png');
        this.load.image('tadalinha', '/assets/tadala.gif');
    }

    create() {
        this.gameWidth = this.scale.width;
        this.gameHeight = this.scale.height * 5;

        this.cameras.main.setBackgroundColor('#ffc6d5');

        this.esperm = new Esperm(this);
        this.cameras.main.setBounds(0, 0, this.gameWidth, this.gameHeight);
        this.cameras.main.startFollow(this.esperm.getSprite());

        this.createWalls();
        this.createLabirinto();
        this.createTadalinha();
    }

    update() {
        this.esperm.update();
    }

    private createWalls() {
        const wallWidth = 50;
        const wallHeight = 400;
        const numWalls = Math.ceil(this.gameHeight / wallHeight);

        for (let i = 0; i < numWalls; i++) {
            const yPos = i * wallHeight + wallHeight / 2;

            this.matter.add.image(-wallWidth / 2, yPos, 'wall2', undefined, {
                isStatic: true,
                label: 'wall'
            })
            .setOrigin(0.5, 0.5)
            .setScale(1);
            
            this.matter.add.image(this.gameWidth + wallWidth / 2, yPos, 'wall', undefined, {
                isStatic: true,
                label: 'wall'
            })
            .setOrigin(0.5, 0.5)
            .setScale(1);
        }
    }

    private createLabirinto() {
        const pathWidth = 800; // Largura dos caminhos livres
        const wallHeight = 400;
        const wallMargin = 80;
        let x = wallMargin;
        let y = 200;

        for( let i = 1; i < 3; i++) {
            this.matter.add.image(x, y, this.wallTexture, undefined, {
                isStatic: true,
                label: 'labirinto'
            }).setAngle(90);

            // Alternando direções do labirinto
            if (x < this.gameWidth - wallMargin - 200) {
                x += pathWidth;
            } else {
                x = wallMargin;
                y += wallHeight / 2;
            }
        }
    }

    private createTadalinha() {
        const x = Phaser.Math.Between(100, this.gameWidth - 100);
        const y = Phaser.Math.Between(200, this.gameHeight - 200);
        
        this.matter.add.image(x, y, 'tadalinha', undefined, {
            isStatic: false,
            label: 'tadalinha',
            restitution: 0.8 // Faz o objeto quicar quando colide
        }).setOrigin(0.5, 0.5).setScale(0.3);
    }
}

