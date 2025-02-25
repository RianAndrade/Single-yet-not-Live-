
import React, { useRef } from 'react';
import { PhaserGame } from './game/PhaserGame'; // Componente que inicializa o Phaser
import MainMenu from './scenes/MainMenu'; // Sua cena principal

function App() {
    // Referência para o componente PhaserGame
    const phaserRef = useRef(null);

    return (
        <div id="app">
            {/* Renderiza o jogo Phaser */}
            <PhaserGame ref={phaserRef} currentActiveScene={(scene) => {
                console.log('Cena atual:', scene.scene.key); //  deslia se quiser o log da cena atual
            }} />
        </div>
    );
}

export default App;
