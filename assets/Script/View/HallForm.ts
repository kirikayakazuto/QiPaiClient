import BaseUIForm from "../UIFrameWorld/BaseUIForm";
import UIType from "../UIFrameWorld/UIType";
import { UIFormType, UIFormShowMode } from "../UIFrameWorld/config/SysDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallForm extends BaseUIForm {

    public CurrentUIType = new UIType(UIFormType.Normal, UIFormShowMode.HideOther);

    // onLoad () {}

    start () {
        
    }

    // update (dt) {}
}
