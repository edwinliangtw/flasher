import $ from "jquery";
import { XSprite } from "./XSprite";

export class XStage extends XSprite {

    constructor() {
        super('stage');
        this.percentWidth = 100;
        this.percentHeight = 100;
        this.background = 'rgb(0,0,0,0)';
        this._stage = this;
        $(document.body).append(this.node);
    }

}