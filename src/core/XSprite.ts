import { DOMNode, m, patch, style } from "million";
import { XObject } from "./XObject";
import { XStage } from "./XStage";

export class XSprite extends XObject {

    private _id: string;
    public get id() { return this._id };

    protected style: any;

    protected _stage?: XStage;
    public get stage() { return this._stage }

    protected _parent?: XSprite;
    public get parent() { return this._parent }

    public get width() { return parseInt(this.style.width) }
    public set width(w) { this.style.width = w + 'px', this.render() }

    public get height() { return parseInt(this.style.height) }
    public set height(h) { this.style.height = h + 'px', this.render() }

    public get percentWidth() { return parseInt(this.style.width) }
    public set percentWidth(w) { this.style.width = w + '%', this.render() }

    public get percentHeight() { return parseInt(this.style.height) }
    public set percentHeight(h) { this.style.height = h + '%', this.render() }

    public get x() { return parseInt(this.style.left) }
    public set x(x) { this.style.left = x + 'px', this.render() }

    public get y() { return parseInt(this.style.top) }
    public set y(y) { this.style.top = y + 'px', this.render() }

    public get background() { return this.style.background }
    public set background(background) { this.style.background = background, this.render() }

    private _childrens: XSprite[] = [];
    public get numChildren() { return this._childrens.length }

    constructor(id?: string) {
        super();
        this._id = id || 'obj_' + this.createId;
        this.style = {
            'position': 'absolute',
            'display': 'inline-block',
            'left': '0px',
            'top': '0px',
            'width': '100px',
            'height': '100px',
            'background': 'rgba(0,0,0,.05)'
        }
        console.log(this.id)
    }

    public addChild(sprite: XSprite) {
        sprite._parent = this;
        sprite._stage = this.stage;
        this._childrens.push(sprite);
        this.render();
        return sprite;
    }

    public addChildAt(sprite: XSprite, index: number) {
        sprite._parent = this;
        sprite._stage = this.stage;
        this._childrens.splice(index, 0, sprite);
        this.render();
        return sprite;
    }

    public removeChild(sprite: XSprite) {
        sprite._parent = undefined;
        sprite._stage = undefined;
        const index = this._childrens.findIndex(item => item == sprite)
        this._childrens.splice(index, 1);
        this.render();
        return sprite;
    }

    public removeChildAt(index: number) {
        const sprite = this._childrens.splice(index, 1)[0];
        sprite._parent = undefined;
        sprite._stage = undefined;
        this.render();
        return sprite;
    }

    public removeChildren() {
        this._childrens.map(item => {
            item._parent = undefined;
            item._stage = undefined;
        })
        this._childrens.length = 0;
        this.render();
    }

    public getChildAt(index: number) {
        return this._childrens[index];
    }

    protected getVNode(): any {
        return m('div', { id: this._id, style: style(this.style) }, this._childrens.map(item => item.getVNode()));
    }

    private render() {
        const el = document.getElementById(this.id) as DOMNode
        el && patch(el, this.getVNode());
    }

}