import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import UIType from "../../UIFrameWorld/UIType";
import { UIFormType, UIFormShowMode, UIFormLucenyType } from "../../UIFrameWorld/config/SysDefine";
import SoundManager from "../../UIFrameWorld/SoundManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallSettingForm extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.PopUp, UIFormShowMode.Normal, UIFormLucenyType.ImPenetrable);
    ClickMaskClose = false;

    @property(cc.Node)
    musicNode: cc.Node = null;
    @property(cc.Node)
    effectNode: cc.Node = null;
    @property(cc.Toggle)
    musicToggle: cc.Toggle = null;
    @property(cc.Toggle)
    effectToggle: cc.Toggle = null;
    @property(cc.Node)
    logout: cc.Node = null;


    @property(cc.Node)
    CloseNode: cc.Node= null;

    startPosition: cc.Vec2;

    init(obj: any) {
        
        this.startPosition = this.node.convertToNodeSpace(obj.startPosition);
    }
    // onLoad () {}

    start () {
        this.logout.on('click', this.logoutClick, this);
        this.musicNode.getChildByName("adjust_button").on(cc.Node.EventType.TOUCH_MOVE, this.musicMoveBar, this);
        this.effectNode.getChildByName("adjust_button").on(cc.Node.EventType.TOUCH_MOVE, this.effectMoveBar, this);

        this.CloseNode.on('click', () => {
            this.CloseUIForm();
        }, this)

        this.initVolumeBar();
    }
    initVolumeBar() {
        let obj = SoundManager.init();  // 取出默认值
        this.musicNode.getComponent(cc.ProgressBar).progress = obj.musicVolume;
        this.musicNode.getChildByName("adjust_button").x = obj.musicVolume * 324 - 162;
        this.effectNode.getComponent(cc.ProgressBar).progress = obj.effectVolume;
        this.effectNode.getChildByName("adjust_button").x = obj.effectVolume * 324 - 162;
        
        if(obj.musicVolume == 0) this.musicToggle.isChecked = false;
        if(obj.effectVolume == 0) this.effectToggle.isChecked = false;
    }
    /** 浮标移动 */
    musicMoveBar(e: cc.Event.EventTouch) {
        let x  = this.musicNode.getChildByName("adjust_button").x + e.getDeltaX();
        if(x < -162 || x > 162) {
            return 
        }
        if(x < -160) {
            this.musicToggle.isChecked = false;
        }else {
            this.musicToggle.isChecked = true;
        }
        this.musicNode.getChildByName("adjust_button").x = x;
        SoundManager.setSoundVolume(this.transLenToVolume(x, this.musicNode.getComponent(cc.ProgressBar)));
    }
    effectMoveBar(e) {
        let x  = this.effectNode.getChildByName("adjust_button").x + e.getDeltaX();
        if(x < -162 || x > 162) {
            return 
        }
        if(x < -160) {
            this.effectToggle.isChecked = false;
        }else {
            this.effectToggle.isChecked = true;
        }

        this.effectNode.getChildByName("adjust_button").x = x;
        SoundManager.setSoundVolume(null, this.transLenToVolume(x, this.effectNode.getComponent(cc.ProgressBar)));
    }

    public logoutClick() {
        
    }

    public transLenToVolume(len: number, progress: cc.ProgressBar) {
        if(len < -160) {
            progress.progress = 0;
            return 0;
        }
        if(len > 160) {
            progress.progress = 1;
            return 1;
        }

        len = len + 162;
        let volume = (len / 324);
        progress.progress = volume;
        return volume;
    }

    ShowPopUpAnimation(callBack: Function) {
        this.node.scale = 0;
        this.node.setPosition(this.startPosition);
        cc.tween(this.node)
        .to(0.3, {scale:1, position:cc.v2(0,0)})
        .call(() => {
            // 显示mask
            callBack();
        })
        .start();
    }

    // update (dt) {}
}
