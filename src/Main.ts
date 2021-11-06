import { XLabel } from "./core/XLabel";
import { IEvent, XSprite } from "./core/XSprite";
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
        this.addEventListener('onClick', (event: IEvent) => {
            console.log('main click!')
        })

        // sprite with label
        const sp = new XSprite;
        sp.x = 200;
        sp.y = 300;
        this.addChild(sp);
        const lb = new XLabel('textNode');
        lb.text = 'textNode';
        sp.addChild(lb);
        lb.addEventListener('onClick', (event: IEvent) => {
            console.log('text click!')
        })
    }

}

new Main;