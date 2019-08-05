import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType, UIFormShowMode } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";
import UIManager from "../../UIFrameWorld/UIManager";
import GEventManager from "../../UIFrameWorld/GEventManager";
import { HallSceneType } from "./HallConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallForm extends BaseUIForm {

    public CurrentUIType = new UIType(UIFormType.Normal, UIFormShowMode.HideOther);

    roleAction: cc.Action = null;
    // onLoad () {}

    start () {        
        UIManager.GetInstance().ShowUIForms("UIForms/UserInfoForm");
        UIManager.GetInstance().ShowUIForms("UIForms/FriendRankForm");
        UIManager.GetInstance().ShowUIForms("UIForms/CreateRoomForm");
        UIManager.GetInstance().ShowUIForms("UIForms/MenuForm");
        UIManager.GetInstance().ShowUIForms("UIForms/ChooseRoomForm")
        this.playRoleAnim();

        GEventManager.on("HallSceneType", this.switchHallSceneType, this);
    }
    /** 切换 */
    switchHallSceneType(type: HallSceneType) {
        if(this.roleAction && this.roleAction.isDone() == false) {
            return ;
        }
        let role = cc.find("role", this.node);
        switch(type) {
            case HallSceneType.Normal:
                this.roleAction = role.runAction(cc.moveBy(0.3, cc.v2(380, 0)).easing(cc.easeBackIn()));
            break;
            case HallSceneType.ChooseRoom:
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
