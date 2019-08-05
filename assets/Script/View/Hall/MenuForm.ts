import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.Fixed)

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Bottom, this.node, -2);
    }

    menuClick(e, data) {
        switch(data) {
            case "sz":
                
            break;
            case "yj":
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
            break;
        }
    }

    // update (dt) {}
}
