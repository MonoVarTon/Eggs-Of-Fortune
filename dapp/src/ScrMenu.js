import InterfaceObject from './InterfaceObject.js'
import WndInstruction from './WndInstruction.js'
import API from './API.js'

export default class Menu extends InterfaceObject {
    constructor() {
        super();

        this.initData();

        let bg = API.addObj('bgGame', API._W / 2, API._H / 2);
        let scaleBack = API._W / bg.w;
        bg.scale.x = scaleBack;
        bg.scale.y = scaleBack;
        this.addChild(bg);
        
        let titleGame = API.addObj('titleGame', 960, 400)
        this.addChild(titleGame)
        let pirateTitle = API.addObj('pirateTitle', 1530, 580, 0.85)
        this.addChild(pirateTitle)

        this.createGui()
    }

    createGui() {
        let tfVersion = API.addText(API.version, 24, '#ffffff', '#000000', 'right', 400, 4);
        tfVersion.x = API._W - 30;
        tfVersion.y = API._H - tfVersion.height - 10;
        this.addChild(tfVersion);

        let logoDaoCasino = API.addObj('logoDaoCasino', 180, 980);
        this.addChild(logoDaoCasino);
        
        let btnStart = API.addButton('btnText', API._W / 2, 960);
        btnStart.name = 'btnStart'
        btnStart.overSc = true;
        this.addChild(btnStart);
        this.arButtons.push(btnStart);
        let tfStart = API.addText(API.getText('start'), 50, '#FFFFFF', undefined, 'center', 700);
        tfStart.x = 0;
        tfStart.y = -tfStart.height / 2;
        btnStart.addChild(tfStart);
        this.btnStart = btnStart;
        
        let btnFacebook = API.addButton('btnFacebook', 1870, 48);
        btnFacebook.overSc = true;
        this.addChild(btnFacebook);
        this.arButtons.push(btnFacebook);
        let btnTwitter = API.addButton('btnTwitter', 1870, 123);
        btnTwitter.overSc = true;
        this.addChild(btnTwitter);
        this.arButtons.push(btnTwitter);
    }

    showTutor(_self){
        _self.btnStart.setDisabled(true);
        
        if (_self.wndInfo == undefined) {
            _self.wndInfo = new WndInstruction(_self);
            _self.wndInfo.x = API._W / 2;
            _self.wndInfo.y = API._H / 2;
            _self.addChild(_self.wndInfo);
        }

        _self.wndInfo.show(_self.startGame)
        _self.wndInfo.visible = true;
        _self.curWindow = _self.wndInfo;
    }

    // CLOSE
    closeWindow(wnd) {
        if (wnd) {
            this.curWindow = wnd;
        }
        if (this.curWindow) {
            this.curWindow.visible = false;
            this.curWindow = undefined;
        }
    }

    // CLICK
    clickStart() {
        this.showTutor(this);
    }

    startGame() {
        // this.removeAllListener()
        API.addScreen('ScrGame');
    }

    clickFB() {
        let url = 'https://www.facebook.com/DAO.Casino/';
        window.open(url, '_blank')
    }

    clickTwitter() {
        let url = 'https://twitter.com/daocasino';
        window.open(url, '_blank')
    }

    clickObj (item_mc) {
        if (item_mc._disabled) {
            return;
        }
        if (item_mc.overSc) {
            item_mc.scale.x = 1 * item_mc.sc;
            item_mc.scale.y = 1 * item_mc.sc;
        }

        item_mc._selected = false;
        if (item_mc.name == 'btnStart') {
            this.clickStart();
        } else if (item_mc.name == 'btnDao') {
            this.removeAllListener();
            // var url = 'https://platform.dao.casino/';
            var url = '/';
            window.open(url, '_self');
        } else if (item_mc.name == 'btnFacebook') {
            this.clickFB();
        } else if (item_mc.name == 'btnTwitter') {
            this.clickTwitter();
        }
    }

    update(/*diffTime*/) {
        //console.log('diffTime:', diffTime)
        if (API.options_pause) {
            return;
        }
    }
}