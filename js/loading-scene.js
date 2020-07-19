export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'LoadingScene'
        });
    }

    preload() {
        this.load.on('complete', () => {
            this.scene.start('GameScene');
        });
        
        this.load.image('room', 'lenda-do-heroi.png');
        this.load.image('floor', 'floor.png');
        this.load.image('platform', 'platform.png');
        // this.load.music();
        // this.load.sound();
        this.load.spritesheet('sprite', 'eskimo_girl.png', { frameWidth: 24, frameHeight: 24 });
    }

    create() {

    }

    update() {

    }
}
