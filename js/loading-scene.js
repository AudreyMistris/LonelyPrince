export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'LoadingScene'
        });
    }

    preload() {
        this.load.image();
        this.load.music();
        this.load.sound();
        this.load.spritesheet();
    }

    create() {

    }

    update() {

    }
}
