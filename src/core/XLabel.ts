import $ from "jquery";
import { XSprite } from "./XSprite";

export class XLabel extends XSprite {

    protected node = $('<span>')

    private _text = '';
    public get text() { return this._text }
    public set text(text) { this.node.html(this._text = text) }

    constructor(id?: string) {
        super(id);
        this.background = '';
        this.style.width = '';
        this.style.height = '';
    }

}