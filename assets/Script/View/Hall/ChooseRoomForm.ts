import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import UIType from "../../UIFrameWorld/UIType";
import { UIFormType } from "../../UIFrameWorld/config/SysDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChooseRoomForm extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.Fixed);

    // onLoad () {}

    start () {
        
    }

    // update (dt) {}
}
