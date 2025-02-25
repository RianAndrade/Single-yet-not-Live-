
import { Game as MainGame } from './scenes/Game';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import GameScene from './scenes/GameScene';


const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    physics: {
        default: 'arcade', // Usa física arcade tem outras só ver na doc
        arcade: {
            gravity: { y: 200 }, // Gravidade no eixo Y
            debug: true // para ver hitboxes True
        }
    },
    scene: [ // aqui estão as cenas do game, essas são de exemplo podem mudar 
        GameScene // cena de teste de logica do semen 
    ],

};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
