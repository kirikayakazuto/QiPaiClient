import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";
import UIManager from "../../UIFrameWorld/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.Fixed)

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Bottom, this.node, -2);
    }

    menuClick(e: cc.Event.EventTouch, data) {
        let pos = e.getLocation();
        let obj = {
            startPosition: pos
        }
        switch(data) {
            case "sz":
                UIManager.GetInstance().ShowUIForms("UIForms/HallPopUp/HallSettingForm", obj);
            break;
            case "yj":
                UIManager.GetInstance().ShowUIForms("UIForms/HallPopUp/HallMailForm", obj);
            break;
            case "fx":
            break;
            case "wf":
            break;
            case "fk":
            break;
            case "zj":
            break;
            case "sc":
                UIManager.GetInstance().ShowUIForms("UIForms/HallPopUp/HallShopForm", obj);
            break;
        }
    }

    // update (dt) {}
}
