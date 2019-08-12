import BaseUIForm from "../UIFrameWorld/BaseUIForm";
import UIType from "../UIFrameWorld/UIType";
import { UIFormType } from "../UIFrameWorld/config/SysDefine";
import UserManager from "../common/UserManager";
import HttpManager from "../common/HttpManager";
import GEventManager from "../UIFrameWorld/GEventManager";
import UIManager from "../UIFrameWorld/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginForm extends BaseUIForm {

    public CurrentUIType = new UIType(UIFormType.Normal); 

    @property(cc.Node)
    GuestLogin: cc.Node = null;
    @property(cc.Node)
    WeChatLogin: cc.Node = null;

    @property(cc.Toggle)
    UserAgree: cc.Toggle = null;

    init() {

    }

    // onLoad () {}

    start () {
       this.GuestLogin.on('click', this.guestLogin, this) ;
       GEventManager.on("ConnectServerSuccess", this.loginSuccess, this);
    }
    // 游客登录
    public guestLogin() {
        if(!this.UserAgree.isChecked) {
            cc.log("请勾选");
            return ;
        }
        let guestId = UserManager.getGuestId();
        HttpManager.geustLogin(guestId);
    }
    public loginSuccess() {
        console.log("登录成功");
        GEventManager.emit("UserInfoResources", null)
        UIManager.GetInstance().ShowUIForms("UIForms/Hall/HallForm")
    }
    // update (dt) {}
}
