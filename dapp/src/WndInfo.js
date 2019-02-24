import InterfaceObject from './InterfaceObject.js'
import API from './API.js'

export default class WndInfo extends InterfaceObject {
    constructor(prnt) {
        super();

        this.initData();

        this.prnt = prnt;

        let rect = new PIXI.Graphics();
        rect.beginFill(0x000000).drawRect(-API._W / 2, -API._H / 2, API._W, API._H).endFill();
        rect.alpha = 0.5;
        this.addChild(rect);
        
        let bg = API.addObj('bgWndWarning',10,0,1.2);
        this.addChild(bg);

        let btnOk = API.addButton('btnText', 0, 90, 0.75);
        btnOk.name = 'btnOk'
        btnOk.overSc = true;
        this.addChild(btnOk);
        this.arButtons.push(btnOk);
        let tfStart = API.addText(API.getText('ok'), 50, '#ffffff', undefined, 'center', 100);
        tfStart.x = 0;
        tfStart.y = -tfStart.height / 2 -5;
        btnOk.addChild(tfStart);
        
        this._btnOk = btnOk;


        let tfDesc = API.addText('', 26, '#ED9829', undefined, 'center', 500)
        tfDesc.y = -80;
        this.addChild(tfDesc);
        this._tfDesc = tfDesc;
    }

    show(str, callback) {
        this._callback = callback;
        this._tfDesc.setText(str);
    }

    clickObj(item_mc) {
        item_mc._selected = false;
        if (item_mc.over) {
            item_mc.over.visible = false;
        }
        if (item_mc.overSc) {
            item_mc.scale.x = 1 * item_mc.sc;
            item_mc.scale.y = 1 * item_mc.sc;
        }

        this.prnt.closeWindow(this);
        if (this._callback) {
            this._callback();
        }
    }
}