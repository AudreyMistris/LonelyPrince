import LoadingScene from './loading-scene.js';
import GameScene from './game-scene.js';

const CONFIG = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'jogo-wip',
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            },
            debug: true
        }
    },
    
    scene: [LoadingScene, GameScene]
};

const JOGO = new Phaser.Game(CONFIG);
