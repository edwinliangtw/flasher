import { m, style, VFlags } from "million";
import { XSprite } from "./XSprite";

export class XLabel extends XSprite {

    private _text = '';
    public get text() { return this._text }
    public set text(text) { this._text = text }

    constructor(id?: string) {
        super(id);
        this.background = '';
        this.style.width = '';
        this.style.height = '';
    }

    protected getVNode(): any {
        return m('span', { id: this.id, style: style(this.style) }, [this._text], VFlags.ONLY_TEXT_CHILDREN);
    }

}