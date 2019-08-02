import BaseUIForm from "../UIFrameWorld/BaseUIForm";
import UIType from "../UIFrameWorld/UIType";
import { UIFormType } from "../UIFrameWorld/config/SysDefine";
import NetworkManager from "../common/NetworkManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginForm extends BaseUIForm {

    public CurrentUIType = new UIType(UIFormType.Normal);



    init() {

    }

    // onLoad () {}

    start () {
        cc.find("LoginButton", this.node).on(cc.Node.EventType.TOUCH_END, () => {

        }, this);
    }
    /** 登录 */
    public loginToServer() {
        
    }



    // update (dt) {}
}
