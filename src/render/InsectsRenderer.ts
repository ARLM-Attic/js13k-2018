import World from '../world/World';
import AABB from '../../helpers/AABB';

export default class InsectsRenderer {
    private context: CanvasRenderingContext2D;
    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    public render(world: World): void {
        this.context.fillStyle = 'tomato';
        world.insects.forEach((insect) => {
            const aabb: AABB = insect.getAABB();
            this.context.fillRect(aabb.x, aabb.y, aabb.width, aabb.height);
        });
    }
}
