import Player from "./player.js";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload() {

    }

    create() {
        this.add.image(0, 0, 'room');
        
        this.player = new Player(this);

        this.teclas = this.input.keyboard.createCursorKeys();
    }

    update() {
        const PLAYER = this.player.sprite;
        
        if (this.teclas.left.isDown) {
            PLAYER.setVelocityX(-160);
            PLAYER.setFlip(true, false)
            PLAYER.anims.play('left', true);

        } else if (this.teclas.right.isDown) {
            PLAYER.setVelocityX(160);
            PLAYER.setFlip(false, false)
            PLAYER.anims.play('right', true);

        } else {
            PLAYER.setVelocityX(0);
            
            if (PLAYER.body.touching.down) {
                PLAYER.anims.play('idle');
            }
        }
        
        if (this.teclas.up.isDown && PLAYER.body.touching.down) {
            PLAYER.setVelocityY(-100);
            PLAYER.anims.play('jump')
        }
    }
}
