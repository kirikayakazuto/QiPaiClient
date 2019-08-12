import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameRoomForm extends BaseUIForm {

    public CurrentUIType = new UIType(UIFormType.Normal); 


    // onLoad () {}

    start () {
        
    }

    // update (dt) {}
}
