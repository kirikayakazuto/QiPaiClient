import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType, UIFormShowMode } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import UIManager from "../../UIFrameWorld/UIManager";
import GEventManager from "../../UIFrameWorld/GEventManager";
import { DDZSceneType } from "./DDZConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallForm extends BaseUIForm {

    public CurrentUIType = new UIType(UIFormType.Normal, UIFormShowMode.HideOther);

    roleAction: cc.Action = null;
    // onLoad () {}
    init() {
        UIManager.GetInstance().ShowUIForms("UIForms/DDZForm/UserInfoForm");
        UIManager.GetInstance().ShowUIForms("UIForms/DDZForm/FriendRankForm");
        UIManager.GetInstance().ShowUIForms("UIForms/DDZForm/CreateRoomForm");
        UIManager.GetInstance().ShowUIForms("UIForms/DDZForm/MenuForm");
        UIManager.GetInstance().ShowUIForms("UIForms/DDZForm/ChooseRoomForm");
    }

    start () {
        this.playRoleAnim();
        GEventManager.on("DDZSceneType", this.switchDDZSceneType, this);
    }
    /** 切换 */
    switchDDZSceneType(type: DDZSceneType) {
        if(this.roleAction && this.roleAction.isDone() == false) {
            return ;
        }
        let role = cc.find("role", this.node);
        switch(type) {
            case DDZSceneType.Normal:
                this.roleAction = role.runAction(cc.moveBy(0.3, cc.v2(380, 0)).easing(cc.easeBackIn()));
            break;
            case DDZSceneType.ChooseRoom:
                this.roleAction = role.runAction(cc.moveBy(0.3, cc.v2(-380, 0)).easing(cc.easeBackIn()));
            break;
        }
    }

    playRoleAnim() {
        let role = cc.find("role", this.node)
        role.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(5, 1.1),  cc.scaleTo(5, 1))));
    }


    update (dt) {}
}
