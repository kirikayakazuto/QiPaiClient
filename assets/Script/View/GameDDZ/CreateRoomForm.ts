import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType, UIFormLucenyType, UIFormShowMode } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";
import GEventManager from "../../UIFrameWorld/GEventManager";
import { DDZSceneType } from "./DDZConfig";
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
            GEventManager.emit("DDZSceneType", DDZSceneType.FriendRoom);
        }, this)
        GEventManager.on("DDZSceneType", this.switchDDZSceneType, this);
        this.initList(DDZSceneType.Normal)
    }

    initList(type: DDZSceneType) {
        if(type == DDZSceneType.Normal) {
            this.CloseNode.active = false;
            this.NormalNode.active = true;
            this.FriendNode.active = false;
        }
        if(type == DDZSceneType.FriendRoom) {
            this.CloseNode.active = true;
            this.NormalNode.active = false;
            this.FriendNode.active = true;
        }
    }

    switchDDZSceneType(type: any) {
        AdaptationManager.GetInstance().removeAdaptationToForm(this.node);
        switch(type) {
            case DDZSceneType.Normal:
                this.initList(type);
                this.node.runAction(cc.sequence(
                    cc.moveBy(0.3, cc.v2(-(this.node.width + 20), 0)).easing(cc.easeBackIn()),
                    cc.callFunc(() => {
                        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Right, this.node, 10);
                    })
                ));
            break;
            case DDZSceneType.ChooseRoom:
                this.node.runAction(cc.moveBy(0.3, cc.v2(this.node.width + 20, 0)).easing(cc.easeBackIn()));
            break;
            case DDZSceneType.FriendRoom:
                this.node.runAction(cc.sequence([
                    cc.moveBy(0.3, cc.v2(this.node.width + 20, 0)).easing(cc.easeBackIn()),
                    cc.callFunc(() => {
                        if(!this.isCallFriendType) {
                            this.initList(type);
                            this.isCallFriendType = true;
                        }
                        else {
                            this.initList(DDZSceneType.Normal)
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
        GEventManager.emit("DDZSceneType", DDZSceneType.ChooseRoom);
    }
    /** 创建房间 */
    createRoomClick() {
        GEventManager.emit("DDZSceneType", DDZSceneType.FriendRoom);
    }

    entryRoomNode() {
        UIManager.GetInstance().ShowUIForms("UIForms/DDZPopUp/DDZEntryRoomForm", null);
    }

    // update (dt) {}
}
