export default class Player {
    constructor(scene) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(10, 100, 'sprite');
        this.sprite.body.setSize(39, 50);
        // this.sprite.setScale(0.5);
        // this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);
        
        scene.anims.create({
            key: 'idle',
            frames: scene.anims.generateFrameNumbers('sprite', { start: 12, end: 23 }),
            frameRate: 15,
            repeat: -1
        });

        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('sprite', { start: 0, end: 11 }),
            frameRate: 15,
            repeat: -1
        });

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('sprite', { start: 0, end: 11 }),
            frameRate: 15,
            repeat: -1
        });

        scene.anims.create({
            key: 'jump',
            frames: scene.anims.generateFrameNumbers('sprite', { start: 24, end: 35 }),
            frameRate: 15,
            repeat: -1
        });
    }
}
