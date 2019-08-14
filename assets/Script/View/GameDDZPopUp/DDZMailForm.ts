import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType, UIFormShowMode, UIFormLucenyType } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DDZMailForm extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.PopUp, UIFormShowMode.Normal, UIFormLucenyType.ImPenetrable);
    ClickMaskClose = false;

    @property(cc.Node)
    CloseNode: cc.Node = null;
    @property(cc.Node)
    ToggleGroup: cc.Node = null;
    @property(cc.Node)
    ContentNode: cc.Node = null;

    // onLoad () {}
    startPosition: cc.Vec2;

    init(obj: any) {
        
        this.startPosition = this.node.convertToNodeSpace(obj.startPosition);
    }

    start () {
        this.CloseNode.on('click', () => {
            this.CloseUIForm();
        }, this);
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
