import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType, UIFormLucenyType, UIFormShowMode } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";
import UIManager from "../../UIFrameWorld/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CreateRoomForm extends BaseUIForm {

    ClickMaskClose = false;
    CurrentUIType = new UIType(UIFormType.PopUp, UIFormShowMode.Normal, UIFormLucenyType.Lucency);
    
    @property(cc.Node)
    ddzNode: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    init() {
        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Right, this.node, 10);
    }

    start () {
        this.ddzNode.on('click', this.ddzNodeClick, this);
    }

    ddzNodeClick() {
        // 隐藏自己, 显示ChooseRoomForm
        this.CloseUIForm();
    }

    HidePopUpAnimation(callback: Function) {
        AdaptationManager.GetInstance().removeAdaptationToForm(this.node);
        this.node.runAction(cc.sequence(
            cc.moveBy(0.3, cc.v2(this.node.width + 20, 0)).easing(cc.easeBackIn()),
            cc.delayTime(0.1),
            cc.callFunc(() => {
                callback();
                UIManager.GetInstance().ShowUIForms("UIForms/ChooseRoomForm");
            })
        ));
    }



    // update (dt) {}
}
