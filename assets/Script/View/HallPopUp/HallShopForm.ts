import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import UIType from "../../UIFrameWorld/UIType";
import { UIFormType, UIFormShowMode, UIFormLucenyType } from "../../UIFrameWorld/config/SysDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallShopForm extends BaseUIForm {


    CurrentUIType = new UIType(UIFormType.PopUp, UIFormShowMode.Normal, UIFormLucenyType.ImPenetrable);
    ClickMaskClose = false;

    @property(cc.Node)
    CloseNode: cc.Node = null;

    startPosition: cc.Vec2;

    init(obj: any) {
        
        this.startPosition = this.node.convertToNodeSpace(obj.startPosition);
    }
    start () {
        this.CloseNode.on('click',() => {
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
