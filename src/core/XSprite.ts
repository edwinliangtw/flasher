import $ from "jquery";
import { XObject } from "./XObject";
import { XStage } from "./XStage";

export class XSprite extends XObject {

    protected node = $('<div>');

    private _id: string;
    public get id() { return this._id };

    protected style: any;
    protected events: any = { onClick: function (e: any) { e.stopPropagation(); } };

    protected _stage?: XStage;
    public get stage() { return this._stage }

    protected _parent?: XSprite;
    public get parent() { return this._parent }

    public get width() { return parseInt(this.style.width) }
    public set width(w) { this.style.width = w + 'px' }

    public get height() { return parseInt(this.style.height) }
    public set height(h) { this.style.height = h + 'px' }

    public get percentWidth() { return parseInt(this.style.width) }
    public set percentWidth(w) { this.style.width = w + '%' }

    public get percentHeight() { return parseInt(this.style.height) }
    public set percentHeight(h) { this.style.height = h + '%' }

    public get x() { return parseInt(this.style.left) }
    public set x(x) { this.style.left = x + 'px' }

    public get y() { return parseInt(this.style.top) }
    public set y(y) { this.style.top = y + 'px' }

    public get background() { return this.style.background }
    public set background(background) { this.style.background = background }

    private _childrens: XSprite[] = [];
    public get numChildren() { return this._childrens.length }

    constructor(id?: string) {
        super();
        this._id = id || 'obj_' + this.createId;
        this.node.attr('id', this._id);
        this.style = {
            'position': 'absolute',
            'display': 'inline-block',
            'left': '0px',
            'top': '0px',
            'width': '100px',
            'height': '100px',
            'background': 'rgba(0,0,0,.05)'
        }
        const self = this;
        this.style = new Proxy(this.style, {
            set: function (target, prop, value) {
                target[prop] = value;
                self.node.css(self.style);
                return true;
            }
        });
        this.node.on('click', (e: any) => e.stopPropagation());
    }

    public addChild(sprite: XSprite) {
        sprite._parent = this;
        sprite._stage = this.stage;
        this._childrens.push(sprite);
        this.node.append(sprite.node);
        return sprite;
    }

    public addChildAt(sprite: XSprite, index: number) {
        sprite._parent = this;
        sprite._stage = this.stage;
        this._childrens.splice(index, 0, sprite);
        if (index < 1)
            this.node.prepend(sprite.node);
        else if (index > this.node.children().length - 1)
            this.node.append(sprite.node);
        else
            this.node.find('>*').eq(index - 1).after(sprite.node);
        return sprite;
    }

    public removeChild(sprite: XSprite) {
        sprite._parent = undefined;
        sprite._stage = undefined;
        const index = this._childrens.findIndex(item => item == sprite)
        this._childrens.splice(index, 1);
        this.node.find('>*').eq(index).remove();
        return sprite;
    }

    public removeChildAt(index: number) {
        const sprite = this._childrens.splice(index, 1)[0];
        sprite._parent = undefined;
        sprite._stage = undefined;
        this.node.find('>*').eq(index).remove();
        return sprite;
    }

    public removeChildren() {
        this._childrens.map(item => {
            item._parent = undefined;
            item._stage = undefined;
        })
        this.node.find('>*').remove();
        this._childrens.length = 0;
    }

    public getChildAt(index: number) {
        return this._childrens[index];
    }

    public addEventListener(eventName: any, listener: Function) {
        this.node.on(eventName, (e: any) => { e.stopPropagation(); listener({ eventName, currentTarget: self }) });
    }

    public removeEventListener(eventName: any) {
        this.node.off(eventName);
    }

}

export interface IEvent {
    eventName: string,
    currentTarget: any
}