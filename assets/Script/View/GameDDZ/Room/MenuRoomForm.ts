import BaseUIForm from "../../../UIFrameWorld/BaseUIForm";
import UIType from "../../../UIFrameWorld/UIType";
import { UIFormType } from "../../../UIFrameWorld/config/SysDefine";
import AdaptationManager, { AdaptationType } from "../../../UIFrameWorld/AdaptationManager";
import NetworkManager from "../../../common/NetworkManager";
import { Stype } from "../../../common/Stype";
import { DDZGameCtype } from "../../../common/Ctype";
import { CodeEnum } from "../../../common/CodeEnum";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MenuRoomForm extends cc.Component {

    
    @property(cc.Node)
    BackNode: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Top, this.node);
        this.BackNode.on('click', this.clickBackButton, this);
    }

    clickBackButton() {
        NetworkManager.sendMessage(Stype.GameService, DDZGameCtype.ExitDDZGame, null, CodeEnum.OK)
    }

    // update (dt) {}
}
