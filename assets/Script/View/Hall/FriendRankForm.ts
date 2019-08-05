import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.Fixed);

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Left, this.node, 10);
    }

    // update (dt) {}
}
