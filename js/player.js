export default class Player {
    constructor(scene) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(10, 100, 'sprite');
        this.sprite.body.setSize(59, 118);
        // this.sprite.setBounce(0.2); // provavelmente a retirar
        this.sprite.setCollideWorldBounds(true);
        
        scene.anims.create({
            key: 'idle',
            frames: scene.anims.generateFrameNumbers('sprite', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('sprite', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('sprite', { start: 8, end: 11 }),
            frameRate: 20,
            repeat: -1
        });

        scene.anims.create({
            key: 'jump',
            frames: scene.anims.generateFrameNumbers('sprite', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
    }
}
