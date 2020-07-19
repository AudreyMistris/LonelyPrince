import LoadingScene from './loading-scene.js';
import GameScene from './game-scene.js';

const CONFIG = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
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

const GAME = new Phaser.Game(CONFIG);
