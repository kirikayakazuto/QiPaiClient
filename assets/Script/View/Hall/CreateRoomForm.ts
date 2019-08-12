import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType, UIFormLucenyType, UIFormShowMode } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";
import GEventManager from "../../UIFrameWorld/GEventManager";
import { HallSceneType } from "./HallConfig";
import UIManager from "../../UIFrameWorld/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CreateRoomForm extends BaseUIForm {

    ClickMaskClose = false;
    CurrentUIType = new UIType(UIFormType.Fixed);
    
    @property(cc.Node)
    ddzNode: cc.Node = null;
    @property(cc.Node)
    CreateRoomNode: cc.Node = null;
    @property(cc.Node)
    CloseNode: cc.Node = null;
    @property(cc.Node)
    NormalNode: cc.Node = null;
    @property(cc.Node)
    FriendNode: cc.Node = null;
    @property(cc.Node)
    EntryRoomNode: cc.Node= null;
    // LIFE-CYCLE CALLBACKS:
    isCallFriendType = false;

    // onLoad () {}
    init() {
        
    }

    start () {
        this.ddzNode.on('click', this.ddzNodeClick, this);
        this.CreateRoomNode.on('click', this.createRoomClick, this);
        this.EntryRoomNode.on('click', this.entryRoomNode, this);
        this.CloseNode.on('click', () => {
            GEventManager.emit("HallSceneType", HallSceneType.FriendRoom);
        }, this)
        GEventManager.on("HallSceneType", this.switchHallSceneType, this);
        this.initList(HallSceneType.Normal)
    }

    initList(type: HallSceneType) {
        if(type == HallSceneType.Normal) {
            this.CloseNode.active = false;
            this.NormalNode.active = true;
            this.FriendNode.active = false;
        }
        if(type == HallSceneType.FriendRoom) {
            this.CloseNode.active = true;
            this.NormalNode.active = false;
            this.FriendNode.active = true;
        }
    }

    switchHallSceneType(type: any) {
        AdaptationManager.GetInstance().removeAdaptationToForm(this.node);
        switch(type) {
            case HallSceneType.Normal:
                this.initList(type);
                this.node.runAction(cc.sequence(
                    cc.moveBy(0.3, cc.v2(-(this.node.width + 20), 0)).easing(cc.easeBackIn()),
                    cc.callFunc(() => {
                        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Right, this.node, 10);
                    })
                ));
            break;
            case HallSceneType.ChooseRoom:
                this.node.runAction(cc.moveBy(0.3, cc.v2(this.node.width + 20, 0)).easing(cc.easeBackIn()));
            break;
            case HallSceneType.FriendRoom:
                this.node.runAction(cc.sequence([
                    cc.moveBy(0.3, cc.v2(this.node.width + 20, 0)).easing(cc.easeBackIn()),
                    cc.callFunc(() => {
                        if(!this.isCallFriendType) {
                            this.initList(type);
                            this.isCallFriendType = true;
                        }
                        else {
                            this.initList(HallSceneType.Normal)
                            this.isCallFriendType = false;
                        }
                    }),
                    cc.moveBy(0.3, cc.v2(-(this.node.width + 20), 0)).easing(cc.easeBackIn()),
                    cc.callFunc(() => {
                        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Right, this.node, 10);
                    })
                ]));
            break;
        }
    }

    ddzNodeClick() {
        GEventManager.emit("HallSceneType", HallSceneType.ChooseRoom);
    }
    /** 创建房间 */
    createRoomClick() {
        GEventManager.emit("HallSceneType", HallSceneType.FriendRoom);
    }

    entryRoomNode() {
        UIManager.GetInstance().ShowUIForms("UIForms/HallPopUp/HallEntryRoomForm", null);
    }

    // update (dt) {}
}
