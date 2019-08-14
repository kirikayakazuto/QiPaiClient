import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import UIType from "../../UIFrameWorld/UIType";
import { UIFormType } from "../../UIFrameWorld/config/SysDefine";
import { DDZConfig, DDZSceneType } from "./DDZConfig";
import UtilHelper from "../../Helper/UtilHelper";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";
import UIManager from "../../UIFrameWorld/UIManager";
import GEventManager from "../../UIFrameWorld/GEventManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChooseRoomForm extends BaseUIForm {

    public CurrentUIType = new UIType(UIFormType.Fixed);
    
    @property(cc.Node)
    RoomList: Array<cc.Node>=[];    
    @property(cc.Node)
    CloseNode: cc.Node = null;

    init() {
    }

    start () {
        this.initChoose();
        this.CloseNode.on('click', () => {
            GEventManager.emit("DDZSceneType", DDZSceneType.Normal);
        }, this)
        GEventManager.on("DDZSceneType", this.switchDDZSceneType, this);
    }

    switchDDZSceneType(type: any) {
        AdaptationManager.GetInstance().removeAdaptationToForm(this.node);
        switch(type) {
            case DDZSceneType.Normal:
                this.node.runAction(cc.moveBy(0.3, cc.v2(this.node.width + 70, 0)).easing(cc.easeBackIn()));
            break;
            case DDZSceneType.ChooseRoom:
                this.node.runAction(cc.sequence(
                    cc.moveBy(0.3, cc.v2(-(this.node.width + 70), 0)).easing(cc.easeBackIn()),
                    cc.callFunc(()=>{
                        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Right, this.node, 50);
                    })
                ));
            break;
        }
    }
    
    public initChoose() {
        for(let i=0; i<this.RoomList.length; i++) {
            /* this.RoomList[i].getChildByName("lab").getComponent(cc.Label).string = "" + HallConfig.ChooseRoom[i].lowScore;
            this.RoomList[i].getChildByName("lab_player").getComponent(cc.Label).string = "";
            if(HallConfig.ChooseRoom[i].scoreRange[1] == 0) {
                this.RoomList[i].getChildByName("lab_score").getComponent(cc.Label).string = `o${UtilHelper.fomatNumFloorToString(HallConfig.ChooseRoom[i].scoreRange[0])}`;
            }else {
                this.RoomList[i].getChildByName("lab_score").getComponent(cc.Label).string = `o${UtilHelper.fomatNumFloorToString(HallConfig.ChooseRoom[i].scoreRange[0])} - ${UtilHelper.fomatNumFloorToString(HallConfig.ChooseRoom[i].scoreRange[1])}`;
            }  */

            let clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
            clickEventHandler.component = "ChooseRoomForm";// 这个是代码文件名
            clickEventHandler.handler = "entryRoomByType";
            clickEventHandler.customEventData = DDZConfig.ChooseRoom[i].roomType;

            let button = this.RoomList[i].getComponent(cc.Button);            
            button.clickEvents.push(clickEventHandler);
        }
    }
    /** 进入房间, 通过类型 */
    entryRoomByType(e, data) {
        switch(data) {
            case "chuji1":
                cc.log("chuji1");
            break;
            case "chuji2":
                cc.log("chuji2");
            break;
            case "gaoji1":
                cc.log("gaoji1");
            break;
            case "gaoji2":
                cc.log("gaoji2");
            break;
        }
    }

    ShowPopUpAnimation(callback: Function){
        callback();
    }
    HidePopUpAnimation(callback: Function) {
        callback();
    }

    // update (dt) {}
}
