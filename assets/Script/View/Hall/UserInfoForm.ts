import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";
import GEventManager from "../../UIFrameWorld/GEventManager";
import { UserInfo } from "../../Model/UserInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UserInfoForm extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.Fixed);    
    @property(cc.Sprite)
    headImg: cc.Sprite = null;
    @property(cc.Label)
    NickName: cc.Label = null;
    @property(cc.Label)
    ChipNumStr: cc.Label = null;
    @property(cc.Label)
    CardNumStr: cc.Label = null;
    
    @property(cc.Label)
    Gonggao: cc.Label =null;

    gonggaoSpeed = 80;
    
    // onLoad () {}

    start () {
        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Top, this.node);

        GEventManager.on("UserInfoResources", this.updateUserInfo, this);
        GEventManager.on("GonggaoInfo", this.updateGonggaoInfo, this);
    }
    /** 更新玩家信息 */
    private updateUserInfo(data: UserInfo) {
        this.NickName.string   = data.nickName;
        this.ChipNumStr.string = "" + data.chip;
        this.CardNumStr.string = "" + data.roomCard;
        // this.headImg.spriteFrame

    }
    /** 更新公告 */
    private updateGonggaoInfo(obj: any)  {
        this.Gonggao.string = obj.gonggao;
    }


    update (dt) {
        if(this.Gonggao.node.x <= -(320 + this.Gonggao.node.width)) {
            this.Gonggao.node.x = 325;
        }
        this.Gonggao.node.x -= this.gonggaoSpeed * dt;
    }
}
