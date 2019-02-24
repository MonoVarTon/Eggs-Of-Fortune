import * as PIXI from 'pixi.js'
import API from './API.js'

export default class ItemBox extends PIXI.Container {
    constructor(prnt, name) {
        super();


        this._prnt = prnt;
        this.name = 'ItemBox';
        this.id = name;
        this._selected = false;
        this._disabled = false;
        
        this._boxSelected = API.addObj('boxSelected', 10, -20);
        this.addChild(this._boxSelected);
        this._boxLock = API.addObj('boxLock');
        this.addChild(this._boxLock);
        this._boxOver = API.addObj('boxOver', 0, -25);
        this.addChild(this._boxOver);
        this._boxGold = API.addObj('boxGold', 0, -76);
        this.addChild(this._boxGold);
        this._boxEmpty = API.addObj('boxEmpty', 0, -76);
        this.addChild(this._boxEmpty);
        
        this.refresh();
        this.main = this._boxLock;
        this.over = this._boxOver;
        
        this.w = this._boxLock.w*0.9;
        this.h = this._boxLock.h;
    }

    setDisabled(value) {
        this._disabled = value;
        this.buttonMode = !value;
        this.interactive = !value;
    }

    setSelected(value) {
        this._boxSelected.visible = value;
    }

    openBox(value) {
        this._boxLock.visible = false;
        if (value) {
            this._boxGold.visible = true;
        } else {
            this._boxEmpty.visible = true;
        }
    }

    refresh() {
        this.setDisabled(false);
        this._boxLock.visible = true;
        this._boxGold.visible = false;
        this._boxEmpty.visible = false;
        this._boxOver.visible = false;
        this._boxSelected.visible = false;
    }
}