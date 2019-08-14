import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType, UIFormShowMode } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import UIManager from "../../UIFrameWorld/UIManager";
import NetworkManager from "../../common/NetworkManager";
import {modelPackage} from "../../protocol/protobuf/Hall"
import { GameType } from "../../common/GameType";
import { Stype } from "../../common/Stype";
import { DDZGameCtype, HallCtype } from "../../common/Ctype";
import HallLogic from "./HallLogic";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallForm extends BaseUIForm {

    public CurrentUIType = new UIType(UIFormType.Normal, UIFormShowMode.HideOther);

    roleAction: cc.Action = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        UIManager.GetInstance().ShowUIForms("UIForms/DDZForm/UserInfoForm");
        
    }

    HallServiceReturn() {

    }

    enterGame() {
        this.getComponent(HallLogic).enterGame(1);
    }
    // update (dt) {}
}
