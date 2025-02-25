// scenes/GameScene.js

import Esperm from '../player/esperm';  // Importa o arquivo do personagem

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        // Carregar as 7 imagens do personagem
        for (let i = 0; i <= 6; i++) {
            const fileName = `sperm-${String(i).padStart(4, '0')}`;
            this.load.image(fileName, `/assets/sperm/${fileName}.png`);
        }
    }

    create() {
        // Cria uma instância da classe Esperm
        this.esperm = new Esperm(this);

        // Inicia a animação
        this.esperm.getSprite().anims.play('walk', true);
    }

    update() {
        // Chama o método de atualização do personagem
        this.esperm.update();
    }
}
