import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CreateRoomForm extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.Fixed)
    @property(cc.Node)
    ddzNode: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Right, this.node, 10);
        this.ddzNode.on('click', this.ddzNodeClick, this);
    }

    ddzNodeClick() {
        
    }



    // update (dt) {}
}
