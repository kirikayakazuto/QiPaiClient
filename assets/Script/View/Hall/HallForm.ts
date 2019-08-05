import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType, UIFormShowMode } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";
import UIManager from "../../UIFrameWorld/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallForm extends BaseUIForm {

    public CurrentUIType = new UIType(UIFormType.Normal, UIFormShowMode.HideOther);

    
    // onLoad () {}

    start () {        
        UIManager.GetInstance().ShowUIForms("UIForms/UserInfoForm");
        UIManager.GetInstance().ShowUIForms("UIForms/FriendRankForm");
        UIManager.GetInstance().ShowUIForms("UIForms/CreateRoomForm");
        UIManager.GetInstance().ShowUIForms("UIForms/MenuForm");
        this.playRoleAnim();
    }

    playRoleAnim() {
        let role = cc.find("role", this.node)
        role.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(5, 1.1),  cc.scaleTo(5, 1))));
    }
    update (dt) {}
}
