import { XLabel } from "./core/XLabel";
import { XSprite } from "./core/XSprite";
import { XStage } from "./core/XStage";

class Main extends XSprite {

    constructor() {
        super('main');
        // stage init
        new XStage().addChild(this);

        // main container init
        this.percentWidth = 100;
        this.percentHeight = 100;
        this.background = 'rgba(0,0,0,0.5)';

        // sprite with label
        const sp = new XSprite;
        sp.x = 200;
        sp.y = 300;
        this.addChild(sp);
        const lb = new XLabel;
        lb.text = 'test';
        sp.addChild(lb);

        const group = new XSprite;
        group.percentWidth = 100;
        group.percentHeight = 100;
        this.addChild(group);
        for (let i = 0; i < 100; i++) {
            const lb = new XLabel;
            lb.text = 'x';
            lb.y = i * 10;
            group.addChild(lb);
        }

        // animation
        const loop = () => {
            for (let i = 0, l = group.numChildren; i < l; i++) {
                const lb = group.getChildAt(i);
                lb.x++;
            }
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }

}

new Main;