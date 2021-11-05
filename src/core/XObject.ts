export class XObject {

    /**
     * id counter
     */
    private static createIdCounter = 0;

    /**
     * unique object create id
     */
    public get createId() { return this._createId; }
    private _createId = 0;

    public get className() { return this.constructor.name; }

    constructor() {
        this._createId = ++XObject.createIdCounter;
    }

}