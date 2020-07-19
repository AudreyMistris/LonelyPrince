export default class Player {
    constructor(scene) {
        this.scene = scene;
        
        scene.anims.create({
            key: 'idle'
        });

        scene.anims.create({
            key: 'left'
        });

        scene.anims.create({
            key: 'right'
        });

        scene.anims.create({
            key: 'jump'
        });
    }
}
