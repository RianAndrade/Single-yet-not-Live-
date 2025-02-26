
import { Game as MainGame } from './scenes/Game';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu'

const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    physics: {
        default: 'matter',
        matter: {
        debug: true,
        gravity: { y: 0 }, // Remove a gravidade vertical
        enableSleeping: true // Melhora performance desativando corpos parados
        },
        debug: {
            showBody: true,
            showStaticBody: true
        },
    },
    scene: [ // aqui estão as cenas do game, essas são de exemplo podem mudar 
        GameScene,
        MainMenu,
// cena de teste de logica do semen 
    ],

};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;